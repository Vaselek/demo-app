import React, {Fragment} from 'react';
import Backdrop from "../Backdrop/Backdrop";

import './Modal.css';


const Modal = props => (
  <Fragment>
    <Backdrop show={props.show} clicked={props.closed} />
    <div className="Modal"
         style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                 opacity: props.show ? '1' : '0'
         }}>
      <h3>{props.title}</h3>
      {props.children}
      <button onClick={props.close} className='btn btn-default'>Close</button>
    </div>
  </Fragment>
);


export default Modal;