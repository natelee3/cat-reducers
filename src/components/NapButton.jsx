import { connect } from "react-redux";
import { actionNap } from "../actions";

const NapButton = props => (
    <>
        <button onClick={props.handleClick}>
            Napping
        </button>
    </>
)

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {
            dispatch(actionNap());
        }
    }
}

export default connect(null, mapDispatchToProps)(NapButton);