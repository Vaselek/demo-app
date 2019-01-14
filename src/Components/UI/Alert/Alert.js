import React, {Fragment} from 'react';
import Backdrop from "../Backdrop/Backdrop";

import './Alert.css';


const Alert = props => (
  <Fragment>
    <Backdrop show={props.show} clicked={props.closed} />
    <div className="Alert"
         style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
           opacity: props.show ? '1' : '0'
         }}>
      <h3 className={props.type}>{props.message}</h3>
      {props.children}
      {props.dismiss ? <button onClick={props.dismiss} className='btn btn-default'>Close</button> : null}
    </div>
  </Fragment>
);


export default Alert;