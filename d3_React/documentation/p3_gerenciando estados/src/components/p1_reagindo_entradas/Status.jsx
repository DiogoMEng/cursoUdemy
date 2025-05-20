import Form2 from './Form2'

let statuses = [
    'empty',
    'typing',
    'submitting',
    'success',
    'error',
];


export default function Status(){
    return(
        <>
            {statuses.map(st => (
                <section key={st}>
                    <h4> Form ({st}):</h4>
                    <Form2 status={st}/>
                </section>
            ))}
        </>
    );
}