import { Document, QueryFilter, UpdateQuery } from "mongoose";

export interface IBaseRepository<T extends Document> {
    create(data: Partial<T>) : Promise<T>;
    findById(id: string) : Promise<T | null>;
    findOne(filter: QueryFilter<T>) : Promise<T | null>;
    find(filter: QueryFilter<T>) : Promise<T[]>;
    delete(id: string) :Promise<boolean>
}