# reaction-timer-package

### This is a reaction timer package, ready to install and use directly in your project, made in a headless UI way (i love them), you can customize it using TailwindCSS and satisfy the design enthusiast.

## How to use?

```
import { ReactionTime } from '@goyalsamarth/reaction-time-microservice'

function App() {
  const [reactionTimeOutput, setReactionTimeOutput] = useState<number>(0);

  return (
    <ReactionTime onReactionTimeChange={setReactionTimeOutput}>
      <p>{reactionTimeOutput}</p>
    </ReactionTime>
  )
}
```

The ```reactionTime``` is a *required number-type* state that needs to be declared manually, while the ```setReactionTime``` is the state function and must be defined inside the component.

```ReactionTime``` is the component that can be imported and used for the functionality, while the declared ```reactionTime``` state serves as the output of the Reaction Time Test.

## List of parameters:

1. ```waitTime``` *(number)*: The amount of time you would like the timer to stay *red* or wait for the *click*.
2. ```className``` *(string)*: The styling of the reaction time area, is strictly based on *tailwind* and can be treated as a ```div```.
3. ```needInstruction``` *(boolean)* defaults to ```true```: Control weather you need the instructions or not.
4. ```instructionClassName``` *(string)*: The styling of the instructions, is strictly based on *tailwind* and can be treated as a ```div```.
