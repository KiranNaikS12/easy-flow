import { Document, Model, QueryFilter, UpdateQuery } from "mongoose";
import { IBaseRepository } from "./IBaseRepository";

export class BaseRepository<T > implements IBaseRepository<T> {
  protected model: Model<T>;

  constructor(initialModel: Model<T>) {
    this.model = initialModel;
  }

  async create(data: Partial<T>): Promise<T> {
    return this.model.create(data);
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findById(id).exec();
  }

  async findOne(filter: QueryFilter<T>): Promise<T | null> {
    return this.model.findOne(filter).exec();
  }

  async find(filter: QueryFilter<T>): Promise<T[]> {
    return this.model.find(filter).exec();
  }

  async update(id: string, data: UpdateQuery<T> | Partial<T>): Promise<T | null> {
    // If the update includes MongoDB operators ($set, $push, etc.), use it directly
    const hasOperators = Object.keys(data).some(key => key.startsWith('$'));
    const updateData = hasOperators ? data : { $set: data };
    return this.model.findByIdAndUpdate(
        id, 
        updateData as UpdateQuery<T>, 
        { new: true }
    ).exec();
}

  async delete(id: string): Promise<boolean> {
    const result = await this.model.findByIdAndDelete(id).exec();
    return result !== null;
  }
}
