import mongoose, { Document } from "mongoose";

export enum Role {
  User = "user",
  Head = "head",
  Admin = "admin",
}

export interface BaseAuthDetails {
  email: string;
  roleId?: Role;
  password: string;
}

export interface BaseAuth extends Document {
    _id: mongoose.Types.ObjectId;
    username: string;
    email: string;
    roleId: Role;
    isBlocked: boolean;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}