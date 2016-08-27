import { connect } 		from 'react-redux';
import { increment } 	from './MochActions';

import MochComponent 	from './MochComponent';

const mapStateToProps = (state) => ({
	value: state.count,
});

const mapDispatchToProps = (dispatch) => ({
	onIncrement: () => dispatch(increment(1)),
});

const MochContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MochComponent);

export default MochContainer;
