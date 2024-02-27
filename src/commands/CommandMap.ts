import {REPLFunction} from './REPLFunction.js'

class CommandMap {
    private hashMap: { [key: string]: REPLFunction } = {};

    addCommand(command: string, func: REPLFunction) {
        this.hashMap[command] = func;
    }

    removeCommand(command: string) {
        delete this.hashMap[command];
    }
}