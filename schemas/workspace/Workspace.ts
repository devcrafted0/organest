import mongoose, { Schema, Document, model, models } from "mongoose";

export interface IWorkspace extends Document {
  name: string;
  slug?: string; // optional unique identifier
  owner: mongoose.Types.ObjectId; // reference to User
  type: "personal" | "organization"; // optional type
  createdAt: Date;
  updatedAt: Date;
}

const workspaceSchema = new Schema<IWorkspace>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["personal", "organization"],
      default: "organization",
    },
  },
  {
    timestamps: true,
  }
);

export const Workspace =
  models.Workspace || model<IWorkspace>("Workspace", workspaceSchema);
