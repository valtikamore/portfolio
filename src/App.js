

import {Header} from "./components/header/mainBlock/Header";
import {Main} from "./main/main";

function App(props) {
    return (
        <>
            <Header/>
            <Main skills={props.skills}/>
        </>
    );
}

export default App;
