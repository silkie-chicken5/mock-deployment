import '../styles/main.css';

interface REPLHistoryProps{
    history: string[]
    briefMode: boolean
    // TODO: Fill with some shared state tracking all the pushed commands
}
export function REPLHistory(props : REPLHistoryProps) {
    if (props.briefMode) {
        return (
            <div className="repl-history">
                {
                    props.history.map((command) =>
                        <p>{command}</p>)
                }
            </div>
        );
    }
    return (
            <div className="repl-history">
                {
                    props.history.map((command) => (
                        <div>
                            <p>Command: {command}</p>
                            <p>Output: {command}</p>
                        </div>))
                }
            </div>
        );
}