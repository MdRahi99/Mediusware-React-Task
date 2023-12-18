import React from 'react';

const Contacts = ({filteredContacts, openModalC}) => {
    return (
        <div>
            <ol>
                {filteredContacts.map(contact => (
                    <li key={contact.id} onClick={() => openModalC(contact)} style={{ cursor: 'pointer' }}>
                        {contact.name}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Contacts;