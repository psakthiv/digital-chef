import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Menu = (props) => {
    return (
        <div>
            <Modal {...props} size="lg" >
        <Modal.Header closeButton>
          <Modal.Title>View Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        This is Menu Modal
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
        
    );
}

export default Menu;