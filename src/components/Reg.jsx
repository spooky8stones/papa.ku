import React, {Component} from 'react';
import fingerprint from "../img/images.png";

export default class Reg extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            firstName: "",
            lastName: "",
            login: "",
            password: ""
        }
    }

    //???
    backHome = () => {this.props.registerHandle(1, null)}

    handleClick = event => {
        event.preventDefault()
        localStorage.setItem(this.state.password, JSON.stringify(this.state))
        const regInfo = localStorage.getItem(this.state.password)
        this.props.registerHandle(3, regInfo)
    }

    dataReg = (event) =>
    {
        this.setState(
            {
                "firstName" : event.currentTarget.firstName.value.trim(),
                "lastName" : event.currentTarget.lastName.value.trim(),
                "login" : event.currentTarget.login.value.trim(),
                "password" : event.currentTarget.password.value.trim()
    }
    )
    }

    render() {
        return (
            <div className={'wrapRegister'}>
                <form onChange={this.dataReg}>
                    <p style={{margin: '2vh auto', textAlign: 'center', color:'#0c63e4', textDecoration: 'underline', cursor: 'pointer'}} onClick={this.backHome}>Back</p>
                <ul style={{listStyle: 'none'}}><li><label>Your name: </label>
                    <input typeof={"text"} name={"firstName"} placeholder={'Example: Vitaly (English only)'}/></li>
                    <li><label>Your Adress: </label>
                        <input typeof={"text"} name={"lastName"} placeholder={'Example: Kiryat Shemona (English only)'}/>
                    </li>
                    <li><label>Enter mail: </label>
                        <input typeof={"text"} name={"login"} placeholder={'Example: papa.ku@ku.ru'}/>
                    </li>
                    <li><label>Enter phone: </label>
                        <input typeof={"number"} name={"password"} placeholder={'Example: 0545260048'}/>
                    </li>
                    <img onClick={this.handleClick} style={{display:'block', margin: '10px auto', height: '100wv', color: 'red', borderRadius: '20px', width: '10vw'}} src={fingerprint} alt=""/>
                </ul>
                </form>
            </div>
        );
    }
}
