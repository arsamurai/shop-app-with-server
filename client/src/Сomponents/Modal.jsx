import React from "react";
import cn from "classnames";

export default function Modal({
  activeModal,
  setActiveModal,
  modalForImg,
  children,
}) {
  const closeActiveModal = () => {
    setActiveModal(false);
  };

  return (
    <div
      className={activeModal ? "modal active" : "modal"}
      onClick={closeActiveModal}
    >
      <div
        className={cn(
          "modal__content",
          {
            "active": activeModal,
          },
          {
            "modalForImg": modalForImg,
          }
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__close" onClick={closeActiveModal}>
          <span>×</span>
        </div>
        {children}
      </div>
    </div>
  );
}
