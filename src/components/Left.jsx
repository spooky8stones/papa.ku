import React, {useState} from "react";
import {categoryNames as encategory} from "../utils/menu";
import {categoryNames as rucategory} from "../utils/rumenu";
import {categoryNames as hebrewcategory} from "../utils/hebrewmenu";
import Table from "./Table";

const Left = (props) => {

    const [products, setProducts] = useState(hebrewcategory)
    let [col, setCol] = useState({עברית: 'עברית'})

    const [active, setActive] = useState(
        {
            isActive: 1,
            style: 'menuButton point'
        }
    )

    const nameObject = JSON.parse(props.clientObj)

    const chooseMenu = (event) => {
        let cat = event.target
        setActive(
            {
                isActive: +cat.dataset.index,
                style: 'menuButton point'
            }
        )
        props.screenHandle(cat.id)
    }

    const langList = ['En', 'עברית', 'Ру']

    const changeLanguage = (event) =>
    {
        const rot = event.target.id
        if(!col[rot]) {
            col = {}
            col[rot] = rot
            setCol(col)
        }

        switch (event.target.id) {
            case 'En': setProducts(encategory)
                break;
            case 'Ру': setProducts(rucategory)
                break;
            case 'עברית': setProducts(hebrewcategory)
                break;
            default: return setProducts(hebrewcategory)
        }
    }



    return (
            <div className={'leftStyle'}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <a style={{textDecoration: 'none'}} aria-label="WhatsApp" href="https://wa.me/972545260048">
                    <img style={{height: '10vw'}} alt="Chat on WhatsApp" src={require('../img/WhatsApp.svg.png')} />
                </a>
                <a href="https://www.facebook.com/sushipapaku"><img style={{height:'10vw'}} alt={'waze'} src={require('../img/Facebook.png.webp')}/></a>
                <a href="https://ul.waze.com/ul?ll=33.13816210%2C35.64874649&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"><img style={{height:'10vw'}} alt={'waze'} src={require('../img/waze-icon.png')}/></a>
                </div>
                <hr style={{color: 'white'}}/>
                <p className={'greeting'}>Hello, {nameObject.firstName || 'New friend'}!</p>
                <hr style={{color: 'white'}}/>
                <ul style={{display: 'flex', justifyContent: 'space-around', color: 'white', listStyleType: 'none', margin: '10px 0 10px 0'}}>
                    {langList.map(lang => <li key={Math.random()} id={lang} className={'langChose'} onClick={(event) => {props.changeLanguage(lang)
                        changeLanguage(event)}} style={col[lang] === lang ? {color: 'white', backgroundColor: 'firebrick', borderBottom: '1px solid white', borderRight: '1px solid white', borderRadius: '5px', padding:'5px'}: {color: 'grey', padding:'5px'}}>{lang}</li>)}
                </ul>
                <hr style={{color: 'white'}}/>
                {Object.entries(products).map((prod, index) =>
                    <p className={index === active.isActive ? active.style : 'menuButton'} data-index={index} id={prod[0]} onClick={chooseMenu} key={Math.random()}>{prod[1]}</p>)}
                <Table open={props.open} setActive={props.setActive} add={props.add} deleteOrder={props.deleteOrder} order={props.orderlist}/>
            </div>
    );
}

export default Left;