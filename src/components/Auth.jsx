import React, {useState} from 'react';
import Log from "./Log";
import Reg from "./Reg";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";

const Auth = (props) => {

    const [state, changeState] = useState({
        route: 1,
        userName: {firstName: 'New friend'}
    }, )


    const registerHandle = (p, clientObj) => {
        changeState({
            route: p,
            userName: clientObj
        }
    )

    }


    if (state.route === 1)
    {
        return (
            <div style={{backgroundColor: 'white'}}>
            <Header/>
                <Log registerHandle={registerHandle}/>
                <Footer/>
            </div>
        );
    }
    if (state.route === 2)
    {
        return (
            <div style={{backgroundColor: 'white'}}>
                <Header/>
            <Reg registerHandle={registerHandle}/>
                <Footer/>
                </div>
        );
    }
    if (state.route === 3)
    {
        return (
        <div style={{backgroundColor: 'white'}}>
            <Menu setActive={props.setActive} clientObject={state.userName}/>
        </div>
        );
    }

}

export default Auth;