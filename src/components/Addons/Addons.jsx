import React from 'react';
import styling from './addons.module.css';

const Addons = (props) => {

    return (
        <div className={styling.rt}>
            <p style={{textAlign: 'center'}}>Choose souce</p>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: "space-evenly"}}>
                <div><img src={require('../../img/sous/imbir.jpeg')} alt="imbir"/></div>
                <div><img src={require('../../img/sous/soya.jpeg')} alt="soya"/></div>
                <div><img src={require('../../img/sous/spicy.jpeg')} alt="spicy"/></div>
                <div><img src={require('../../img/sous/teriyaki.jpeg')} alt="teriyaki"/></div>
                <div><img src={require('../../img/sous/vasabi.jpeg')} alt="vasabi"/></div>
            <div>
            <img style={{border: '1px solid black'}} src={require('../../img/sous/chopsticks.png')} alt="chopsticks"/>
            </div>
            </div>
            <div className={styling.rt} style={{display: 'flex', flexWrap: 'wrap', justifyContent: "space-evenly", marginTop: '2vh'}}>
                <button type="button" className="btn btn-success" onClick={() => {props.lpage(true)
                props.close(false)}}>OK</button>
                <button type="button" className="btn btn-danger">Сбросить</button></div>
        </div>
    );
};

export default Addons;