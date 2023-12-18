import React from 'react';

const ContactDetails = ({selectedContact, closeModalC}) => {
    return (
        <div>
            <p>Contact ID: {selectedContact.id}</p>
            <p>Name: {selectedContact.name}</p>
            <p>Country: {selectedContact.country}</p>
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={closeModalC}>
                Back
            </button>
        </div>
    );
};

export default ContactDetails;