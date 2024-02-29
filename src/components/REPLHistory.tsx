import '../styles/main.css';

interface REPLHistoryProps{
    history: (string | string[][])[][]
    briefMode: boolean
    // TODO: Fill with some shared state tracking all the pushed commands
}
function tableGenerator(command: string | string[][], briefMode: boolean){
    if (typeof command === "string"){
        if (briefMode){
            return (
            <p>{command}</p>
        );
        }
        return (
            <p>Output: {command}</p>
        );
    }
    else{
        if (briefMode){
            return (
                <table>
                    <tbody>
                    {
                        command.map((command) =>
                            <tr>{command.map((cell) =>
                                <td>{cell}</td>)}
                                </tr>)
                    }
                    </tbody>
                </table>
            );
        }
        return (
            <div>
                <p>Output:</p>
                <table>
                    <tbody>
                    {
                        command.map((command) =>
                            <tr>{command.map((cell) =>
                                <td>{cell}</td>)}
                                </tr>)
                    }
                    </tbody>
                </table>
            </div>
        ); 
    }
}

export function REPLHistory(props : REPLHistoryProps) {
    if (props.briefMode) {
        return (
            <div className="repl-history">
                {
                    props.history.map((command) =>
                        tableGenerator(command[1], props.briefMode))
                }
            </div>
        );
    }
    return (
            <div className="repl-history">
                {
                    props.history.map((command) => (
                        <div>
                            <p>Command: {command[0]}</p>
                            {tableGenerator(command[1], props.briefMode)}
                        </div>))
                }
            </div>
        );
}