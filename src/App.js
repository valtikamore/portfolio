

import {Header} from "./components/header/mainBlock/Header";
import {Main} from "./main/main";
import {Footer} from "./Footer/Footer";

function App(props) {
    return (
        <>
            <Header/>
            <Main state={props.state}/>
            <Footer/>
        </>
    );
}

export default App;
