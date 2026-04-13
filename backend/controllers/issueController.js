import Issue from "../models/Issue.js";
import cloudinary from "../config/cloudinary.js";
import User from "../models/User.js";

export const createIssue = async (req, res) => {
  try {
    let imageUrl = "";

    if (req.file) {
      imageUrl = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { resource_type: "image" },
          (error, result) => {
            if (error) return reject(error);
            resolve(result.secure_url);
          }
        );

        stream.end(req.file.buffer);
      });
    }

    const issue = await Issue.create({
      name: req.body.name,
      area: req.body.area,
      issueType: req.body.issueType,
      description: req.body.description,
      photo: imageUrl,
      location: {
        lat: req.body.lat ? Number(req.body.lat) : null,
        lng: req.body.lng ? Number(req.body.lng) : null,
      },
      date: req.body.date,
      citizen: req.user._id,
      status: "pending",
      progress: "",
    });

    return res.status(201).json({
      message: "Issue created successfully",
      issue,
    });
  } catch (error) {
    console.error("Create issue error:", error);
    return res.status(500).json({
      message: "Failed to submit issue",
      error: error.message,
    });
  }
};

export const getMyIssues = async (req, res) => {
  try {
    const issues = await Issue.find({ citizen: req.user._id })
      .populate("assignedOfficer", "name email role")
      .sort({ createdAt: -1 });

    return res.status(200).json(issues);
  } catch (error) {
    console.error("Get my issues error:", error);
    return res.status(500).json({ message: "Failed to fetch my issues" });
  }
};

export const getAssignedIssues = async (req, res) => {
  try {
    const issues = await Issue.find({ assignedOfficer: req.user._id })
      .populate("citizen", "name email")
      .sort({ createdAt: -1 });

    return res.status(200).json(issues);
  } catch (error) {
    console.error("Get assigned issues error:", error);
    return res.status(500).json({ message: "Failed to fetch assigned issues" });
  }
};

export const getAllIssues = async (req, res) => {
  try {
    const issues = await Issue.find()
      .populate("citizen", "name email")
      .populate("assignedOfficer", "name email role")
      .sort({ createdAt: -1 });

    return res.status(200).json(issues);
  } catch (error) {
    console.error("Get all issues error:", error);
    return res.status(500).json({ message: "Failed to fetch issues" });
  }
};

export const updateIssueProgress = async (req, res) => {
  try {
    const { status, progress } = req.body;

    const issue = await Issue.findById(req.params.id);
    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    if (
      issue.assignedOfficer &&
      issue.assignedOfficer.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({ message: "Not allowed to update this issue" });
    }

    issue.status = status || issue.status;
    issue.progress = progress || issue.progress;

    await issue.save();

    return res.status(200).json({
      message: "Issue updated successfully",
      issue,
    });
  } catch (error) {
    console.error("Update issue progress error:", error);
    return res.status(500).json({ message: "Failed to update issue" });
  }
};

export const assignOfficer = async (req, res) => {
  try {
    const { officerId } = req.body;

    const officer = await User.findById(officerId);
    if (!officer || officer.role !== "officer") {
      return res.status(400).json({ message: "Invalid officer" });
    }

    const issue = await Issue.findById(req.params.id);
    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    issue.assignedOfficer = officerId;
    issue.status = "assigned";

    await issue.save();

    return res.status(200).json({
      message: "Officer assigned successfully",
      issue,
    });
  } catch (error) {
    console.error("Assign officer error:", error);
    return res.status(500).json({ message: "Failed to assign officer" });
  }
};
