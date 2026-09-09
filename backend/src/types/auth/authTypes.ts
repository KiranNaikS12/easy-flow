import mongoose, { Document } from "mongoose";

export enum Role {
  Client = "client",
  Head = "head",
  Admin = "admin",
}

export interface BaseAuthDetails {
  email: string;
  roleId?: Role;
  password: string;
}

export interface BaseAuth {
    _id: mongoose.Types.ObjectId;
    email: string;
    roleId: Role;
    isBlocked: boolean;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}