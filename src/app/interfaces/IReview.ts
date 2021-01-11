import { IComment } from "./IComment";

export interface IReview {
    authorId: string;
    createdAt: Date;
    stars: number;
    title: string;
    text: string;
    like: number;
    dislike: number;
    comments: IComment[]
}