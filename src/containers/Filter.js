import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterAction from '../action/filter';
import Filter from '../components/Filter'


const mapStateToProps = ({ filter}) => ({
	filterBy: filter.filterBy,
})

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(filterAction, dispatch),
});
// setBooks: books => dispatch(setBooks(books))
export default connect(mapStateToProps, mapDispatchToProps)(Filter);