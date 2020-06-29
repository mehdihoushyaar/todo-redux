import React from 'react'

const Cart = ({cartItems}) => {

  const mapCart = cartItems.map(row => {
    return (
      <li
        className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
        <img className="w2 h2 w3-ns h3-ns br-100" src={row.img} />
        <div className="pl3 flex-auto">
          <span className="f6 db black-70">{row.name}</span>
          <span className="f6 db black-70">{row.descreption}</span>
        </div>
        <div>
          <a className="f6 link blue hover-dark-gray"><strong>{row.units}</strong> x ${row.price},00</a>
        </div>
      </li>
    )
  })

  let totalUnits = 0
  let Total = 0
  for(let i = 0; i < cartItems.length; i++) {
    const element = cartItems[i]
    const totaly = element.price * element.units
    Total += totaly
    totalUnits += element.units
  }

  return(
    <ul className="list pl0 mt0 measure cart-list">
      {mapCart}
      <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10 total-cart">
        <h3>TOTAL: {totalUnits} unit(s) </h3>
        <h3>${Total},00</h3>
      </li>
    </ul>
  )
}

export default Cart