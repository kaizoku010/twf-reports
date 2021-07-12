import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button, Badge } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../componets/dashboard.css";
//import { id } from 'uuid';
import SmartText from "../componets/SmartText";
import { v1 as id } from "uuid";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from 'prop-types';

class EntryList extends Component {

    static propTypes = {
        getItems: PropTypes
            .func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }
    
    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (_id) => {
        this.props.deleteItem(_id);
    }
    
    render() {
        const { items } = this.props.item;
        return (
            <Container className="list__holder">
              <ListGroup>
                    <TransitionGroup className="report-list">
                        {items.map(({ title, _id, name, author }) => (
                            <CSSTransition key={_id}
                                timeout={300}
                                classNames="fade">
                                <ListGroupItem>
                                <h4>{title}</h4> 
                                    <SmartText text={name}/>
                                    <div className="author__holder">
                                        <p className="author">{author}</p>
                                        <h5 className="comment">Print</h5>

                                        {this.props.isAuthenticated ?
                                            <p className="deleteBtn" onClick={
                                            this.onDeleteClick
                                                .bind(this,
                                                    _id)}>Delete
                                        </p> : null}
                                       
                                    </div>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}



const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});
export default
    connect(mapStateToProps,
        { getItems, deleteItem })(EntryList);