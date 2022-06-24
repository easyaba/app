import { BehaviourTracking } from "./behaviour-tracking";

export interface Student {
    id?: string;
    name: string;
    age?: number;
    surname?: string;
    behaviour?: BehaviourTracking[];
}
