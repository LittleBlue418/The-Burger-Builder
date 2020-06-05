import React from 'react';
import classes from './Modal.module.css'
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => (
  <Auxiliary>
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(-20%)' : 'translateY(-200%)',
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
    </div>
    <Backdrop
      show={props.show}
      clicked={props.modalClosed}
    />
  </Auxiliary>
);

export default Modal;