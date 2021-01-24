import { Review } from "./Review";

export enum Segment {
    low = 'эконом',
    standart = 'стандарт',
    premium = 'премиум'
}

export enum Status {
    active = 'Активна',
    inProgress = 'Выполняется',
    complete = 'Выполнена'
}

export class Order {  
    id: string;
    authorId: string;
    performerId: string; 
    title: string;
    description?: string;
    price: number;
    createdAt: number;
    rating: number;
    segment: Segment[];
    status: Status;
    images?: string[];
    views?: number;
    reviews?: Review[];

    constructor(source: Partial<Order>) {
        Object.assign(this, source);
    }

    getPrice(): string {
        if (this.price === null) {
            return 'По договоренности';
        }
        return this.price + '₽'
    }
}