import React from 'react';

const Checkbox = ({selectedModal, onlyEven, handleCheckboxChange}) => {
    return (
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
    );
};

export default Checkbox;