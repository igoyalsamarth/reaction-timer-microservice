import { ReactNode } from "react";
export interface TimerProps {
    waitTime?: number;
    children?: ReactNode;
    className?: string;
    needInstruction?: boolean;
    instructionsClassName?: string;
    onReactionTimeChange: React.Dispatch<React.SetStateAction<number>>;
}
export interface AnalyticsProps {
    onReactionTimeChange: React.Dispatch<React.SetStateAction<number>>;
    height?: number;
    width?: number;
    className?: string;
}
export interface SingleAttempt {
    reactionTime: number;
    testTime: number;
}
export interface Database {
    listOfAttempts: Array<SingleAttempt>;
    bestAttempts: Array<SingleAttempt>;
    averageOfAllAttemps: number;
}
