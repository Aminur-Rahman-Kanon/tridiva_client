import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';

const Modal = ({ modal, children }) => {

  if (!modal) return;

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      {children}
    </div>,
    document.getElementById('modal')
  )
}

export default Modal;
