export interface ServicePoint {
    title: string;
    segments: string[];
    price: number;
}

export interface Service {
    title: string;
    subServices: ServicePoint[];
}