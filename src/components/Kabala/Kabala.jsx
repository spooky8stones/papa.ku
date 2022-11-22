import React from 'react';
import styles from "./kabala.module.css";

const Kabala = (props) => {

    const date = new Date()
    let sum

     if(props.kabala.length !== 0){
         sum = props.kabala.reduce((summa, item) =>
         {

             return summa+item.price*item.quantity
         }, 0)
     }


    return (
        <div className={styles} style={{display: 'flex', justifyContent: 'space-around', marginTop: '2vh'}}>
            {props.kabala.length !==0 &&
            <div style= {{width: '60vw', border: ' 1px dotted', padding: '2vw'}}>
                <h1 style={{textAlign: 'center'}}>{props.products.prod.check.info}</h1>
            <hr/>
            <p style={{textAlign: 'center', margin: '0'}}>{props.products.prod.check.passport} 345482679</p>
            <hr/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <p>{props.products.prod.check.date}: {date.toLocaleDateString()}</p>
                <p>{date.toLocaleTimeString()}</p>
                </div>
                <p>{props.products.prod.check.id}: #135</p>
            <hr/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p>{props.products.prod.check.item}</p>
                    <p>{props.products.prod.check.number}</p>
                    <p>{props.products.prod.check.price}</p>
                    </div>
                <hr/>
                {props.kabala.map(order =>
                    <div key={Math.random()} style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p>{order.name}</p>
                        <p>{order.quantity}</p>
                        <p>{order.price*order.quantity} ₪</p>
                    </div>)}
            <hr/>
            <p>{props.products.prod.check.amount}: {sum}₪</p>
                <p>{props.products.prod.check.sale}:</p>
            <hr/>
                    <p>{props.products.prod.check.topay}:</p>
            </div>}
        </div>
    );
};

export default Kabala;