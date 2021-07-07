import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";


class ReportModel extends Component{

    state = {
        modal: false,
        name: "",
        title: "",
        author:""
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onChangeTitle = (e) => {
        this.setState({ [e.target.title]: e.target.value });
    }

    onChangeAuthor = (e) => {
        this.setState({ [e.target.author]: e.target.value });
    }


    onSubmit = e => {
        e.preventDefault();
        const newReport = {
            name: this.state.name,
            title: this.state.title,
            author: this.state.author

        }

        this.props.addItem(newReport);
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom:'2rem' }}
                    onClick={this.toggle}>Add Report</Button>
                
                <Modal
                 isOpen ={this.state.modal}
                 toggle={this.toggle}>
                    <ModalHeader                    
                        toggle={this.toogle}
                    >  Add Report
                    </ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                                <Label for="report"></Label>
                                <input type="text"
                                    title="title"
                                    class="form-control"
                                    placeholder="Username" aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={this.onChangeTitle} />
                                
                                <input type="text"
                                    author="author"
                                    class="form-control"
                                    placeholder="Username" aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={this.onChangeAuthor}/>
            
                                <input
                                    type="textarea"
                                    name="name"
                                    id="item"
                                    placeholder="Start here!"
                                    onChange={this.onChange }
                                />
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem'}} block                             
                                >Submit</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>

                </Modal>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, {addItem})(ReportModel);