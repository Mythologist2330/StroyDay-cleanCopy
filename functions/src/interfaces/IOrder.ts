enum Segment {
    low = 'эконом',
    standart = 'стандарт',
    premium = 'премиум'
}

enum Status {
    create = 'Активна',
    inProgress = 'Выполяется',
    complete = 'Выполнена'
}

export interface IOrder {      
    title: string;
    price: number;
    createdAt: Date;
    rating: number;
    segment: Segment[];
    status: Status;
    images?: string[];
}