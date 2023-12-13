import React$1, { ReactNode } from 'react';

interface TimerProps {
    waitTime?: number;
    children?: ReactNode;
    className?: string;
    needInstruction?: boolean;
    instructionsClassName?: string;
    onReactionTimeChange: React.Dispatch<React.SetStateAction<number>>;
}
interface AnalyticsProps {
    onReactionTimeChange: React.Dispatch<React.SetStateAction<number>>;
    height?: number;
    width?: number;
    className?: string;
}

declare function ReactionTime(props: TimerProps): JSX.Element;
declare function Analytics(props: AnalyticsProps): React$1.JSX.Element;

export { Analytics, ReactionTime };
