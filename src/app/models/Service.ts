export interface ServicePoint {
    title: string;
    segments: string[];
    price: number;
}

export class Service {
    title: string;
    subServices: ServicePoint[];

    getMinPrice() {
        let minPrice: number;
        this.subServices.map(point => {
            !minPrice ? minPrice = point.price : minPrice = Math.min(minPrice, point.price)
        })
        return minPrice + ' ₽';
    }

    constructor(source: Partial<Service>) {
        Object.assign(this, source);
    }
}