import mongoose, { Schema } from "mongoose";
import { IClient } from "../types/users/clientTypes";
import { Role } from "../types/auth/authTypes";

const clientSchema = new Schema<IClient>({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    required: true,
  },
  parentContact: {
    type: String,
    required: true,
  },
  roleId: {
    type: String,
    enum: Object.values(Role),
    default: Role.Client,
  },
  isBlocked: {
    type: Boolean,
    default: false
  }
});

const clientModel = mongoose.model("Client", clientSchema);
export default clientModel;
