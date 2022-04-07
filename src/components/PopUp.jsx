import {Button,Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function PopUp(props) {
    
    return (
            <Modal
                show={props.show}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}
                className='text-center'
                centered
            >
                <Modal.Header className="justify-content-center">
                    <Modal.Title className="text-success">Congratulations!</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-secondary h4'>
                    Would you like to try again?
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="primary" onClick={props.handleClose}>Try Again</Button>
                </Modal.Footer>
            </Modal>
    );
}