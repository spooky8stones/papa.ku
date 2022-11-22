import React, {useState} from 'react';

const Log = (props) => {

    const [login, changeLog] = useState(
        {
            password: 'password'
        }
    )

    //???
    const onRegister = () => props.registerHandle(2, null)

    const logHandle = () => {
        const storage = localStorage.getItem(login.password)
        console.log(storage)
        if (storage) {
            props.registerHandle(3, storage)
        } else {
            //???
            alert('Not registered')
            props.registerHandle(2, null)
        }
    }



    const dataLog = (event) => {
       changeLog(
           {
               password: event.target.value.trim()
           }
       )
    }

    return (
        <div className={'wrapper'}>
            <ul style={{listStyle: 'none', margin: '5vh'}}><li><p className={'message'}>Get Menu</p></li>
                    <li><label>Your phone: </label>
                        <input type={"password"} name={'password'} placeholder={'Example: 0545260048'} onChange={dataLog}/>
                    </li>
                    <div className={'reg_buttons'}>
                    <button style={{borderRadius:'5px', color: 'white', display:'block', background: 'black'}} onClick={logHandle}>Login</button>
                    <p onClick={onRegister} className={'regon'}>Register?</p>
                    </div>
                </ul>
        </div>
    );
};

export default Log;