import React, { Component } from 'react';
import "./dashboard.css";
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
import PropTypes from "prop-types";


class ReportModel extends Component{


    componentDidMount = () => {
        if (this.textRef) this.textRef.style.height = this.textRef.scrollHeight + "px";
}


    state = {
        modal: false,
        name: "",
        title: "",
        author:""
    }


    static propTypes = {
        isAuthenticated :PropTypes.bool
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
        this.setState({ [e.target.name]: e.target.value });
    }

    onChangeAuthor = (e) => {
        this.setState({ [e.target.name]: e.target.value });
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

                {this.props.isAuthenticated ?
                    <Button
                    color="dark"
                    style={{ marginBottom:'2rem' }}
                    onClick={this.toggle}>Add Report
                </Button> : <h4 className="mb-3 ml-4" >Please log into portal</h4>}
                
                
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
                                <div className="input__holder">
                                <Input type="title"
                                    title="title"
                                        id="title"
                                        name="title"
                                    placeholder="Title" aria-label="Title"
                                    onChange={this.onChangeTitle} />
                                
                                <Input type="author"
                                        author="author"
                                        name="author"
                                    className="author__input"
                                    id="author"
                                    placeholder="Author Name"
                                        onChange={this.onChangeAuthor} />
                                    </div>
            
                                <Input
                                    type="textarea"
                                    name="name"
                                    ref={this.textRef}
                                    rows={5}
                                    id="item"
                                    className="report_style"
                                    placeholder="Write something!"
                                    onChange={this.onChange }
                                    />
           
                                <Button
                                    color="dark"
                                    className="submit__btn"
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
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
    addItem
}
)(ReportModel);