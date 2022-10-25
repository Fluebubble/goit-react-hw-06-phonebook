import { Contact } from "components/Contact/Contact";

export const ContactList = ({contacts}) => {
    console.log(contacts, "In ContactList")
    return (
        <>
        <h2>Contacts</h2>
        <ul>
            <li>Sergey Vigozanov</li>
            <Contact contacts={contacts}/>
        </ul>
        </>
    )
};
