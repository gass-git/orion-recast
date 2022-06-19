import React from 'react'
import {Modal} from 'react-bootstrap';

export default function InfoModal({showModal, dispatch}) {
    return(    
    <Modal show={showModal} onHide={() => dispatch({type: 'toggle modal'})}>
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Woohoo, you're reading this text in a modal!
        </Modal.Body>
        <Modal.Footer>
            
        </Modal.Footer>
    </Modal>
    )
}

