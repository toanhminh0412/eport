'use client';

// Next imports
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';

// Third party imports
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

export default function ContentTabAddDeleteImage({ content, addImage, deleteImage }) {
    return (
        <div>
            <Swiper
            effect={'flip'}
            grabCursor={true}
            pagination={true}
            navigation={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="w-[300px] h-[300px] p-[50px]"
            >
                {content.images.map((image, imageInd) => (
                    <SwiperSlide key={imageInd} className="bg-center">
                        <Image src={image} className="block w-[300px] h-[200px]" width={300} height={300} style={{objectFit: "contain"}}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button className="btn my-5" onClick={()=>document.getElementById(content.id).showModal()}>Open Image Modal</button>
            <dialog id={content.id} className="modal">
                <div className="modal-box w-11/12 max-w-5xl overflow-auto">
                    <h1 className="font-bold text-lg">Project Image</h1>
                    <div className="flex flex-row flex-wrap gap-6 not-prose justify-center">
                        {content.images.map((image, imageInd) => (
                            <div key={`${image}-${imageInd}`} className="relative border border-slate-300 dark:border-slate-500">
                                <i className="fa-solid fa-xmark p-2 bg-white dark:bg-slate-500 hover:bg-slate-400 dark:hover:bg-slate-700 duration-300 text-black dark:text-slate-100 rounded-full absolute top-[-10px] right-[-10px] border border-slate-600" onClick={e => deleteImage(e, imageInd)}></i>
                                <Image
                                data-src={image}
                                src={image} 
                                alt="Project image" 
                                width={300}
                                height={200} 
                                style={{objectFit: "cover"}} 
                                className="w-[250px] xs:w-[300px] h-[200px]"/>
                            </div>
                        ))}
                        <div className="w-[250px] xs:w-[300px] h-[200px] bg-slate-200 hover:bg-slate-400 dark:bg-slate-400 dark:hover:bg-slate-600 duration-300 text-center flex flex-col justify-center relative">
                            <div className="text-center dark:text-slate-200"><i className="fa-solid fa-plus text-black dark:text-slate-100 text-2xl me-2 my-auto"></i><span className="text-xl">Add image</span></div>
                            <input type="file" accept="image/*" className="absolute top-0 left-0 w-full h-full opacity-0" onChange={addImage}/>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}