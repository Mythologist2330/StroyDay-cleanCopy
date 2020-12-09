export interface IPerformersCard{
    id: string;
    gallery: string[];
    logo: string;
    description: {
        header: string;
        rating: string;
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
}
