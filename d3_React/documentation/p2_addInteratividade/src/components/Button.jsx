export default function Button({onSmach, children}){
    // function handleClick() {
    //     alert('you clicked me');
    // }

    return (
        <button onClick={e => {
            e.stopPropagation();
            onSmach();
        }}/>
        // <button onClick={() => {
        //     alert('you clicked me');
        // }}>
        //      click me
        // </button>
    );
}