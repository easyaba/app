import { Type } from "./type";

export interface BehaviourEvent {
  id?: string;
  behaviourId: string;
  behaviourName: string;
  type: Type;
  start: Date;
  end?: Date;
  duration?: number;
  interval?: boolean[];
  sessionId?: string;
}
