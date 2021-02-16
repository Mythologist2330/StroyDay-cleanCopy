import { Order } from "./Order";
import { Service } from "./Service";

export class Performer {
    id: string;
    logo: string;
    description: {
        title: string;
        info: string;
        lead: string;
        phone: string;
        email?: string;
        fullInfo?: string;
        discount: string;
        activity: string;
        contract: boolean;
        legalStatus: number;
    };
    gallery: string[];
    serviceList: Service[];
    price: string;
    likes: number;
    dislikes: number;
    stars: number;
    orders: Order[];
    location: {
        city: string;
        district?: string;
        adress?: string;
        lat: number;
        lng: number;
        radius: number;
        departureArea?: string;
        metro?: string;    
    }

    constructor(source: Partial<Performer>) {
        Object.assign(this, source);
    }

    getLocation() {
        let location = '';
        if (this.location.city) {
            location += this.location.city + ', ';
        }
        if (this.location.district) {
            location += this.location.district + ', ';
        }
        if (this.location.adress) {
            location += this.location.adress;
        }
        return location;
    }

    getCompletedOrders(): Order[] {
        return this.orders.filter(order => order.status === 'Выполнена')
    }

    getInProgressOrders(): Order[] {
        return this.orders.filter(order => order.status === 'Выполняется')
    }

    getLegalStatus() {
        switch (this.description.legalStatus) {
            case 1: return 'Физическое лицо';            
            case 2: return 'Юридическое лицо';
            case 3: return 'Индивидуальный предприниматель';
        }
    }
    
    getMinPrice() {
        return 'От 1500р'
      }

    setLike() {
        this.likes++
    }

    removeLike() {
        this.likes--
    }

    setDisike() {
        this.dislikes++
    }

    removeDisike() {
        this.dislikes--
    }

    getShortInfo(): string {
        const strLength = this.description.fullInfo.indexOf(" ", 110);
        return this.description.fullInfo.substring(0, strLength) + '...'
    }
}