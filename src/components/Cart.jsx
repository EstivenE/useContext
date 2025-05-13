import React from 'react'
import { useShopContext } from '../context/ShopContext.jsx'

export const Cart = () => {
  const { carrito, setCarrito } = useShopContext()

  const handleRemoveFromCart = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id))
  }

  const calculateTotal = () => {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0)
  }

  return (
    <div>
      <h1>Carrito</h1>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {carrito.map((item) => (
              <li className="cartItem" key={item.id}>
                <img
                  src={item.imagen}
                  alt={item.nombre}
                />
                <div>
                  <h3>{item.nombre}</h3>
                  <p><strong>Precio:</strong> ${item.precio}</p>
                  <p><strong>Cantidad:</strong> {item.cantidad}</p>
                  <p><strong>Subtotal:</strong> ${item.precio * item.cantidad}</p>
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: ${calculateTotal()}</h2>
        </div>
      )}
    </div>
  )
}
