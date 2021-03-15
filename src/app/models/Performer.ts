import { Order } from "./Order";
import { Service } from "./Service";

export interface IContactPerson {
    lastName: string,
    firstName: string,
    tel: string,
    email: string,
    active?: boolean
}

export class Performer {
    id: string;
    logo: string;
    description: {
        title: string;
        info: string;
        email?: string;
        fullInfo?: string;
        discount?: string;
        activity?: string;
        contract?: boolean;
        legalStatus?: number;
        requisites?: string;
    };
    gallery: string[];
    serviceList?: Service[];
    services?: {
        id: string;
        low?: string;
        standart?: string;
        premium?: string
    }[];
    price: string;
    likes: number;
    dislikes: number;
    stars: number;
    orders: Order[];
    location: {
        city: string;
        locality?: string;
        district?: string;
        adress?: string;
        house?: string,
        typographicLiterature?: string,
        street?: string,
        housing?: string,
        apartment?: string
        lat?: number;
        lng?: number;
        radius?: number;
        departureAreas?: {            
            locality?: string,
            district?: string
        }[];
        metro?: string[];    
    };
    contactPerson?: IContactPerson[];
    type: {
        title: string,
        requisites: string,
        active: boolean
    }[]

    constructor(source: Partial<Performer>) {
        Object.assign(this, source);
    }

    getContactPerson(): { fullname: string, phone: string, email: string } {
        let person =  this.contactPerson.find(person => person.active);
        let fullname = person.lastName + ' ' + person.firstName;
        let phone = person.tel;
        let email = person.email
        return { fullname, phone, email }
    }

    getTypes(): string {
        return this.type.map(type => type.title).join(', ')
    }

    getLocation() {
        let location = '';
        if (this.location.city) {
            location += this.location.city + ', ';
        }
        if (this.location.house) {
            location += this.location.adress;
        }
        if (this.location.typographicLiterature) {
            location += this.location.typographicLiterature;
        }
        if (this.location.apartment) {
            location += ', подъезд ' + this.location.housing;
        }
        if (this.location.housing) {
            location += ', подъезд ' + this.location.apartment;
        }
        return location;
    }

    getDepartureLocality(): string {
        return this.location.departureAreas.map(area => area.locality).join(', ')
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