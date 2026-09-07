import mongoose, { Schema } from "mongoose";
import { IMember } from "../types/user/memberTypes";


const memberSchema = new Schema<IMember>({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
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
    required: true
  },
  parentContact: {
    type: String,
    required: true,
    unique: true
  }
});

const memberModel = mongoose.model('Member', memberSchema);
export default memberModel;
