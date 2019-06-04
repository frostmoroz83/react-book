import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardAction from '../action/cart';
import BookCard from '../components/BookCard'


const mapStateToProps = (state, {id} ) => ({
	addedCount: state.cart.items.reduce((count, book) => count + (book.id === id ? 1 : 0), 0),
})

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(cardAction, dispatch),
});
// setBooks: books => dispatch(setBooks(books))
export default connect(mapStateToProps, mapDispatchToProps)(BookCard);