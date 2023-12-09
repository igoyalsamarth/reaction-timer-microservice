import { useState } from "react";
import { TimerProps } from "./ReactionTime.types";
import React from 'react'

export function ReactionTime(props: TimerProps):JSX.Element{
    const [reactionState, setReactionState] = useState<number>(0)
    const [startTime, setStartTime] = useState<number>(0)
    const [timeoutState, setTimeoutState] = useState<NodeJS.Timeout | undefined>(undefined)
    const [instruction, setInstruction] = useState<string>('Click the box when Red Turns Green')

    const waitTimeInner = !props.waitTime ? 5000 : props.waitTime
    const needInstructionInner = props.needInstruction === undefined? true : props.needInstruction

    const handleReactionState = () => {
        if (reactionState === 0) {
            setReactionState(1)
            setInstruction('wait for it')
            setTimeoutState(setTimeout(() => { setReactionState(2); setStartTime(Date.now()) }, Math.floor(Math.random() * (waitTimeInner - 1000 + 1) + 1000)))
        }
        else if (reactionState === 1) {
            clearTimeout(timeoutState)
            props.onReactionTimeChange(0)
            setInstruction('You Pressed Early')
            setReactionState(0)
        }
        else {
            props.onReactionTimeChange ((Date.now() - startTime))
            setInstruction('Nice Job!')
            setReactionState(0)
        }
    }
    return (
        <div className={`${props.className} ${reactionState === 0 || reactionState === 4 ? 'bg-cyan-500' : reactionState === 1 ? 'bg-red-500' : 'bg-green-500'}`} onClick={() => handleReactionState()}>
            {needInstructionInner && <p className={props.instructionsClassName}>{instruction}</p>}
            {props.children}
        </div>
    );
}


