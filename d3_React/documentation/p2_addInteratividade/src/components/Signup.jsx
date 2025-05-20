export default function Signup() {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            alert('Submit string');
        }}>
            <input />
            <button>Send</button>
        </form>
    );
}