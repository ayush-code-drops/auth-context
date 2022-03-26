import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

function Card() {
    const {handleCartCount}=useContext(CartContext)
  return (
      <div>
          <h3>SHOE</h3>
          <button onClick={()=>handleCartCount(1)}>Add item</button>
    </div>
  )
}

export default Card