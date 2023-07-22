'use client';

import { useState, useEffect} from "react";
import Image from "next/image";
import TextEditor from "../TextEditor";
import IconPicker from "../IconPicker";

export default function ContentEditor({content, profileRef, aboutMeRef, skillsRef, experienceRef, servicesRef}) {
    const [site, setSite] = useState(content);
    
    /*** Profile section ***/ 
    const [profile, setProfile] = useState(content.sections[0]);
    const [profilePicFile, setProfilePicFile] = useState(null);
    const [profilePicPreview, setProfilePicPreview] = useState(null);

    /*** About me section ***/
    const [aboutMe, setAboutMe] = useState(content.sections[1]);
    const [extraInfo, setExtraInfo] = useState(content.sections[1].extraInfo);

    /*** Skills section ***/
    const [skills, setSkills] = useState(content.sections[2]);
    const [skillsList, setSkillsList] = useState(content.sections[2].skills);

    /***  Experience section ***/
    const [experience, setExperience] = useState(content.sections[3]);
    const [experienceList, setExperienceList] = useState(content.sections[3].experiences);

    /*** Services section ***/
    const [services, setServices] = useState(content.sections[4]);
    const [servicesList, setServicesList] = useState(content.sections[4].services);

    // Preview profile picture
    useEffect(() => {
        let fileReader = false;
        if (profilePicFile) {
          fileReader = new FileReader();
          fileReader.onload = (e) => {
            const { result } = e.target;
            if (result) {
              setProfilePicPreview(result);
            }
          }
          fileReader.readAsDataURL(profilePicFile);
        }
        return () => {
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        }
    }, [profilePicFile]);

    // Upload new profile picture for review or change
    const uploadProfilePic = e => {
        setProfilePicFile(e.target.files[0]);
    }

    // Remove extra info item
    const removeExtraInfo = index => {
        setExtraInfo(prevExtraInfo => prevExtraInfo.filter((_, prevIndex) => prevIndex !== index));
        aboutMeRef.current.splice(2 + 2*index, 2);
    }

    const removeSkill = index => {
        setSkillsList(prevSkillsList => prevSkillsList.filter((_, prevIndex) => prevIndex !== index));
        skillsRef.current['skills'].splice(2*index, 2);
    }

    const removeExperience = index => {
        setExperienceList(prevExperienceList => prevExperienceList.filter((_, prevIndex) => prevIndex !== index));
        experienceRef.current['experiences'].splice(index, 1);
    }

    const removeService = index => {
        setServicesList(prevServicesList => prevServicesList.filter((_, prevIndex) => prevIndex !== index));
        servicesRef.current['services'].splice(index, 1);
    }

    return (
        <div className="min-h-screen">
            <div className="px-20 py-10 prose max-w-none">
                <h1>Site editor</h1>
                
                {/* Basic profile */}
                <div className="collapse collapse-arrow border border-slate-300">
                    <input type="radio" name="my-accordion-2" defaultChecked /> 
                    <div className="collapse-title text-xl font-medium bg-white shadow-lg">
                        Basic profile
                    </div>
                    <div className="collapse-content bg-white">
                        <div className="py-3">
                            <div>Profile picture:</div>
                            <Image 
                            src={profilePicPreview ? profilePicPreview : profile.profilePic} 
                            alt="Profile picture" 
                            width={250} 
                            height={250} 
                            style={{objectFit: "contain"}}/>
                            <input ref={el => (profileRef.current[6] = el)} type="file" className="file-input file-input-bordered file-input-sm file-input-primary w-full max-w-xs" onChange={uploadProfilePic}/>
                            <label className="label text-xs">
                                <span><strong>Hint: </strong>Upload a new picture will <strong>immediately</strong> replace the current picture</span>
                            </label>
                            <div className="flex flex-row gap-3 flex-wrap mt-4">
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Full name:</span>
                                    </label>
                                    <input ref={el => (profileRef.current[0] = el)} type="text" placeholder="Your full name" className="input border-black w-full" defaultValue={profile.fullName} />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Job:</span>
                                    </label>
                                    <input ref={el => (profileRef.current[1] = el)} type="text" placeholder="Your job title" className="input border-black w-full" defaultValue={profile.job} />
                                </div>
                                <div className="flex flex-row flex-wrap gap-x-3">
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Link 1 text:</span>
                                        </label>
                                        <input ref={el => (profileRef.current[2] = el)} type="text" placeholder="Title of link 1" className="input border-black w-full" defaultValue={profile.link1[0]} />
                                        <label className="label text-xs">
                                            <span><strong>Hint: </strong>Describe the link you want users to click on (e.g. social media)</span>
                                        </label>
                                    </div>
                                
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Link 1 URL:</span>
                                        </label>
                                        <input ref={el => (profileRef.current[3] = el)} type="url" placeholder="URL of link 1" className="input border-black w-full" defaultValue={profile.link1[1]} />
                                        <label className="label text-xs">
                                            <span><strong>Hint: </strong>The actual URL you want user to visit (e.g. facebook.com)</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap gap-x-3">
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Link 2 text:</span>
                                        </label>
                                        <input ref={el => (profileRef.current[4] = el)} type="text" placeholder="Title of link 2" className="input border-black w-full" defaultValue={profile.link2[0]} />
                                        <label className="label text-xs">
                                            <span><strong>Hint: </strong>Describe the link you want users to click on (e.g. social media)</span>
                                        </label>
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Link 2 URL:</span>
                                        </label>
                                        <input ref={el => (profileRef.current[5] = el)} type="url" placeholder="URL of link 2" className="input border-black w-full" defaultValue={profile.link2[1]} />
                                        <label className="label text-xs">
                                            <span><strong>Hint: </strong>The actual URL you want user to visit (e.g. facebook.com)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About me */}
                <div className="collapse collapse-arrow border border-slate-300">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium bg-white shadow-lg">
                        {aboutMe.heading}
                    </div>
                    <div className="collapse-content bg-white">
                        <div className="py-3">
                            <div className="flex flex-row gap-3 flex-wrap mt-4">
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Section heading  (recommend &apos;About me&apos;):</span>
                                    </label>
                                    <input ref={el => (aboutMeRef.current[0] = el)} type="text" placeholder="Section heading (recommend 'About me')" className="input border-black w-full" defaultValue={aboutMe.heading} />
                                </div>
                                <div className="form-control w-full max-w-2xl">
                                    <label className="label">
                                        <span className="label-text">Bio:</span>
                                    </label>
                                    <textarea ref={el => (aboutMeRef.current[1] = el)} type="text" rows="5" placeholder="Your bio" className="textarea border-black w-full" defaultValue={aboutMe.bio} />
                                </div>
                                <div className="form-control mt-2">
                                    <label className="label">
                                        <span className="label-text">Extra information (e.g. age, hobbies, etc):</span>
                                    </label>
                                    {extraInfo.map((info, index) => (
                                    <div key={info.key !== 'Info name' ? info.key : index} className="mt-2">
                                        <label className="label">
                                            <span className="label-text">Info name/value:</span>
                                        </label>
                                        <div className="flex flex-row gap-x-2">
                                            <div className="join max-w-xl w-full">
                                                <input ref={el => (aboutMeRef.current[2 + 2*index] = el)} type="text" placeholder="Info name" className="input border-black w-full join-item" defaultValue={info.key} />
                                                <input ref={el => (aboutMeRef.current[2 + 2*index + 1] = el)} type="text" placeholder="Info value" className="input border-black w-full join-item" defaultValue={info.value} />
                                            </div>
                                            <i className="fa-solid fa-trash text-xl text-slate-300 hover:text-slate-700 duration-300 cursor-default my-auto ms-2" onClick={() => removeExtraInfo(index)}></i>
                                        </div>
                                    </div>
                                    ))}
                                    <div className="text-md text-slate-300 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => {setExtraInfo([...extraInfo, {key: 'Info name', value: 'Info value'}])}}><i className="fa-solid fa-plus me-2"></i>Add info</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="collapse collapse-arrow border border-slate-300">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium bg-white shadow-lg">
                        {skills.heading}
                    </div>
                    <div className="collapse-content bg-white">
                        <div className="py-3">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Section heading  (recommend &apos;Skills&apos;):</span>
                                </label>
                                <input ref={el => (skillsRef.current['heading'] = el)} type="text" placeholder="Section heading (recommend 'Skills')" className="input border-black w-full" defaultValue={skills.heading} />
                            </div>
                            <div className="form-control mt-2 max-w-lg">
                                {skillsList.map((skill, index) => (
                                <div key={skill.key !== 'Blank skill' ? skill.key : index} className="mt-2 w-full">
                                    <label className="label">
                                        <span className="label-text">Skill name/value (between 0 and 100):</span>
                                    </label>
                                    <div className="flex flex-row gap-x-2">
                                        <div className="join max-w-xl w-full">
                                            <input ref={el => (skillsRef.current['skills'][2*index] = el)} type="text" placeholder="Skill name" className="input border-black w-full join-item" defaultValue={skill.key} />
                                            <input ref={el => (skillsRef.current['skills'][2*index + 1] = el)} type="number" min={0} max={100} placeholder="Skill value" className="input border-black w-full join-item" defaultValue={skill.value} />
                                        </div>
                                        <i className="fa-solid fa-trash text-xl text-slate-300 hover:text-slate-700 duration-300 cursor-default my-auto ms-2" onClick={() => removeSkill(index)}></i>
                                    </div>
                                </div>
                                ))}
                                <div className="text-md text-slate-300 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => {setSkillsList([...skillsList, {key: 'Blank skill', value: 50}])}}><i className="fa-solid fa-plus me-2"></i>Add skill</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience */}
                <div className="collapse collapse-arrow border border-slate-300">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium bg-white shadow-lg">
                        {experience.heading}
                    </div>
                    <div className="collapse-content bg-white">
                        <div className="py-3">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Section heading  (recommend &apos;Experiences&apos;):</span>
                                </label>
                                <input ref={el => (experienceRef.current['heading'] = el)} type="text" placeholder="Section heading (recommend 'Experience')" className="input border-black w-full" defaultValue={experience.heading} />
                            </div>
                            <div className="font-semibold mt-8">Experience list:</div>
                            <div className="form-control max-w-lg">
                                {experienceList.map((exp, index) => (
                                <div key={`${exp.jobTitle}-${exp.startYear}-${exp.endYear}-${index}`} className={`${index === 0 ? '' : 'mt-8'} w-full`}>
                                    <label className="label">
                                        <span className="label-text">Job title:</span>
                                        <span className="text-md text-slate-300 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => removeExperience(index)}><i className="fa-solid fa-trash me-2"></i>Remove experience</span>
                                    </label>
                                    <input 
                                    ref={el => {experienceRef.current['experiences'][index] = experienceRef.current['experiences'][index] ? experienceRef.current['experiences'][index] : {}; experienceRef.current['experiences'][index]['jobTitle'] = el}}
                                    type="text" 
                                    placeholder="Your job title" 
                                    className="input border-black w-full" 
                                    defaultValue={exp.jobTitle} />
                                    <label className="label">
                                        <span className="label-text">Company:</span>
                                    </label>
                                    <input 
                                    ref={el => {experienceRef.current['experiences'][index] = experienceRef.current['experiences'][index] ? experienceRef.current['experiences'][index] : {}; experienceRef.current['experiences'][index]['company'] = el}}
                                    type="text" 
                                    placeholder="Company name" 
                                    className="input border-black w-full" 
                                    defaultValue={exp.company} />
                                    <label className="label">
                                        <span className="label-text">Start year / End year:</span>
                                    </label>
                                    <div className="join max-w-xl w-full">
                                        <input ref={el => {experienceRef.current['experiences'][index] = experienceRef.current['experiences'][index] ? experienceRef.current['experiences'][index] : {}; experienceRef.current['experiences'][index]['startYear'] = el}} type="number" placeholder="Start year" className="input border-black w-full join-item" defaultValue={exp.startYear} />
                                        <input ref={el => {experienceRef.current['experiences'][index] = experienceRef.current['experiences'][index] ? experienceRef.current['experiences'][index] : {}; experienceRef.current['experiences'][index]['endYear'] = el}} type="number" placeholder="End year" className="input border-black w-full join-item" defaultValue={exp.endYear} />
                                    </div>
                                    <label className="label text-xs">
                                        <span><strong>Hint: </strong>Leave the end year <strong>blank</strong> or <strong>0</strong> if you are still working at the company</span>
                                    </label>
                                    <label className="label">
                                        <span className="label-text">Description:</span>
                                    </label>
                                    <TextEditor 
                                    paramRef={el => {experienceRef.current['experiences'][index] = experienceRef.current['experiences'][index] ? experienceRef.current['experiences'][index] : {}; experienceRef.current['experiences'][index]['description'] = el}}
                                    defaultValue={exp.description}/>
                                </div>
                                ))}
                                <div className="text-md text-slate-300 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => {setExperienceList([...experienceList, {jobTitle: 'Some position', company: 'Company A', startYear: 2020, endYear: 2023, description: 'I was in charge of meeting with clients, gathering user requirements for our products, etc'}])}}><i className="fa-solid fa-plus me-2"></i>Add experience</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services */}
                <div className="collapse collapse-arrow border border-slate-300">
                    <input type="radio" name="my-accordion-2" /> 
                    <div className="collapse-title text-xl font-medium bg-white shadow-lg">
                        {services.heading}
                    </div>
                    <div className="collapse-content bg-white">
                        <div className="py-3">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Section heading  (recommend &apos;Services&apos;):</span>
                                </label>
                                <input ref={el => (servicesRef.current['heading'] = el)} type="text" placeholder="Section heading (recommend 'Experience')" className="input border-black w-full" defaultValue={services.heading} />
                            </div>
                            <div className="font-semibold mt-8">Service list:</div>
                            <div className="form-control max-w-lg">
                                {servicesList.map((svc, index) => (
                                <div key={`${svc.title}-${index}`} className={`${index === 0 ? '' : 'mt-12'} w-full`}>
                                    <label className="label">
                                        <span className="label-text">Service name:</span>
                                        <span className="text-md text-slate-300 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => removeService(index)}><i className="fa-solid fa-trash me-2"></i>Remove service</span>
                                    </label>
                                    <input 
                                    ref={el => {servicesRef.current['services'][index] = servicesRef.current['services'][index] ? servicesRef.current['services'][index] : {}; servicesRef.current['services'][index]['title'] = el}}
                                    type="text" 
                                    placeholder="e.g. Web design" 
                                    className="input border-black w-full" 
                                    defaultValue={svc.title} />

                                    <label className="label mt-2">
                                        <span className="label-text">Service icon:</span>
                                    </label>
                                    <IconPicker 
                                    selectedIcon={svc.icon} 
                                    id={`${svc.title}-${index}`} 
                                    iconRef={el => {servicesRef.current['services'][index] = servicesRef.current['services'][index] ? servicesRef.current['services'][index] : {}; servicesRef.current['services'][index]['icon'] = el}}/>
                                    
                                    <label className="label mt-2">
                                        <span className="label-text">Service description:</span>
                                    </label>
                                    <TextEditor 
                                    paramRef={el => {servicesRef.current['services'][index] = servicesRef.current['services'][index] ? servicesRef.current['services'][index] : {}; servicesRef.current['services'][index]['description'] = el}}
                                    defaultValue={svc.description}
                                    placeholder="e.g. I will help you build a 6-sections professional landing page to attract more customers."
                                    />
                                </div>
                                ))}
                                
                                <div className="text-md text-slate-300 hover:text-slate-700 duration-300 mt-2 cursor-default w-fit" onClick={() => {setServicesList([...servicesList, {title: 'Service name', icon: 'fas fa-laptop', description: 'Provide a short description for your service here.'}])}}><i className="fa-solid fa-plus me-2"></i>Add service</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}