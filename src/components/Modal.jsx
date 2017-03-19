import React, { Component } from 'react';
import { Row, Modal, Button, Col, FormControl, FormGroup } from 'react-bootstrap';

export class ModalOpen extends Component {
    constructor(props) {
        super(props);
        if(props.eventListener != null) {
            this.state = { showModal: false };
        }
        else {
            this.state = { showModal: true };
        }   
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.modalFooterImp = this.modalFooterImp.bind(this);
    }

    close() {
        this.setState({ page: false, showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    modalFooterImp() {
        let check = this.props.modalFooterFunc();
        if(check === 1 || check)
            this.close();
    }

    render() {

        let {modalBody, modalHeader, eventListener, modalFooter} = this.props;
        return (
            <div>
            <div onClick={this.open} >
                {eventListener}
                </div>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {modalHeader}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {modalBody}
                    </Modal.Body>
                    <Modal.Footer>
                        {modalFooter}
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


ModalOpen.propTypes = {
    eventListener: React.PropTypes.string,
    modalBody: React.PropTypes.object,
    modalFooter: React.PropTypes.node,
    modalHeader: React.PropTypes.string,
};
