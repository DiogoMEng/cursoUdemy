export default function alertButton({message, children}) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}