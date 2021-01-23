import { IComment } from "../interfaces/IComment";

export class Review {
    id?: string;
    performerId: string;
    avatar: string;
    name: string;
    createdAt: Date | any;
    rating: number;
    titleComment: string;
    comment: string;
    likes: number;
    dislikes: number;
    replies: IComment[];
    showReplies? = false;

    constructor(source: Partial<Review>) {
        Object.assign(this, source);
    }
}