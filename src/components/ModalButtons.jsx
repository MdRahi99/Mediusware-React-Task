import React from 'react';

const ModalButtons = ({ openModal }) => {

  return (
    <div className="d-flex justify-content-center gap-3">
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
    </div>
  );
};

export default ModalButtons;
