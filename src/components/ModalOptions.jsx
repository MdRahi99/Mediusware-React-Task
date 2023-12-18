import React from 'react';

const ModalOptions = ({ selectedModal, openModal, closeModalA, closeModalB }) => {
    return (
        <div className="d-flex gap-4">
            <button
                className={`btn btn-md text-white`}
                type="button"
                onClick={() => openModal('A')}
                style={{ backgroundColor: '#46139f' }}
            >
                All Contacts
            </button>
            <button
                className={`btn btn-md text-white`}
                type="button"
                onClick={() => openModal('B')}
                style={{ backgroundColor: '#ff7f50' }}
            >
                US Contacts
            </button>
            <button
                className={`btn btn-md`}
                type="button"
                onClick={() => openModal('C')}
                style={{ backgroundColor: '#fff', borderColor: '#46139f' }}
            >
                Close
            </button>
        </div>
    );
};

export default ModalOptions;