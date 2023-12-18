import React, { useState } from 'react';

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);

  const openModalA = () => {
    setShowModalA(true);
    setShowModalB(false);
  };

  const openModalB = () => {
    setShowModalA(false);
    setShowModalB(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
        
        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-lg btn-outline-primary" type="button" onClick={openModalA}>All Contacts</button>
          <button className="btn btn-lg btn-outline-warning" type="button" onClick={openModalB}>US Contacts</button>
        </div>

        {showModalA && (
          <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal A</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModalA(false)}></button>
                </div>
                <div className="modal-body">
                  <p>This is Modal A content.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {showModalB && (
          <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal B</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModalB(false)}></button>
                </div>
                <div className="modal-body">
                  <p>This is Modal B content.</p>
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
