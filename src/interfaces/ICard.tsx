export enum EStatus {
    DEFAULT = 0,
    PICTURE = 1,
    MESSAGE = 2,
}
export interface ICard {
    id: number;
    EStatus: number;
    urlAvatar: string;
    name: string;
    text1: string;
    text2: string;
    IsRead: boolean;
    picture: string;
    date: string;
    message: string
}