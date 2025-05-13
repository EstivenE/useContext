import { useContext, createContext, useState } from "react";

const Shopcntx=  createContext()

import img1 from "../assets/red-cerveza.jpg";
import img2 from "../assets/lager-cerveza.jpg";
import img3 from "../assets/golden-cerveza.jpg";
import img4 from "../assets/pilsen-cerveza.jpg";
import img5 from "../assets/morazul-like.jpg";

export const ShopProvider= ({children})=>{
    const [productos, setProductos]= useState([{
        id: "aousndo2",
        nombre: "Cerveza Roja",
        descripcion: "noasdpoina sdoinasoid aiosbdo ais dioa sd oiabsdoi as doibaoisbd aios doa sdas",
        precio: 9000,
        imagen: img1
    },
    {
        id: "adohads",
        nombre: "Cerveza Lager",
        descripcion: "asdaev aedve deadeav ais dioa sd oiabsdoi as doibaoisbd aios doa sdas",
        precio: 7000,
        imagen: img2
    },
    {
        id: "naosdn2",
        nombre: "Cerveza Golden Ale",
        descripcion: "asdaev aedve deadeav ais dioa sd oiabsdoi as doibaoisbd aios doa sdas",
        precio: 5000,
        imagen: img3
    },
    {
        id: "xftebdids",
        nombre: "pilsen",
        descripcion: "vndvjdevettwauwibdjkvdgnjdxvndjvdfjg fdgfd",
        precio: 5500,
        imagen: img4
    },
    {
        id: "asdasd",
        nombre: "like morazul",
        descripcion: "sdaf3u id fdgfd",
        precio: 7000,
        imagen: img5
    }])
    const [carrito, setCarrito]= useState([])

    const handleTheme= ()=>{ 
        setTheme((prev)=> (prev == "light"?"dark":"light"))    
    }
    return (
        <Shopcntx.Provider value={{
            productos,
            carrito,
            setCarrito
        }}>
            {children}
        </Shopcntx.Provider>
    )
}

export const useShopContext = () =>useContext(Shopcntx)