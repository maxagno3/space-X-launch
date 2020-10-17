import Dialog from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";
import React from "react";

function Modal({ modalDetails, openModal, close }) {
  
  return (
    <div>
      <Dialog
        isOpen={openModal}
        onDismiss={close}
        style={{ width: "40%" }}
        aria-label="Close Button"
      >
        <button className="close-button" onClick={close}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>x</span>
        </button>
        <div className="flex flex-wrap">
          <img src={modalDetails.links?.mission_patch_small} alt="loading..." />
          <div className="ml-4">
            <h1 className="font-semibold">Mission Name:</h1>
            <p>{modalDetails?.mission_name}</p>

            <h1 className="font-semibold">Launch Year:</h1>
            <p>{modalDetails?.launch_site?.site_name_long}</p>

            <h1 className="font-semibold">Details:</h1>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default Modal;
