// Next imports
import { useContext } from 'react';

// Local imports
import { ActiveContentContext, ActiveTabContext, SectionsContext } from '../../site';

// Third party imports
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCards, Navigation, Pagination } from 'swiper/modules';

export function EditableService1({ section, sectionInd}) {
    const {_activeTab, setActiveTab } = useContext(ActiveTabContext);
    const { activeSectionInd, setActiveSectionInd } = useContext(ActiveContentContext);
    const { _sections, _setSections, deleteSection } = useContext(SectionsContext);

    const openContentTabEditor = () => {
        setActiveTab("content");
        setActiveSectionInd(sectionInd);
    }

    return (
        <section className="group">
            <button className="btn z-40 bg-blue-700 border-none hover:bg-blue-900 mt-[-30px] absolute right-0 mr-7 hidden group-hover:block" onClick={()=>document.getElementById(`delete_modal_${section.id}`).showModal()}><i className="fa-solid fa-trash text-lg text-white p-0"></i></button>
            <dialog id={`delete_modal_${section.id}`} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete Section!</h3>
                    <p className="py-4">Are you sure you want to delete this {section.sectionType} section?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="btn mr-4 bg-blue-700 hover:bg-blue-900 duration-200 text-white" onClick={() => deleteSection(section)}>Yes</button>
                            <button className="btn bg-red-700 hover:bg-red-900 duration-200 text-white">No</button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div className={`border-4 ${activeSectionInd === sectionInd ? "border-blue-700" : "border-transparent"} group-hover:border-blue-700 duration-200`} onClick={openContentTabEditor}>
                <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
                    <div className="flex flex-col items-center">
                        <div className="mb-8 md:mb-12 lg:mb-16">
                            <div className="w-full max-w-[800px] text-center">
                            <h2 className="font-bold text-5xl md:text-7xl mb-10">{section.heading}</h2>
                            <div className="mx-auto w-full max-w-lg mb-16">
                                <p className="tracking-[0.2px] text-slate-700">{section.description}</p>
                            </div>
                                <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                navigation={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[EffectCards, Navigation, Pagination]}
                                className="w-[300px] sm:w-[455px] h-full"
                                >
                                    {section.services.map(service =>
                                        <SwiperSlide key={service.id} className='flex items-center justify-center rounded-lg'>
                                            <div className="card w-[295px] sm:w-[450px] bg-white border border-slate-300 dark:border-blue-400 shadow-lg text-center">
                                                <div className="card-body items-center">
                                                    <div className="inline-flex justify-center items-center w-20 h-20 bg-transparent rounded-full text-black border-2 border-black border-solid mr-6 mb-7 ml-0 text-5xl no-underline">
                                                        <i className={`${service.icon}`}></i>
                                                    </div>
                                                    <h3 className="my-0 px-2 sm:px-5 text-3xl">{service.title}</h3>
                                                    <h2 className="mb-2 px-2 sm:px-5 text-xl">{service.price}</h2>
                                                    <article className="px-2 sm:px-5 mb-10" dangerouslySetInnerHTML={{ __html: service.content }}></article>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}