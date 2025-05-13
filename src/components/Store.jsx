import React, { useState } from 'react'
import { useShopContext } from '../context/ShopContext.jsx'

const Store = () => {
  const { productos, carrito, setCarrito } = useShopContext()
  const [quantities, setQuantities] = useState({})

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, parseInt(value) || 1),
    }))
  }

  const handleAddToCart = (producto) => {
    const quantity = quantities[producto.id] || 1
    const existingProduct = carrito.find((item) => item.id === producto.id)
    if (existingProduct) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + quantity }
            : item
        )
      )
    } else {
      setCarrito([...carrito, { ...producto, cantidad: quantity }])
    }
  }

  return (
    <div>
      <h1>Productos</h1>
      <div className="productos">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="producto"
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
            />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p><strong>Precio:</strong> ${producto.precio}</p>
            <input
              type="number"
              min="1"
              value={quantities[producto.id] || 1}
              onChange={(e) => handleQuantityChange(producto.id, e.target.value)}
              className="cantidad"
            />
            <button onClick={() => handleAddToCart(producto)}>
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Store
