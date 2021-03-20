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

    getColor(segment) {
        if (segment === 'эконом') {
            return '#F8601F'
        } else if (segment === 'стандарт') {
            return '#0D6FE3'
        } else if (segment === 'премиум') {
            return '#9F8C66'
        }
    }

    getBackground(segment) {
        if (segment === 'эконом') {
            return 'linear-gradient(0deg, rgba(248, 96, 31, 0.2), rgba(248, 96, 31, 0.2)), #FFFFFF'
        } else if (segment === 'стандарт') {
            return 'linear-gradient(0deg, rgba(13, 111, 227, 0.2), rgba(13, 111, 227, 0.2)), #FFFFFF'
        } else if (segment === 'премиум') {
            return 'linear-gradient(0deg, rgba(159, 140, 102, 0.2), rgba(159, 140, 102, 0.2)), #FFFFFF'
        }
    }
}