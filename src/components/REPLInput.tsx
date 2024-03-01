import '../styles/main.css';
import { Dispatch, SetStateAction, useState} from 'react';
import { ControlledInput } from './ControlledInput';
import { CommandMap } from '../commands/CommandMap';
import { MockedDataMap } from '../commands/MockedDataMap';
//This is the REPLInputProps interface. We pass this type into the argument type of the function REPLInput.
//This ensures that these arguments are passed into the function.
interface REPLInputProps{
  history: (string | string[][])[][],
  setHistory: Dispatch<SetStateAction<(string | string[][])[][]>>
  briefMode: boolean
  setBriefMode: Dispatch<SetStateAction<boolean>>
}
/**
 * This is the REPLInput function. It creates two use state hooks to be used to for the command string and for
 * the file loaded in. This is also where the file map and command map is instantiated. Within this function, 
 * we call ControlledInput and create a button. Once the button is clicked, it takes the command typed into
 * the ControlledInput, gets the respective function for the command from the command map, then calls the function.
 * This is done through currying. The command map also only allows REPLFunction functions to be the function part
 * of the command map. So, this ensures that when we call the function, we know it will be of type REPLFunction
 * so the same arguments can be passed in even if we don't know the function being called. This allows this to be 
 * extensible for other developers. Once the function is run, we use the history state hook to update the history.
 * @param props - type REPLInput which the interface can be seen above
 * @returns - html code to be displayed on the website
 */
export function REPLInput(props : REPLInputProps) {
  // Manages the contents of the input box
  const [commandString, setCommandString] = useState<string>('');
  // Manages the currently loaded in file
  const [loadedFile, setLoadedFile] = useState< (string[][]) >([]);
  //creates a new instance of a command map and loads in the default commands into that map
  const commandMap = new CommandMap();
  commandMap.addDefaultCommands();
  //creates a new instance of a file map and loads in the default files into that map
  const fileMap = new MockedDataMap();
  fileMap.addDefaultFiles();
  
  //This function executes code every time the button is clicked. It tries to run the command typed in and
  //updates the history accordinlgy depending on the outcome of the command ran.
  function handleSubmit(commandString: string) {
    //split up the arguments typed in
    let strArray: string[] = commandString.split(' ');
    //if the command exists in the command map then run the command and pass in repsective arguments
    if (commandMap.getCommand(strArray[0]) != null) {
      props.setHistory([...props.history, [commandString, commandMap.getCommand(strArray[0])(strArray.slice(1), fileMap, loadedFile, setLoadedFile, props.briefMode, props.setBriefMode)]]);
    } 
    //if the command doesn't exist in the command map, then provide informative error message and update history
    else {
      props.setHistory([...props.history, [commandString, "Command not recognized"]]);
    }
    //reset the command string so the next command can be typed in
    setCommandString('');
  }
    //This is the HTML code for instantiating a text box and a button for it.
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