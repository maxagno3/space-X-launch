import Dialog from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";
import React from "react";

function Modal({ modalDetails, open, close }) {
  return (
    <div>
      <Dialog isOpen={open} onDismiss={close} style={{ width: "40%" }}>
        <button className="close-button" onClick={close}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>x</span>
        </button>
        <div className="flex flex-wrap">
          <div className="ml-4">
            <h1 className="font-semibold">Mission Name:</h1>
            <p>{modalDetails}</p>

            <h1 className="font-semibold">Launch Year:</h1>
            <p>{modalDetails}</p>

            <h1 className="font-semibold">Details:</h1>
            <p className="break-normal">{modalDetails}</p>

            <h1>This is a modal from {modalDetails}</h1>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default Modal;
