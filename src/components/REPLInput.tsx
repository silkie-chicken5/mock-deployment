import '../styles/main.css';
import { Dispatch, SetStateAction, useState} from 'react';
import { ControlledInput } from './ControlledInput';
import { CommandMap } from '../commands/CommandMap';
import { MockedDataMap } from '../commands/MockedDataMap';

interface REPLInputProps{
  // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
  history: (string | string[][])[][],
  setHistory: Dispatch<SetStateAction<(string | string[][])[][]>>
  briefMode: boolean
  setBriefMode: Dispatch<SetStateAction<boolean>>
}
// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
export function REPLInput(props : REPLInputProps) {
    // Remember: let React manage state in your webapp. 
    // Manages the contents of the input box
  const [commandString, setCommandString] = useState<string>('');
  const [loadedFile, setLoadedFile] = useState< (string[][]) >([]);
  const commandMap = new CommandMap();
  commandMap.addDefaultCommands();
  const fileMap = new MockedDataMap();
  fileMap.addDefaultFiles();
  // console.log(fileMap.getFile('simpleData'))
                                                                                                                                
  // TODO WITH TA: build a handleSubmit function called in button onClick
  function handleSubmit(commandString: string) {
    let strArray: string[] = commandString.split(' ');
    if (commandMap.getCommand(strArray[0]) != null) {
      props.setHistory([...props.history, [commandString, commandMap.getCommand(strArray[0])(strArray.slice(1), fileMap, loadedFile, setLoadedFile, props.briefMode, props.setBriefMode)]]);
    } else {
      props.setHistory([...props.history, [commandString, "Command not recognized"]]);
    }
    setCommandString('');
  }
    // TODO: Once it increments, try to make it push commands... Note that you can use the `...` spread syntax to copy what was there before
    // add to it with new commands.
    /**
     * We suggest breaking down this component into smaller components, think about the individual pieces 
     * of the REPL and how they connect to each other...
     */
    return (
        <div className="repl-input">
            <fieldset>
              <legend>Enter a command:</legend>
          <ControlledInput value={commandString} setValue={setCommandString} ariaLabel={"Command input"}/>
            </fieldset>
        
          <button onClick={() => handleSubmit(commandString)}>
            Submit
        </button>
        </div>
    );
  }