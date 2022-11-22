import React, {Component} from 'react';
import $ from 'jquery';
import checked from "../img/success.png"
import add from "../img/oval.png"

export default class SlidePro extends Component {

    constructor(props) {
        super(props);
        this.finalOrder = []
        this.order = {}
        this.check = {}
        this.imag = {}
        this.toCart = {}
        this.mass = {...this.props.products.prod}
        this.state = {
            sActive: false,
            imgScale: 'imgProd',
            list: '',
            hid: true
        }
    }

    componentDidMount() {
        if (!this.state.sActive) {
            $('.rock').hide()
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.finalOrder.find((value, i) => {
            if (value.name === this.props.rem) {
                // if(this.finalOrder.length === 1)
                //     this.finalOrder = []
                this.finalOrder.splice(i, 1)
                this.props.showOrderList(this.finalOrder)
                delete this.imag[this.props.rem]
                delete this.toCart[this.props.rem]
                return true
            } else {
                return false
            }
        })

        if(prevProps.products.lang !== this.props.products.lang)
        {
            this.mass = {...this.props.products.prod}
            this.finalOrder = []
            this.props.showOrderList(this.finalOrder)
            this.order = {}
            this.check = {}
            this.imag = {}
            this.toCart = {}

        }

        if (prevState === this.state)
        {
            this.imag = {}
            $('.rock').hide()
            this.setState({sActive: false})
        }
    }


    shoP = (event) => {
        event.preventDefault()
        this.point = '#' + event.currentTarget.dataset.index
        this.point1 = event.currentTarget.dataset.index
        if (!this.imag[this.point1]) {
            $(this.point).show(500)
            this.setState({sActive: !this.state.sActive})
            this.imag[this.point1] = this.point1
        } else {
            $(this.point).hide(500)
            this.setState({sActive: !this.state.sActive})
            delete this.imag[this.point1]
        }
    }

    deleteIngredient = (event) => {
        event.preventDefault()
        this.setState({
            list: event.currentTarget.id})
        if(!this.check[event.currentTarget.id]){
        this.check[event.currentTarget.id] = event.currentTarget.dataset.ingredient
        } else {
            delete this.check[event.currentTarget.id]}
    }

    addToCart = (event) => {
        this.close = '#' + event.currentTarget.dataset.style
        let nameArr = []
        this.finalOrder.forEach((order, i) => {
            nameArr[i] = order.name
        })

        if (!this.toCart[event.currentTarget.dataset.style]) {
            this.toCart[event.currentTarget.dataset.style] = event.currentTarget.dataset.style
        } else {
            delete this.toCart[event.currentTarget.dataset.style]
        }

        this.finalOrder.find((value, i) => {
            if (value.name === event.currentTarget.dataset.style) {
                this.finalOrder.splice(i, 1)
                this.props.showOrderList(this.finalOrder)
                return true
            } else {
                return false
            }
        })

        if (!nameArr.includes(event.currentTarget.dataset.style)) {

            this.order.name = event.currentTarget.dataset.style
            this.order.quantity = 1
            this.order.price = event.currentTarget.dataset.price
            let ingr = []
            let i = 0
            for (let key in this.check) {
                if (key.startsWith(event.currentTarget.dataset.style)) {
                    ingr[i] = this.check[key]
                    ++i
                }
            }
            this.order.ingredients = ingr
            this.finalOrder.push({...this.order})
            $(this.close).hide(500)
            delete this.imag[event.currentTarget.dataset.style]
            this.setState({
                hid: false
            })

            this.mass[this.props.go].find((value, i) => {
                if (value.name === event.currentTarget.dataset.style) {
                    this.massProd = [...this.mass[this.props.go]]
                    this.massProd.push(this.mass[this.props.go][i])
                    this.massProd.splice(i, 1)
                    return true
                }
                return false
            })


            this.obj = {[this.props.go]: this.massProd}

            this.mass = {...this.mass, ...this.obj}

            this.props.showOrderList(this.finalOrder)

        }
    }


    render() {
        return (
            <div>
                {this.mass[this.props.go].map((cat, ind) =>
                        <div key={ind}>
                            <div className={'styleCard'} style={this.toCart[cat.name] === cat.name ? {backgroundColor: 'black'}: {}}>
                                <div style={{position: 'relative'}} className={'imgPlace'}>
                                <img onClick={this.shoP} data-index={cat.name} className={this.imag[cat.name] === cat.name ? 'imgProd1' : 'imgProd'} src={`${cat.imgUrl}`}
                                     alt={cat.name}/>
                                    <img id={'cartImg'} alt={'basket'} hidden={this.toCart[cat.name] === cat.name ? this.state.hid : true} src={require('../img/cart2.png')} style={{position: "absolute", width: '8vw', right: '2vw', bottom: '2vw', backgroundColor: 'white', borderRadius: '50%'}}/>
                                </div>
                                <div style={this.toCart[cat.name] ? {color: 'white'}: {color: 'black'}} className={'priceStyle'}>
                                    <p>{cat.name}</p>
                                    <p style={{color: 'red'}}>{cat.price}<span style={this.toCart[cat.name] ? {color: 'white'}: {color: 'black'}}> ₪</span>
                                    </p>
                            </div>
                                <div className={'rock'} id={cat.name}>
                                    <hr/>
                                    {/*установлено два одинаковых id на картинку и на div*/}
                                    {cat.ingredients.map((ingredient, i) => <button id={cat.name+i} data-category={cat.name} data-ingredient={ingredient} data-index={i} key={i} onClick={this.deleteIngredient} className={this.check[cat.name+i] === ingredient ? 'ingredietsChoose1' :'ingredietsChoose'}><div className={'buttonSpace'}><p className={this.check[cat.name+i] === ingredient ? 'ingDel': ''} style={{margin: '0'}}>{ingredient}</p><img className={this.check[cat.name+i] === ingredient ? 'submitIngr1' : 'submitIngr'} alt={cat.name} src={this.check[cat.name+i] === ingredient ? add: checked}/></div></button>)}
                                    <div style={{textAlign:'center', margin: '3vw'}}><button type="button" className="btn btn-success" data-style={cat.name} data-price={cat.price} onClick={this.addToCart} style={{backgroundColor: 'olive', color: 'white', boxShadow: '2px 2px 2px grey', borderRadius: '15px'}}>{this.toCart[cat.name] === cat.name ? this.props.products.prod.doneButtons.remove : this.props.products.prod.doneButtons.buy}</button></div>
                                </div>
                            </div>
                    </div>)}
            </div>
        );
    }
}

