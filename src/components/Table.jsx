import React, {useEffect, useState} from 'react';
import $ from 'jquery';

let imp = {}
let opt = {}
let real = []
let k

const Table = (props) => {

    const [len, setLength] = useState(props.order.length)
    const [active, setActive] = useState(false)

    const modalCheck = () =>{
        props.setActive(true)

    }

    const minus = (event) => {
        if (props.order[event.currentTarget.dataset.inlist].quantity > 0) {
            props.order[event.currentTarget.dataset.inlist].quantity -= 1
            setActive(!active)
        }
        if (props.order[event.currentTarget.dataset.inlist].quantity === 0) {
            props.deleteOrder(event.currentTarget.dataset.del)
            setActive(!active)
        }
    };

    const plus = (event) => {
        props.order[event.currentTarget.dataset.inlist].quantity += 1
        setActive(!active)
    };

    const deletePoint = (event) =>{
        event.preventDefault()
        props.deleteOrder(event.currentTarget.dataset.del)
    }

    const showOption = (event) =>
    {
        event.preventDefault()
        let point = event.currentTarget.dataset.index
        if (!opt[point]) {
            opt[point] = point
            setActive(!active)
        } else {
            delete opt[point]
            setActive(!active)}
    }

    useEffect(() =>{
        real = [...props.order]
        real.splice(k || 1000, 1)
        k = undefined
        imp = {}
            if (real.length !== 0) {
                imp[real[real.length - 1].name] = real[real.length - 1].name
            }
        $('.wait').hide()
        $('.wait').slideDown(500)
        $('.wait1').hide()
        $('.wait1').fadeIn(500)
        setLength(props.order.length)
    },[props.order.length > len])

    useEffect(() =>{
        imp = {}
        let dosay
        if(k === 0)
            real.shift()
        real.splice(k || 1000, 1)
        k = undefined
        for(let i=0; i < real.length; i++){
                if(!props.order.includes(real[i])){
                    dosay = real[i].name
                    imp[dosay] = dosay
                    k=i
                }
            }
        $('.wait').fadeOut(500)
        $('.wait1').hide()
        $('.wait1').fadeIn(500)
        setLength(props.order.length)
    },[props.order.length < len])

    return (
        <div>
            {props.order.length !== 0 &&
                <div style={{textAlign: 'center'}}>
                    <div><hr style={{color: 'white'}}/><img className={'jumpCart'} alt={'cart'} style={{width: '10vw'}} src={require('../img/sakit1.png')}/><hr style={{color: 'white', marginBottom: '0'}}/><div className={'triangle'}></div>
                    </div>
                    <div>
                        {real.map((ord, inlist) =>
                            <div className={imp[ord.name] === ord.name? 'wait' : {}} style={{borderRadius: '10px', padding: '5px', backgroundColor: 'white', border: '4px solid olive', margin: '5px'}} key={Math.random()}><div onClick={showOption} data-index={ord.name}><span className={'waiterist'}>{ord.name}</span></div>
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', margin: '1vw'}}><img data-del={ord.name} className={'countOrder1'} data-inlist={inlist} onClick={minus} src={require('../img/minus.png')} alt={'minus'}/><span onClick={showOption} data-index={ord.name} key={Math.random()} className={'waiterist'} style={{backgroundColor: '#DB4537', borderRadius:'50%', padding: '2px', width:'35%', height: '15%'}}>X {ord.quantity}</span><img data-inlist={inlist} onClick={plus} className={'countOrder1'} src={require('../img/plus-sign.png')} alt={'plus'}/></div>
                            <div className={'rocker'} data-del={ord.name} onClick={deletePoint} hidden={opt[ord.name] !== ord.name} id={ord.name}><hr style={{marginBottom: '1vh'}}/><div><img style={{marginBottom: '1vh'}} className={'unselect'} src={require('../img/trash.png')} alt={'unselect'}/></div>
                </div>
                        </div>)}
                    </div> 
                    <div className={'wait1'}>
                        <button style={{backgroundColor: 'olive', color: 'white', boxShadow: '2px 2px 2px grey', borderRadius: '15px', marginTop: '2vh'}} type="button" className="btn btn-success" onClick={modalCheck}>{props.add}</button>
                    </div>
                </div>}
                </div>

    );
};

export default Table;