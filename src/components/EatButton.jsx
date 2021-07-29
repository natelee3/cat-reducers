import { connect } from 'react-redux';
import { actionEat } from '../actions';

const EatButton = props => (
    <>
        <button onClick={props.handleClick}>
            Eating
        </button>
    </>
)

function mapDispatchToProps(dispatch) {
    return {
        //Translate redux dispatch into a React prop
        handleClick: () => {
            dispatch(actionEat());
        }
    }
}

export default connect(null, mapDispatchToProps)(EatButton)