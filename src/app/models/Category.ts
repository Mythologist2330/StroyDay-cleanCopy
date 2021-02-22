import { Service } from "./Service";

export class Category {
    id?: string;
    title: string;
    text?: string;
    parent?: string /* id */
    services?: Service[];
    isActive: boolean;    

    constructor(source: Partial<Category>) {
        Object.assign(this, source);
    }

    getActive(): string {
        return this.isActive ? 'опубликовано' : 'не опубликовано'
    }
}