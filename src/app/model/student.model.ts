export interface Student {
    id?: string;
    name: string;
    age?: number;
    surname?: string;
}

export interface Behavior {
  id?: string;
  name: string;
  description?: string;
  type?: BehaviorType;
  abbreviation?: string;
}

export interface BehaviorTracking extends Behavior {
  type: BehaviorType;
  intervalCount?: number;
  intervalDuration?: number;
  // TODO: color, order
}

export interface StudentSession {
  studentId: string;
  studentName: string;
  start: Date;
  end?: Date;
  terapeutName?: string;
  behavioursAgg?: AggregatedBehaviour[];
}

export interface AggregatedBehaviour {
  behaviourId: string;
  behaviourName: string;
  type: BehaviorType;
  duration?: number;
  percentageOk?: number;
  count?: number
}

export interface BehaviourEvent {
  type: BehaviorType;
  start: Date;
}

export interface TimerEvent extends BehaviourEvent {
  end: Date;
  duration: number;
}

export interface CounterEvent extends BehaviourEvent {

}

export interface IntervalEvent extends BehaviourEvent {
  end: Date;
  interval: boolean[];
}

export enum BehaviorType {
  COUNTER,
  TIMER,
  FULLINTERVAL,
  PARTIALINTERVAL,
}
