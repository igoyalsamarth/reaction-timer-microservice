import { useState, useEffect } from "react";
import { TimerProps, Database, AnalyticsProps } from "./ReactionTime.types";
import dayjs from "dayjs";
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from "recharts";

export function ReactionTime(props: TimerProps): JSX.Element {
    const [databaseState, setDatabaseState] = useState<Database>(() => {
        const value = localStorage.getItem('rt_database'); return value !== null ? JSON.parse(value) :
            {
                listOfAttempts: [],
                bestAttempts: [],
                averageOfAllAttemps: 0
            }
    })
    const [reactionState, setReactionState] = useState<number>(0)
    const [startTime, setStartTime] = useState<number>(0)
    const [instruction, setInstruction] = useState<string>('Click the box when Red Turns Green')
    const [localReactionTime, setLocalReactionTime] = useState<number>(0)
    const [timeoutState, setTimeoutState] = useState<NodeJS.Timeout | undefined>(undefined)

    const waitTimeInner = !props.waitTime ? 5000 : props.waitTime
    const needInstructionInner = props.needInstruction === undefined? true : props.needInstruction

    const handleReactionState = () => {
        if (reactionState === 0) {
            setReactionState(1);
            setInstruction('wait for it')
            setTimeoutState(setTimeout(() => { setReactionState(2); setStartTime(Date.now()); setInstruction('press now!') }, Math.floor(Math.random() * (waitTimeInner - 1000 + 1) + 1000)))
        } else if (reactionState === 1) {
            clearTimeout(timeoutState)
            props.onReactionTimeChange(0)
            setInstruction('You Pressed Early')
            setReactionState(0)
        } else {
            setLocalReactionTime(Date.now() - startTime)
            props.onReactionTimeChange((Date.now() - startTime))
            setInstruction('Nice Job!')
            if (localReactionTime > 0) {

                if (localReactionTime < Math.min(...databaseState.bestAttempts.map(Item => Item.reactionTime))) {
                    setDatabaseState(
                        {
                            listOfAttempts: [...databaseState.listOfAttempts, { reactionTime: localReactionTime, testTime: Date.now() }],
                            averageOfAllAttemps: databaseState.listOfAttempts.map(Item => Item.reactionTime).reduce(function (avg, value, _, { length }) {
                                return avg + value / length;
                            }, 0),
                            bestAttempts: [...databaseState.bestAttempts, { reactionTime: localReactionTime, testTime: Date.now() }]
                        })
                } else if (databaseState.bestAttempts[databaseState.bestAttempts.length - 1].reactionTime !== undefined) {
                    setDatabaseState(
                        {
                            listOfAttempts: [...databaseState.listOfAttempts, { reactionTime: localReactionTime, testTime: Date.now() }],
                            averageOfAllAttemps: databaseState.listOfAttempts.map(Item => Item.reactionTime).reduce(function (avg, value, _, { length }) {
                                return avg + value / length;
                            }, 0),
                            bestAttempts: [...databaseState.bestAttempts, { reactionTime: databaseState.bestAttempts[databaseState.bestAttempts.length - 1].reactionTime, testTime: Date.now() }]
                        })
                }
            }
            setReactionState(0)
        }
    }

    useEffect(() => {
        localStorage.setItem('rt_database', JSON.stringify(databaseState))
    }, [databaseState]);

    return (
        <div className={`${props.className} ${reactionState === 0 || reactionState === 4 ? 'bg-cyan-500' : reactionState === 1 ? 'bg-red-500' : 'bg-green-500'}`} onClick={() => handleReactionState()}>
            {needInstructionInner && <p className={props.instructionsClassName}>{instruction}</p>}
            {props.children}
        </div>
    );
}

export function Analytics(props: AnalyticsProps) {

    const [reactionData, setReactionData] = useState<Database>(() => {
        const value = localStorage.getItem('rt_database'); return value !== null ? JSON.parse(value) :
            {
                latestAttempt: {},
                listOfAttempts: [],
                bestAttempts: [],
                averageOfAllAttemps: 0
            }
    })
    useEffect(() => {
        setReactionData(() => {
            const value = localStorage.getItem('rt_database'); return value !== null ? JSON.parse(value) :
                {
                    latestAttempt: {},
                    listOfAttempts: [],
                    bestAttempts: [],
                    averageOfAllAttemps: 0
                }
        })
    }, [props.onReactionTimeChange]);

    return (
        <div className={props.className}>
            <ResponsiveContainer width={!props.width ? '100%' : props.width} height={!props.height ? '100%' : props.height}>
                <LineChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }} data={reactionData.listOfAttempts.map(Item => { return ({ reactioNTime: Item.reactionTime, date: Item.testTime}) })}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis fontSize={10} dataKey="date" tickFormatter={timeStr => dayjs(timeStr).format('YYYY-MM-DD hh:mm:ss')} type="number" domain={['auto','auto']} />
                    <YAxis fontSize={10} dataKey='reactionTime' />
                    <Tooltip labelClassName="text-sm font-bold" labelFormatter={(value) => dayjs(value).format('YYYY-MM-DD hh:mm:ss')} />
                    <Legend />
                    <Line type="stepAfter" dataKey="bestAttempt" stroke="#8884d8" data={reactionData.bestAttempts.map(Item => { return ({ bestAttempt: Item.reactionTime, date: Item.testTime}) })} />
                    <Line type="monotone" dataKey="reactionTime" stroke="#000" data={reactionData.listOfAttempts.map(Item => { return ({ reactionTime: Item.reactionTime, date: Item.testTime}) })} />
                    <ReferenceLine y={reactionData.averageOfAllAttemps} stroke="red" strokeDasharray="3 3" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}





