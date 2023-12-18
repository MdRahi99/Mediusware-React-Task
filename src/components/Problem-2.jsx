import React, { useState, useEffect } from 'react';
import ModalButtons from './ModalButtons';
import Checkbox from './Checkbox';
import ModalOptions from './ModalOptions';
import SearchContact from './SearchContact';
import ContactDetails from './ContactDetails';
import Contacts from './Contacts';

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const [showModalC, setShowModalC] = useState(false);
  const [onlyEven, setOnlyEven] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [selectedModal, setSelectedModal] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    fetch('/contactsData.json')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  useEffect(() => {
    setFilteredContacts(
      contacts.filter(contact => {
        const isEven = onlyEven ? contact.id % 2 === 0 : true;
        if (selectedModal === 'A') {
          return isEven && contact.country !== 'USA';
        } else if (selectedModal === 'B') {
          return isEven && contact.country === 'USA';
        }
        return isEven;
      })
    );
  }, [contacts, onlyEven, selectedModal, searchInput]);

  const openModal = modal => {
    setSelectedModal(modal);
    setShowModalA(modal === 'A');
    setShowModalB(modal === 'B');
    setShowModalC(false);
  };

  const closeModalA = () => {
    setShowModalA(false);
  };

  const closeModalB = () => {
    setShowModalB(false);
  };

  const openModalC = contact => {
    setSelectedContact(contact);
    setShowModalC(true);
  };

  const closeModalC = () => {
    setShowModalC(false);
  };

  const handleCheckboxChange = () => {
    setOnlyEven(!onlyEven);
  };

  const handleSearchInputChange = event => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);

    setTimeout(() => {
      setFilteredContacts(
        contacts.filter(contact => {
          const isEven = onlyEven ? contact.id % 2 === 0 : true;
          if (selectedModal === 'A') {
            return isEven && contact.country !== 'USA' && contact.name.toLowerCase().includes(inputValue.toLowerCase());
          } else if (selectedModal === 'B') {
            return isEven && contact.country === 'USA' && contact.name.toLowerCase().includes(inputValue.toLowerCase());
          }
          return isEven && contact.name.toLowerCase().includes(inputValue.toLowerCase());
        })
      );
    }, 300);
  };

  const handleSearchInputKeyDown = event => {
    if (event.key === 'Enter') {
      setFilteredContacts(
        contacts.filter(contact => {
          const isEven = onlyEven ? contact.id % 2 === 0 : true;
          if (selectedModal === 'A') {
            return isEven && contact.country !== 'USA' && contact.name.toLowerCase().includes(searchInput.toLowerCase());
          } else if (selectedModal === 'B') {
            return isEven && contact.country === 'USA' && contact.name.toLowerCase().includes(searchInput.toLowerCase());
          }
          return isEven && contact.name.toLowerCase().includes(searchInput.toLowerCase());
        })
      );
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

        <ModalButtons
        openModal={openModal} />

        {(showModalA || showModalB || showModalC) && (
          <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                  <h5 className="modal-title">{`Modal ${selectedModal}`}</h5>
                </div>
                {/* Modal Body */}
                <div className="modal-body d-flex flex-column gap-4">
                  {showModalC ? (
                    <ContactDetails
                    selectedContact={selectedContact}
                    closeModalC={closeModalC} />
                  ) : (
                    <>
                    <SearchContact
                    searchInput={searchInput} handleSearchInputChange={handleSearchInputChange} handleSearchInputKeyDown={handleSearchInputKeyDown} />
                    <Contacts 
                    filteredContacts={filteredContacts} 
                    openModalC={openModalC} />
                    </>
                  )}

                  <ModalOptions
                  selectedModal={selectedModal} 
                  openModal={openModal} 
                  closeModalA={closeModalA} 
                  closeModalB={closeModalB} />
                </div>
                {/* Modal Footer */}
                <Checkbox 
                selectedModal={selectedModal}
                onlyEven={onlyEven}
                handleCheckboxChange={handleCheckboxChange} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Problem2;
