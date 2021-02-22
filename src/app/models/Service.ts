import { Segment } from "./Order";

export interface ServicePoint {
    title: string;
    segment: Segment;
    price: number;
}

export class Service {
    id?: string;
    title: string;
    text?: string;
    parent: string;    
    cost?: {
        low: string;
        standart: string;
        premium: string;
    };
    subServices?: ServicePoint[];
    isActive: boolean;

    constructor(source: Partial<Service>) {
        Object.assign(this, source);
    }

    getMinPrice() {
        let minPrice = this.subServices[0].price;
        this.subServices.map(point => {
            !minPrice ? minPrice = point.price : minPrice = Math.min(minPrice, point.price)
        })
        return 'От ' + minPrice + ' ₽';
    }

    getSegments(): any[] {
        let segments = new Set();
        this.subServices.map(sub => {
            segments.add(sub.segment)
        });
        return Array.from(segments);
    }

    getServiceBySegment(segment: Segment) {
        return this.subServices.filter(sub => sub.segment === segment)
    }
}