import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardAction from '../action/cart';
import Menu from '../components/Menu'
import uniqBy from 'lodash/uniqBy'


const mapStateToProps = ({cart}) => ({
	totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
	count: cart.items.length,
	items: uniqBy(cart.items, o => o.id ),
})

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(cardAction, dispatch),
});
// setBooks: books => dispatch(setBooks(books))
export default connect(mapStateToProps, mapDispatchToProps)(Menu);