import '../styles/main.css';

interface REPLHistoryProps{
    history: (string | string[][])[][]
    briefMode: boolean
    // TODO: Fill with some shared state tracking all the pushed commands
}
export function REPLHistory(props : REPLHistoryProps) {
    if (props.briefMode) {
        return (
            <div className="repl-history">
                {
                    props.history.map((command) =>
                        <p>{command[1]}</p>)
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
                            <p>Output: {command[1]}</p>
                        </div>))
                }
            </div>
        );
}