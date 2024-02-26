import '../styles/main.css';

interface REPLHistoryProps{
    stringArray: string[]
    isBrief: boolean
    // TODO: Fill with some shared state tracking all the pushed commands
}
export function REPLHistory(props : REPLHistoryProps) {
    if (props.isBrief) {
        return (
            <div className="repl-history">
                {
                    props.stringArray.map((command) =>
                        <p>{command}</p>)
                }
            </div>
        );
    }
    return (
            <div className="repl-history">
                {
                    props.stringArray.map((command) => (
                        <div>
                            <p>Command: {command}</p>
                            <p>Output: {command}</p>
                        </div>))
                }
            </div>
        );
}