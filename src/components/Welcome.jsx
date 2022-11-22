import React, {useState} from 'react';
import  '../App.css';
import logo from '../img/photo_2022-08-25 16.01.54.jpeg';
import Auth from "./Auth";

function Welcome() {

    const [state, setSlide] = useState(
        {
            style:
                {
                    height: '100vh',
                    width: '100vw',
                    display: 'flex',
                    background: 'black',
                    position: 'absolute',
                    bottom: 0
                },
            img: {
                height: '50vw',
                display: 'block',
                margin: 'auto'
            }
        }

    )

    let count = state.style.bottom

    const slideHandle = () => {
            setInterval(() => {
                if (count <= 100) {
                    setSlide(
                        {
                            style:
                                {
                                    height: '100vh',
                                    width: '100vw',
                                    display: 'flex',
                                    background: 'black',
                                    position: 'absolute',
                                    bottom: count + '%'
                                },
                            img:
                                {
                                    height: '28vw',
                                    display: 'block',
                                    margin: 'auto'
                                }
                        }
                    )
                    count += 2
                }
            }, 8)
    }

        return (
            <div>
                <div style={state.style} onClick={slideHandle}>
                    <img src={logo} style={state.img} alt={'logo'}/>
                        <div style={{position: 'absolute', bottom: '2vh', right: '3vw', textAlign:'right', fontSize: '0.5'}}>
                            <p style={{color: 'red', margin:'0', fontSize: '0.8em'}}>WebSolutions by</p>
                            <p  style={{color: 'white',margin:'0', fontSize: '0.8em'}}>&#174; Alexander Vengerov</p></div>
                </div>
                <Auth/>
            </div>
        )
}

export default Welcome;
