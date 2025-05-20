import { useState } from "react";
import Chat from './chat.jsx'
import ContactList from './ContactList.jsx'


export default function Messager(){
    const [to, set] = useState(contacts[0]);

    return(
        <div>
            <ContactList
                contacts={contacts}
                selectedContact={to}
                onSelect={
                    contact => set(contact)
                }
            />
            <Chat key={to.email} contact={to}/>

        </div>
    )
}


const contacts = [
    { name: 'Taylor', email: 'taylor@email.com' },
    { name: 'Alice', email: 'Alice@email.com' },
    { name: 'Bob', email: 'Bob@email.com' },
];