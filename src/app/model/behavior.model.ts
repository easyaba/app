export interface Behavior {
  id?: string;
  name: string;
  description?: string;
  type?: string;
  abbreviation?: string;
}

enum BehaviourType {
  COUNTER,
  TIMER,
  FULL_INTERVAL,
  PART_INTERVAL
}

export interface BehaviourEvent {
  id?: string;
  behaviourId: string;
  behaviourName: string;
  type: 'COUNTER' | 'TIMER' | 'FULL_INTERVAL' | 'PART_INTERVAL';
  start: Date;
  end?: Date;
  duration?: number;
  interval?: boolean[];
}

export interface AggregatedBehaviour {
  behaviourId: string;
  behaviourName: string;
  type: 'COUNTER' | 'TIMER' | 'FULL_INTERVAL' | 'PART_INTERVAL';
  duration?: number;
  countOfOKInterval?: number;
  countOfNOKInterval?: number;
  percentageOk?: number;
  count?: number
}
