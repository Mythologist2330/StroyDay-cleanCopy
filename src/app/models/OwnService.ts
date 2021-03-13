import { Segment } from "./Order";
import { Service } from "./Service";

export class OwnService extends Service {
    low: boolean;
    standart: boolean;
    premium: boolean;

    constructor(source: Partial<OwnService>) {
        super(source);
        Object.assign(this, source);
    }

    getSegments(segment = 'all'): string[] {
        if (segment !== 'all') {
            return [Segment[segment]]
        } else {
            let array = [];
            if (this.low) {
                array.push('эконом')
            }
            if (this.standart) {
                array.push('стандарт')
            }
            if (this.premium) {
                array.push('премиум')
            }
            return array
        }
    }

    getMinPrice(segment = 'all'): string {
        if (segment !== 'all') {
            return this.cost[segment] + ' ₽'
        } else {
            let price: string;
            if (this.low) { 
                price = this.cost.low
            } else if (this.standart) {            
                price = this.cost.standart
            } else {
                price = this.cost.premium
            }
            return 'От ' + price + ' ₽'
        }
    }
}