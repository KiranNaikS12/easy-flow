import {  QueryFilter } from "mongoose";

export interface IBaseRepository<T> {
    create(data: Partial<T>) : Promise<T>;
    findById(id: string) : Promise<T | null>;
    findOne(filter: QueryFilter<T>) : Promise<T | null>;
    find(filter: QueryFilter<T>) : Promise<T[]>;
    delete(id: string) :Promise<boolean>
}