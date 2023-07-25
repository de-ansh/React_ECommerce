import React from "react";

const HomeSectionCard = () => {
    return (
        <div className="group/item hover:bg-slate-100 cursor-pointer flex flex-col items-center bg-white  rounded-large shadow-lg space-y-3 
        overflow-hidden w-[15rem] mx-auto  rounded-lg p-6 border border-black" >

            <div className="h-[13rem] w-[10rem] " >

                <img className="object-cover object-top w-full h- full"
                    src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70" />
            </div>

            <div className="p-4">
                <h3 className="text-lg font-medium  text-grey-900">WOXEN</h3>
                <p className="mt-2  text-sm  text-gray-500">Women Kurta and Pant Set Art Silk</p>

            </div>

        </div>
    )
}

export default HomeSectionCard