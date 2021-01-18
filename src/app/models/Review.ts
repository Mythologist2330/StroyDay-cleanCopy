import { IComment } from "../interfaces/IComment";

export class Review {
    performerId?: string;
    avatar: string;
    name: string;
    createdAt: Date;
    rating: number;
    titleComment: string;
    comment: string;
    likes: number;
    dislikes: number;
    replies: IComment[];
    showReplies: boolean;

    constructor(source: Partial<Review>) {
        Object.assign(this, source);
    }
}