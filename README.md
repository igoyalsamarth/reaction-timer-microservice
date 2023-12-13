# reaction-timer-microservice

#### This is a reaction timer package, ready to install and use directly in your project, made in a headless UI way (I love them), you can customize it using TailwindCSS and satisfy the design enthusiast.

## Sample Code

```
import { ReactionTime, Analytics } from "./ReactionTimer";
import { useState } from "react";

function App() {
  const [reactionTimeState, setReactionTimeState] = useState<number>(0);

  return (
  <>
    <ReactionTime className='flex flex-col items-center w-full h-96' onReactionTimeChange={setReactionTimeState} instructionsClassName="text-2xl">
      <p className="text-2xl font-black">{reactionTimeState}</p>
    </ReactionTime>
    <Analytics onReactionTimeChange={setReactionTimeState} height={300} className="w-[100vw]" />
  </>
  )
}

export default App
```

## Reaction Time Test Tile:

`ReactionTime` is the component that can be imported and used for the functionality.

The `reactionTimeOutput` is a *required number-type* state that needs to be declared manually which also serves as the output of the individual tests. At the same time, the `setReactionTimeOutput` is the state function and must be defined inside the component.

### List of Parameters:

1. `waitTime` *(number)* *optional*: The time you would like the timer to stay *red* or wait for the *click*.
2. `className` *(string)* *optional*: The styling of the reaction time area, is strictly based on *tailwind* and can be treated as a `div`.
3. `needInstruction` *(boolean)* *optional* defaults to `true`: Control whether you need the instructions or not.
4. `instructionClassName` *(string)* *optional*: The styling of the instructions, is strictly based on *tailwind*.
5. `onReactionTimeChange` *(state-function)* *optional*: The state function of the declared state to feed in the changed values to the state.

## Analytics Data Tile:

The `Analytics` is the component that can be imported and used for the *Analysis* of the Tests Taken.

The `Analytics Graph` tracks the values of `Average Reaction Time`, `Best Reaction Time Scores`, and `All Reaction Time Scores`

`Note:` `localStorage` is used to store the Reaction Time Test data and hence should be used carefully and only on the client side.

### List of Parameters:

1. `className` *(string)* *optional*: The styling of the reaction time area, is strictly based on *tailwind* and can be treated as a `div`.
2. `height` *(number)* *optional* defaults to `full height` of the `parent div`: The height of the graph object present inside the parent *div*.
3. `width` *(number)* *optional* defaults to `full width` of the `parent div`: The width of the graph object present inside the parent *div*.
4. `onReactionTimeChange` *(state-function)* *optional*: The state function of the declared state to feed in the changed values to the state.
