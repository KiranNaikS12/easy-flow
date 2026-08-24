import { Document, Model, QueryFilter, UpdateQuery } from "mongoose";
import { IBaseRepository } from "./IBaseRepository";

export class BaseRepository<T extends Document> implements IBaseRepository<T> {
  protected model: Model<T>;

  constructor(initialModel: Model<T>) {
    this.model = initialModel;
  }

  async create(data: Partial<T>): Promise<T> {
    const created = new this.model(data);
    return await created.save();
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

  async delete(id: string): Promise<boolean> {
    const result = await this.model.findByIdAndDelete(id).exec();
    return result !== null;
  }
}
