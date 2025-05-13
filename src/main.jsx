import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style.css'
import { ShopProvider } from './context/ShopContext.jsx'
import { ShopUseContext } from './ShopUseContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopProvider>
      <ShopUseContext />
    </ShopProvider>
  </StrictMode>,
)
