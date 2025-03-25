import React from 'react'
import {watchModels} from "../data/index.js";

const Watch = () => {
    return (
        <div className={`flex flex-col items-center justify-around bg-white h-full py-8 px-8`}>
            <h1 className={`2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 mb-8`}>
                Which Apple Watch is right for you?
            </h1>
            <div className={`w-full flex justify-around`}>
                {watchModels.map((watchModel) => (
                    <div className={`w-60 h-[430px] flex flex-col justify-around group`}>

                        <div key={Math.random()} className={`w-full h-64 mb-4 overflow-hidden relative`}>
                            <img
                                src={watchModel.imgs[0]}
                                alt={watchModel.name}
                                className={`absolute w-full h-full object-contain opacity-100 group-hover:opacity-0 transition duration-300]`}
                            />
                            <img
                                src={watchModel.imgs[1]}
                                alt={watchModel.name}
                                className={`absolute w-full h-full object-contain opacity-0 group-hover:opacity-100 transition duration-300]`}
                            />
                        </div>
                        <h3 className={`2xl:text-xl xl:text-lg text-sm font-semibold`}>
                            {watchModel.name}
                        </h3>
                        <a
                            href={"#"}
                            className={`my-2 text-base text-blue-400`}
                        >
                            From {watchModel.price}
                        </a>
                        <div className={`md:text-sm text-xs text-gray-700 my-2`}>
                            {watchModel.desc.map((item) => (
                                <span key={Math.random()} className={`block`}>{item}</span>
                            ))}
                        </div>
                        <button className={`w-min text-sm mt-4 p-1.5 bg-blue-400 rounded-full text-white`}>
                            Shop
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Watch
