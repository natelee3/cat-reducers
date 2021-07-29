import EatButton from "./EatButton";
import PlayButton from "./PlayButton";
import NapButton from "./NapButton";
import Output from "./Output";

const Activity = (props) => {
    return (
        <>
            <h1>Cat Reducers</h1>
            <Output/>
            <EatButton/>
            <PlayButton/>
            <NapButton/>
        </>
    )

}

export default Activity;