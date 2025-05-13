import React, { useState } from 'react'
import { ShopProvider } from './context/ShopContext'
import Store from './components/Store'
import { Cart } from './components/Cart'

export const ShopUseContext = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev)
  }

  return (
    <ShopProvider>
      <button className="cart-button" onClick={toggleCart}>
        Ver Carrito
      </button>
      {isCartOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={toggleCart}>
              Cerrar
            </button>
            <Cart />
          </div>
        </div>
      )}
      <Store />
    </ShopProvider>
  )
}

