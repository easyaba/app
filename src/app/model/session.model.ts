import { Timestamp } from "firebase/firestore"
import { BehaviourEvent } from "./behavior.model"

export interface Session {
    id: String
    start : Timestamp
    end? : Timestamp
    studentId: String
    student?: any
    behaviours: BehaviourEvent[]
}
