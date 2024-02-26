import '../styles/main.css';

interface REPLHistoryProps{
    stringArray: string[]
    // TODO: Fill with some shared state tracking all the pushed commands
}
export function REPLHistory(props : REPLHistoryProps) {
    return (
        <div className="repl-history">
            {props.stringArray.map((command) =>
                <p>{command}</p>)}
            {/* This is where command history will go */}
            {/* TODO: To go through all the pushed commands... try the .map() function! */}
        </div>
    );
}