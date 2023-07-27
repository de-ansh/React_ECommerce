import React from "react"
import "./ProductCard.css"
const ProductCard=()=>{
    return (
        <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
           <div className="h-[20rem]">
           <img className="h-full w-full object-cover  object-left-top" src="https://rukminim1.flixcart.com/image/612/612/xif0q/sari/v/p/3/free-prathna-om-vastra-fab-unstitched-original-imaghmwuprfjubfn.jpeg?q=70" alt="" />
           </div>

           <div className="textpart bg-white p-3 ">
            <div>
                <p className="font-bold opaxity-60">PRATHAM BLUE</p>
                <p className="">Embroidered Bollywood Georgette Saree</p>
            </div>

            <div className='flex item-center space-x-2'>
                <p className="font-bold"> ₹789</p>
                <p className="line-through opacity-50">₹3,999</p>
                <p className="text-green-600 font-semibold"> 80% off</p>
            </div>

           </div>
        </div>
    )
}

export default ProductCard