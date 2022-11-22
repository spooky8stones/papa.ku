import React, {useEffect, useState} from 'react';
import Header from "./Header";
import SlidePro from "./SlidePro";
import Left from "./Left";
import {products as enproducts} from "../utils/menu";
import {products as ruproducts} from "../utils/rumenu";
import {products as hebrewproducts} from "../utils/hebrewmenu";
import Footer from "./Footer";
import Kabala from "./Kabala/Kabala";
import Modal from "./Modal";


const Menu = (props) => {

    const [open, setOpen] = useState({isOpen: false})

    const [modalActive, setModalActive] = useState(false)

    const [products, setProducts] = useState({prod: hebrewproducts, lang: 'en'})

    const [flag, setFlag] = useState()

    const [right, setRight] = useState(
        {
            category: 'regular',
            ordered: []
        }
    )

    const [state, setSlide] = useState(
        {
            style: {top: `0vh`},
            style1: {left: `100vw`},
            style2: {right: `100vw`},

        }
    )


    let count = parseFloat(state.style.top)
    let count1 = parseFloat(state.style1.left)
    let count2 = parseFloat(state.style2.right)


    let c = count
    let c1 = count1
    let c2 = count2

    console.log(c1)

    useEffect(() => {
        const closing = setInterval(() => {
                if (count2 >= 60) {
                    setSlide(
                        {
                            style: {top: `${count}vh`},
                            style1: {left: `${count1}vw`},
                            style2: {right: `${count2}vw`}
                        }
                    )
                    count -= 1
                    count1 -= 2.4
                    count2 -= 1.6
                } else {clearInterval(closing)}
            }
            , 8)
    }, [open.isOpen === false])

    useEffect(() => {
        const opening = setInterval(() => {
                if (c2 <= 100){
                    setSlide(
                        {
                            style: {top: `${c}vh`},
                            style1: {left: `${c1}vw`},
                            style2: {right: `${c2}vw`}
                        }
                    )
                    c += 1
                    c1 += 2.4
                    c2 += 1.6
                } else {clearInterval(opening)}
            }
            , 8)
    }, [open.isOpen === true])

    const deleteOrder = (remove) =>{
        setFlag(remove)
    }

    const changePage = (roll) =>{
        setOpen({isOpen: roll})
    }

    const changeLanguage = (lang) =>
    {

        switch (lang) {
            case 'En': return setProducts({prod: enproducts, lang: 'En'})
            case 'Ру': return setProducts({prod: ruproducts, lang: 'Ру'})
            case 'עברית': return setProducts({prod: hebrewproducts, lang: 'עברית'})
            default: return setProducts({prod: hebrewproducts, lang: 'עברית'})
        }
    }

    const showOrderList = (orderlist) => {
        setRight({ordered : orderlist,
        category: right.category})
    }

    const screenHandle = p => {
        setRight({category: p,
            ordered : right.ordered})
    }


    return (
        <div>
            <div className={'slide'} style={state.style}>
                <Header ropen={setOpen}/>
                <Kabala kabala={right.ordered} products={products}/>
                <Footer/>
            </div>
            <div className={'slideSidesRight'} style={ c1 === 100 ? {display: 'none'} : state.style1}>
                <SlidePro products={products} rem={flag} go={right.category} showOrderList={showOrderList}/>
            </div>
            <div className={'slideSidesLeft'} style={state.style2}>
                <Left open={changePage} setActive={setModalActive} add={products.prod.doneButtons.order} changeLanguage={changeLanguage} deleteOrder={deleteOrder} orderlist={right.ordered} screenHandle={screenHandle} clientObj={props.clientObject}/>
            </div>
            <Modal page={changePage} active={modalActive} setActive={setModalActive}/>
        </div>
    );
};

export default Menu;