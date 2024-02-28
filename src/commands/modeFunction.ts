import { REPLFunction } from './REPLFunction.js'
import { Dispatch, SetStateAction} from 'react';


const modeFunction: REPLFunction = (
    args: string[],
    briefMode: boolean,
    setBriefMode: Dispatch<SetStateAction<boolean>>
) => {
    if (args.length == 0) {
        return 'Please include the mode you wish to switch to';
    } else if (args.length == 1) {
        if (args[0] === "brief") {
            if (briefMode === true) {
                return 'Already in mode brief.'
            }
            setBriefMode(true)
            return 'Now in mode brief.'
        }
        if (args[0] === "verbose") {
            if (briefMode === false) {
                return 'Already in mode verbose.'
            }
            setBriefMode(false)
            return 'Now in mode verbose.'
        }
        return 'Please specify a supported mode.'
    }
    return 'You have inputted too many arguments';
}

export default modeFunction;