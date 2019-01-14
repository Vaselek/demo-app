import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Components/UI/Modal/Modal';
import Alert from './Components/UI/Alert/Alert';

class App extends Component {
  state = {
    isModalOpen: false,
    isAlertOpen: false
  };

  closeModal = () => {
    this.setState({isModalOpen: false});
  };

  openModal = () => {
    this.setState({isModalOpen: true});
  }

  closeAlert = () => {
    this.setState({isAlertOpen: false});
  };

  openAlert = () => {
    this.setState({isAlertOpen: true});
  }

  render() {
    return (
      <div className="App">
        <button className="btn btn-primary" onClick={this.openModal}>Open Modal</button>
        <button className="btn btn-primary" onClick={this.openAlert}>Open Alert</button>
        <Modal
          show={this.state.isModalOpen}
          close={this.closeModal}
          title='The modal title is here'
        >
          <p>This is a modal content</p>
        </Modal>
        <Alert
          show={this.state.isAlertOpen}
          dismiss={this.closeAlert}
          message='The alert title is here'
          type="Primary"
        >
        </Alert>
      </div>
    );
  }
}

export default App;
