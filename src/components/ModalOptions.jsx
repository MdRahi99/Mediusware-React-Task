import React from 'react';

const ModalOptions = ({selectedModal, openModal, closeModalA, closeModalB}) => {
    return (
        <div className="d-flex gap-4">
            <button
                type="button"
                className={`btn btn-sm btn-outline-primary ${selectedModal === 'A' ? 'active' : ''}`}
                onClick={() => openModal('A')}
            >
                {selectedModal === 'A' ? 'All Contacts' : 'Show All Contacts'}
            </button>
            <button
                type="button"
                className={`btn btn-sm btn-outline-warning ${selectedModal === 'B' ? 'active' : ''}`}
                onClick={() => openModal('B')}
            >
                {selectedModal === 'B' ? 'US Contacts' : 'Show US Contacts'}
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={selectedModal === 'A' ? closeModalA : closeModalB}>
                Close
            </button>
        </div>
    );
};

export default ModalOptions;