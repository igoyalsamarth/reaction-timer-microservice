import { ReactNode } from 'react';

interface TimerProps {
    waitTime?: number;
    children?: ReactNode;
    className?: string;
    needInstruction?: boolean;
    instructionsClassName?: string;
    onReactionTimeChange: React.Dispatch<React.SetStateAction<number>>;
}

declare function ReactionTime(props: TimerProps): JSX.Element;

export { ReactionTime };
