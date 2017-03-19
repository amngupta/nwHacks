import React, { Component } from 'react';
import { Row, Modal, Button, Col, FormControl, FormGroup } from 'react-bootstrap';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export class ModalTest extends Component {
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
        this.goNext = this.goNext.bind(this);
        this.open = this.open.bind(this);
        this.state = { showModal: false, country: '', region: '', page: false };
    }

    selectCountry(val) {
        this.setState({ country: val });
    }

    goNext() {
        this.setState({
            page: true
        });
    }

    selectRegion(val) {
        this.setState({ region: val });
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }
    render() {

        const loginButtons = (
            <div>
                <hr />
                <div className="text-center">
                    <Col xs={6}>
                        <Button bsStyle="primary" bsSize="large" onClick={this.close}>Login</Button>
                    </Col>
                    <Col xs={6}>
                        <Button bsStyle="success" bsSize="large" onClick={this.close}>Sign Up!</Button>
                    </Col>
                    <p>
                        Powered by Kimchi Fried Rics
                        </p>
                </div>
            </div>
        );
        const { country, region } = this.state;

        const userInfoForm = (
            <form>
                <FormGroup>
                    <FormControl
                        type="text"
                        placeholder="Full Name"
                    />
                    <br />
                    <FormControl
                        type="email"
                        placeholder="Email"
                    />
                    <br />
                    <FormControl
                        type="address"
                        placeholder="Address Line 1" />
                    <br />
                    <FormControl
                        type="address"
                        placeholder="Address Line 2" />
                    <br />
                    <div className="form-group col-sm-6">
                        <div className="col-sm-12">
                            <CountryDropdown
                                value={country}
                                onChange={(val) => this.selectCountry(val)} classes="form-control" />
                        </div>
                    </div>
                    <div className="form-group col-sm-6">
                        <div className="col-sm-12">
                            <RegionDropdown
                                country={country}
                                value={region}
                                onChange={(val) => this.selectRegion(val)} classes="form-control" />
                        </div>
                    </div>
                </FormGroup>
            </form>
        )
        let modalBody = null;
        let buttonName = null;
        if (this.state.page) {
            modalBody = loginButtons;
            buttonName = (<Button >Submit</Button>)
        }
        else {
            modalBody = userInfoForm;
            buttonName = (<Button onClick={this.goNext}>Next</Button>)
        }

        return (
            <div>
                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={this.open}
                >
                    Launch demo modal
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton />
                    <Modal.Body>
                        {modalBody}
                    </Modal.Body>
                    <Modal.Footer>
                        {buttonName}
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}