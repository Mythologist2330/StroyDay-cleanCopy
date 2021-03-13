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

    getMinPrice(): string {
        let price =  Math.min(+this.cost.low, +this.cost.standart, +this.cost.premium);
        return 'От ' + price + ' ₽';
    }

    getSegments(): string[] {
        let segments = new Set();
        this.subServices.map(sub => {
            segments.add(sub.segment)
        });
        return Array.from(segments) as string[];
    }

    getServiceBySegment(segment: Segment) {
        return this.subServices.filter(sub => sub.segment === segment)
    }
}