import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as booksAction from '../action/books';
import {setBooks} from '../action/books';
import App from '../components/App';
import orderBy from 'lodash/orderBy'

const sortBy = (books, filterBy) => {
	switch (filterBy) {
		case 'price_high':
			return orderBy(books, 'price', 'desc')
		case 'price_low':
			return orderBy(books, 'price', 'asc')
		case 'author':
			return orderBy(books, 'author', 'asc')
		default: return books
	}
};
const filterBooks = (books, searchQuery) =>
	books.filter(
		x =>
			x.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
			x.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
	);

const searchBooks = (books, filterBy, searchQuery) => {
		return sortBy(filterBooks(books, searchQuery), filterBy)
}

const mapStateToProps = ({books, filter}) => ({
	books:
		books.items &&
		searchBooks(books.items, filter.filterBy, filter.searchQuery),
	isReady: books.isReady
})

const mapDispatchToProps = dispatch => ({
	setBookss: function (books) {
		dispatch(setBooks(books))
	},
	// setBookss: (books) => dispatch(setBooks(books)), es6
	// ...bindActionCreators(booksAction, dispatch),		через bind
});
// setBooks: books => dispatch(setBooks(books))
export default connect(mapStateToProps, mapDispatchToProps)(App);