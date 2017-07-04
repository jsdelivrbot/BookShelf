import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li onClick={() => this.props.selectBook(book)} key={book.title} className="list-group-item">{book.title}</li>            
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}        
            </ul>
        );
    }
}

//Connects state in redux with react component
//Whatever is retured will show up as props inside BookList
function mapStateToProps(state) {
    return {
        books: state.books
    }
}

//Action binder
//Anything returned by this fucntion will end up as props on BookList container
function matchDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result is passed to all reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

//container
//Promotes BookList from Component to container
//It needs to know about the new dispatch method selectBook and make it available as props
export default connect(mapStateToProps, matchDispatchToProps)(BookList);


