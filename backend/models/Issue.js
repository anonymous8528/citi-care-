import mongoose from "mongoose";

const issueSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    issueType: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "",
    },
    location: {
      lat: {
        type: Number,
        default: null,
      },
      lng: {
        type: Number,
        default: null,
      },
    },
    date: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "assigned", "in_progress", "resolved", "rejected"],
      default: "pending",
    },
    progress: {
      type: String,
      default: "",
    },
    citizen: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assignedOfficer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Issue", issueSchema);