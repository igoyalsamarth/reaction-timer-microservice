import { ReactNode } from "react";
export interface TimerProps {
    waitTime?: number;
    children?: ReactNode;
    className?: string;
    needInstruction?: boolean;
    instructionsClassName? :string
    onReactionTimeChange:React.Dispatch<React.SetStateAction<number>>
}