import mongoose, { Schema, Document, model, models } from "mongoose";

export interface IProject extends Document {
  workspace: mongoose.Types.ObjectId; // reference to workspace
  name: string;
  description?: string;
  status: "active" | "archived"; // simple status
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new Schema<IProject>(
  {
    workspace: {
      type: Schema.Types.ObjectId,
      ref: "Workspace",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "archived"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

export const Project =
  models.Project || model<IProject>("Project", projectSchema);
