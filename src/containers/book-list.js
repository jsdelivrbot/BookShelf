import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>            
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

//container
export default connect(mapStateToProps)(BookList);


