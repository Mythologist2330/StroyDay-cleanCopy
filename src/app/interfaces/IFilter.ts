export interface IFilter {
    field: string;
    title: string;
    selector: {value: string, text: string}[];
    type: string;
}