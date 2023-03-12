import React, { useEffect, useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { SHOW_MODAL } from "../../redux/slices/modal";

import { FaTimes } from "react-icons/fa";

function Modal({ data }) {
  const { modal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(SHOW_MODAL());
  };

  useEffect(() => {
    const modal = document.querySelector("#modal-subcontainer");
    document.addEventListener("click", (e) => {
      if (e.target === modal) {
        dispatch(SHOW_MODAL());
      }
    });

    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        dispatch(SHOW_MODAL());
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [dispatch]);

  return (
    <div id="modal-container" className="modal-container">
      <div
        id="modal-subcontainer"
        className={`modal-subcontainer ${modal ? "open" : ""}`}
      >
        <div className="modal-innercontainer">
          <div className="modal-innermostcontainer">
            <div className="modal-icon-container">
              <FaTimes className="modal-icon" onClick={handleModalClose} />
            </div>
            {data && (
              <>
                <div className="modal-details-container">
                  <div className="modal-name">{data.name}</div>
                  <div className="modal-address-container">
                    <div className="modal-address-label">Address :</div>
                    <div className="modal-address-subcontainer">
                      <div className="modal-street-container">
                        <div className="modal-street-label">Street :</div>
                        <div className="modal-street">
                          {data.address.street}
                        </div>
                      </div>
                      <div className="modal-city-container">
                        <div className="modal-city-label">City :</div>
                        <div className="modal-city">{data.address.city}</div>
                      </div>
                      <div className="modal-zipcode-container">
                        <div className="modal-zipcode-label">Zipcode :</div>
                        <div className="modal-zipcode">
                          {data.address.zipcode}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-phone-container">
                    <div className="modal-phone-label">Phone :</div>
                    <div className="modal-phone">{data.phone}</div>
                  </div>
                  <div className="modal-website-container">
                    <div className="modal-website-label">Website :</div>
                    <div className="modal-website">{data.website}</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
