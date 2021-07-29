import { connect } from 'react-redux';

const Output = props => (
    <div>
        <h3>
            The cat is currently {props.activity}
        </h3>
    </div>
);


function mapStateToProps(state) {
    //Translate Redux state into React props
    return {
        activity: state.activity
    }
}

export default connect(mapStateToProps)(Output);