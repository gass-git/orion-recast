import React from 'react'
import {Modal} from 'react-bootstrap';

export default function InfoModal({showModal, dispatch}) {
    return(    
        <Modal
            show={showModal} 
            onHide={() => dispatch({type: 'toggle modal'})}
        >
            <Modal.Header className='dark-bg-header' closeButton>
                <Modal.Title>INFO - QUERIES</Modal.Title>
            </Modal.Header>
            <Modal.Body className='dark-bg-body'>
                <p>- Firstly convert from intergalactic to roman numeral. Format: "<b>galactic-numeral</b> is <b>roman-numeral</b>" E.g. <i>glob is I</i></p>
                <p>- To specify a metal value use the following format: "<b>intergalactic-number</b> <b>metal-name</b> is <b>arabic-number</b> credits" (metals allowed: gold, silver, bronze and iron) E.g. <i>glob prok gold is 57800 credits</i></p>
                <p>- To convert an intergalactic number to arabic number, use the following format: "how much is <b>intergalactic-numeral</b> ?" E.g. <i>how much is pish tegj glob glob ?</i></p>
                <p>- Before calculating credits specify the metal value</p>
                <p>- To calculate the credits use the following format: "how many credits is <b>intergalactic-number</b> <b>metal-name</b> ?" E.g. <i>how many credits is glob prok silver ?</i></p>
            </Modal.Body>
        </Modal>
    )
}

