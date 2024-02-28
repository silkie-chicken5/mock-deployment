import {REPLFunction} from './REPLFunction.js'
import loadCSVFunction from './loadCSVFunction';
import viewCSVFunction from './viewCSVFunction';
import searchCSVFunction from './searchCSVFunction';
import modeFunction from './modeFunction';

export class CommandMap {
    private hashMap: { [key: string]: REPLFunction } = {};

    getCommand(command: string): REPLFunction {
        return this.hashMap[command];
    }

    addCommand(command: string, func: REPLFunction) {
        this.hashMap[command] = func;
    }

    removeCommand(command: string) {
        delete this.hashMap[command];
    }

    addDefaultCommands() {
        this.hashMap['load'] = loadCSVFunction;
        this.hashMap['view'] = viewCSVFunction;
        this.hashMap['search'] = searchCSVFunction;
        this.hashMap['mode'] = modeFunction;
    }
}