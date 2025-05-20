import { useState } from "react";

export default function Form(){
    const [person, setPerson] = useState({
        firstName: 'Teste',
        lastName: 'Testando',
        dados: {
            email: 'testando@gmail.com',
            numero: '91985805873',
            estado: 'Pará'
        }
    });

    function handleChange(e) {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
    }

    return(
        <>
            <label>
                first name:
                <input
                    name="firstName"
                    value={person.firstName}
                    onChange={handleChange}
                />
            </label>
            <label>
                last name:
                <input
                    name="lastName"
                    value={person.lastName}
                    onChange={handleChange}
                />
            </label>
            <label>
                email:
                <input
                    name="email"
                    value={person.dados.email}
                    onChange={handleChange}
                />
            </label>
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
            </p>
        </>
    );
}