import React from 'react'
import { ShopProvider } from './context/ShopContext'
import Store from './components/Store'

export const ShopUseContext = () => {
  return (
    <ShopProvider>
      <Store />
    </ShopProvider>
  )
}

