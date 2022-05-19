import {Header, Main, Footer} from "./layout";

export const App = ({state}) => {
    return (
        <>
            <Header/>
            <Main state={state}/>
            <Footer contacts={state.contacts}/>
        </>
    );
}
