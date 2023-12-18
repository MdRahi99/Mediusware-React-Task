import React, { useState, useEffect } from 'react';

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [onlyEven, setOnlyEven] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [selectedModal, setSelectedModal] = useState('');

  useEffect(() => {
    fetch('/contactsData.json')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  const openModal = (modal) => {
    setSelectedModal(modal);
    if (modal === 'A') {
      setShowModalA(true);
      setShowModalB(false);
    } else if (modal === 'B') {
      setShowModalA(false);
      setShowModalB(true);
    }
  };

  const closeModalA = () => {
    setShowModalA(false);
  };

  const closeModalB = () => {
    setShowModalB(false);
  };

  const handleCheckboxChange = () => {
    setOnlyEven(!onlyEven);
  };

  const filteredContacts = contacts.filter(contact => {
    const isEven = onlyEven ? contact.id % 2 === 0 : true;
    if (selectedModal === 'A') {
      return isEven && contact.country !== 'USA';
    } else if (selectedModal === 'B') {
      return isEven && contact.country === 'USA';
    }
    return isEven;
  });

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button className={`btn btn-lg btn-outline-primary ${selectedModal === 'A' ? 'active' : ''}`} type="button" onClick={() => openModal('A')}>
            {selectedModal === 'A' ? 'All Contacts' : 'Show All Contacts'}
          </button>
          <button className={`btn btn-lg btn-outline-warning ${selectedModal === 'B' ? 'active' : ''}`} type="button" onClick={() => openModal('B')}>
            {selectedModal === 'B' ? 'US Contacts' : 'Show US Contacts'}
          </button>
        </div>

        {(showModalA || showModalB) && (
          <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{`Modal ${selectedModal}`}</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={selectedModal === 'A' ? closeModalA : closeModalB}></button>
                </div>
                <div className="modal-body d-flex flex-column gap-4">
                  <ol>
                    {filteredContacts.map(contact => (
                      <li key={contact.id}>{contact.name}</li>
                    ))}
                  </ol>
                  <div className="d-flex gap-4 mt-4">
                    <button type="button" className={`btn btn-sm btn-outline-primary ${selectedModal === 'A' ? 'active' : ''}`} onClick={() => openModal('A')}>
                      {selectedModal === 'A' ? 'All Contacts' : 'Show All Contacts'}
                    </button>
                    <button type="button" className={`btn btn-sm btn-outline-warning ${selectedModal === 'B' ? 'active' : ''}`} onClick={() => openModal('B')}>
                      {selectedModal === 'B' ? 'US Contacts' : 'Show US Contacts'}
                    </button>
                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={selectedModal === 'A' ? closeModalA : closeModalB}>
                      Close
                    </button>
                  </div>
                </div>
                <div className="form-check modal-footer d-flex align-items-center justify-content-start w-75 mx-auto mt-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`onlyEvenCheckbox${selectedModal}`}
                    checked={onlyEven}
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label" htmlFor={`onlyEvenCheckbox${selectedModal}`}>
                    Only even
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Problem2;
