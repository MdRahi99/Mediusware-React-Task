import React from 'react';

const ModalButtons = ({selectedModal, openModal}) => {
    return (
        <div className="d-flex justify-content-center gap-3">
            <button className={`btn btn-lg btn-outline-primary ${selectedModal === 'A' ? 'active' : ''}`} type="button" onClick={() => openModal('A')}>
                {selectedModal === 'A' ? 'All Contacts' : 'Show All Contacts'}
            </button>
            <button className={`btn btn-lg btn-outline-warning ${selectedModal === 'B' ? 'active' : ''}`} type="button" onClick={() => openModal('B')}>
                {selectedModal === 'B' ? 'US Contacts' : 'Show US Contacts'}
            </button>
        </div>
    );
};

export default ModalButtons;