import React from 'react';
import sushi from "../img/pngwing.com.png";
import logo from "../img/photo_2022-08-25 16.01.48.jpeg";

const Header = (props) => {
    return (
        <div onClick={() => props.ropen({isOpen: false})} className={'header'}>
                <img src={sushi} style={{height: '10vw', margin: '1vw', transform: 'scale(-1, 1)'}} alt={'sticks'}/>
                <img src={logo} className={'headerImg'} alt={'logo'}/>
                <img src={sushi} style={{height: '10vw', margin: '1vw'}} alt={'sticks'}/>
        </div>
    );
};

export default Header;