export interface IPerformersCard{
    id: string;
    gallery: string[];
    logo: string;
    stars: string;
    feedback: number;
    description: {
        header: string;
        discount: string;
        serviceClass: [{
            name: string;
            color: string;
        }];
        location: string;
        metro: string;
        activity: string;
        contract: string;
        face: string;
        info: string;
    };
    statistics: {
        amountCompletedOrders: number;
        prices: string;
        rating: {
            likes: number;
            dislikes: number;
        };
        ordersInProgress: number;
        online: string;
    };
    latLng: {
        lat: string;
        lng: string;
    }
}
