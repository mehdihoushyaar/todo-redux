import React, { Component } from 'react'
import './App.css'
import Product from './components/Product'
import PRODUCTS from './DATA'
import Cart from './components/Cart'


export default class App extends Component {

    constructor(){
      super()
      this.state = {
        cart: []
      }
    }
    

    handleAddFunc(product) {
      
      {// const existingProduct = this.state.cart.filter(p => p.id == product.id )
      // console.log(existingProduct)
      
      // if(existingProduct.length > 0){
      //   const updatedUnitsProduct = {
      //     ...existingProduct[0],
      //     units: existingProduct[0].units + product.units
      //   }
      //   const withoutExistingProduct = this.state.cart.filter(p => p.id != product.id)
      //   const x = withoutExistingProduct.concat(updatedUnitsProduct)
      //   this.setState({
      //     cart: x
      //   })
      // }
      }

      const existingProductIndex = this.state.cart.findIndex(p => p.id == product.id)
      if(existingProductIndex >= 0){
        const cartProducts = this.state.cart
        const existingProduct = cartProducts[existingProductIndex]
        const updatedUnitsProduct = {
          ...existingProduct, units: existingProduct.units + product.units
        }
        cartProducts[existingProductIndex] = updatedUnitsProduct
        this.setState({
          cart: cartProducts
        })
      }
      else {
        const y = this.state.cart.concat(product)
        this.setState({
          cart: y
        })
      }
    }

    render(){
      return (
        <div className='app-container'>
          
          <main className='pa3 pa5-ns flex flex-wrap products-container'>
            {PRODUCTS.map(p => <Product key={p.id} {...p} addFunc={this.handleAddFunc.bind(this)} /> )}
          </main>
          <Cart className='cart-container' cartItems={this.state.cart}/>
        </div>
      )
    }
}
