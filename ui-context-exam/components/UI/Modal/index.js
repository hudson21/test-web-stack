import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import classes from './styled.module.css';

const Modal = ({
  modalStyle,
  children,
  show,
  onClose,
  backdropStyle,
  ...rest
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (show) {
      modalRef.current.classList.add(classes.visible);
    } else {
      modalRef.current.classList.remove(classes.visible);
    }
  }, [show]);

  return (
    <div>
      <div
        ref={modalRef}
        style={backdropStyle}
        className={classes['modal-wrapper']}
      >
        <div {...rest} style={modalStyle} className={classes.modal}>
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalStyle: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  show: PropTypes.bool,
  onClose: PropTypes.func,
  backdropStyle: PropTypes.object,
};

export default Modal;
