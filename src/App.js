

import {Header} from "./header/Header";
import {Main} from "./main/main";
import {Footer} from "./Footer/Footer";

function App(props) {
    return (
        <>
            <Header/>
            <Main state={props.state}/>
            <Footer contacts={props.state.contacts}/>
        </>
    );
}

export default App;
