import { IOrder } from './IOrder';
import { Service } from './IService';

export interface IPerformersCard {
    id: string;
    logo: string;
    description: {
        title: string;
        info: string;
        lead: string;
        phone: string;
        email?: string;
        fullInfo?: string;
        discount: boolean;
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
    orders: IOrder[];
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
}
