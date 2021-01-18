enum Segment {
    low = 'эконом',
    standart = 'стандарт',
    premium = 'премиум'
}

enum Status {
    create = 'Активна',
    inProgress = 'Выполняется',
    complete = 'Выполнена'
}

export class Order {    
    title: string;
    private price: number;
    createdAt: Date;
    rating: number;
    segment: Segment[];
    status: Status;
    images?: string[];

    constructor(source: Partial<Order>) {
        Object.assign(this, source);
    }

    getPrice() {
        return this.price + '₽'
    }
}