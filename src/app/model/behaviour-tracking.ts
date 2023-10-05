import { Type } from "./type";

export interface BehaviourTracking {
  id?: string;
  behaviourId: string;
  type: Type;
  intervalCount?: number;
  intervalDuration?: number;
}
