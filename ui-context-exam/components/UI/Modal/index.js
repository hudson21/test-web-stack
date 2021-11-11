import React, { useEffect, useRef } from 'react';
import classes from './styled.module.css';

const Modal = ({ modalStyle, children, show, onClose, backdropStyle }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (show) {
      modalRef.current.classList.add(classes.visible);
    } else {
      modalRef.current.classList.remove(classes.visible);
    }
  }, [show]);

  return (
    <div onClick={onClose}>
      <div
        ref={modalRef}
        style={backdropStyle}
        className={classes['modal-wrapper']}
      >
        <div style={modalStyle} className={classes.modal}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
