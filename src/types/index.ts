import {ReactNode} from "react";

export interface barsItem {
    id:number,
    delay:string
};

export interface dynamicWord {
    id:number,
    icon:ReactNode,
    word: string;
};

export interface skillProgress {
    name: string;
    level: number;
    icon: string;
};

