export interface IFilter {
    field: string;
    title: string;
    checked?: string[]
    selector: {
        value: string,
        text: string,
    }[];
    type: string;
}