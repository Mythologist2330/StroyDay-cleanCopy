export interface IStation {
    title: string;
    lat: number;
    lng: number
}

export interface IMetroStation {
    id: string;
    city: string;
    stations: IStation[]
}