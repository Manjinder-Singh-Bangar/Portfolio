import React, { useEffect, useState } from 'react'
import bioSvgSrc from "../../public/assets/Icons/Bio-icon.svg"
import arrowFilledSvgSrc from "../../public/assets/Icons/filled-arrow.svg"
import interestSvgSrc from "../../public/assets/Icons/Interest-icon.svg"
import arrowOutLineSvgSrc from "../../public/assets/Icons/outline-arrow.svg"
import fileIconSvgSrc from "../../public/assets/Icons/file-icon.svg"
import educationSvgSrc from "../../public/assets/Icons/education-icon.svg"
import ReadMe from '../Components/ReadMe.jsx'
import gsap from 'gsap'
import { aboutMe, collegeInfo, hobbies, schoolInfo } from '../utils/About-data.js'
import CodeSnippet from '../Components/CodeSnippet.jsx'
import { linkContent } from '../../public/assets/Data/about'
import mailIconSvgSrc from "../../public/assets/Icons/mail-icon.svg"
import telephoneIconSvgSrc from "../../public/assets/Icons/telephone-icon.svg"


const About = () => {
    const codeString = `import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
    
const ProtectedRoute = () => {
    const auth = useSelector( (state) => state.auth )
    console.log("auth from protected route ", auth)
    const location = useLocation();

    return (
        auth?.accessToken
            ? <Outlet />
            : <Navigate to="/signin"/>
    );
}
export default ProtectedRoute;`
    const [isPersonalInfoOpened, setIsPersonalInfoOpened] = useState(true);
    const [isContactOpened, setIsContactOpened] = useState(false);
    const [isBioOpened, setIsBioOpened] = useState(true)
    const [isInterestOpened, setIsInterestOpened] = useState(false)
    const [isEducationOpened, setIsEducationOpened] = useState(false);
    const [fileViewer, setFileViewer] = useState({
        aboutMe: false,
        hobbies: false,
        schoolInfo: false,
        collegeInfo: false
    })
    const [arrayToMapForContent, setArrayToMapForContent] = useState(collegeInfo)
    const [fileOppened, setFileOpened] = useState("college.md")

    useEffect(() =>{
        gsap.set(".line", { opacity: 0 });
        gsap.to(".line",{
            opacity: 1,
            color: "white",
            stagger: 0.3,
            ease: "power1.in"
        })
    },[arrayToMapForContent])

    const toggleHandlerForFileViewing = (key) => {
        setFileViewer((prev) => {
            const updatedFileViewer = {};

            // Loop through the previous state and set all keys to false
            for (const k in prev) {
                updatedFileViewer[k] = false;
            }

            // Set the selected key to true
            updatedFileViewer[key] = true;

            return updatedFileViewer;
        });
    }

    useEffect(() => {
        for (let key in fileViewer) {
            if (fileViewer[key]) {
                
                switch (key) {
                    case "aboutMe":
                        setFileOpened("about-me.md")
                        setArrayToMapForContent(aboutMe);
                        break;
                    case "hobbies":
                        setFileOpened("hobbies.md")
                        setArrayToMapForContent(hobbies);
                        break;
                    case "schoolInfo":
                        setFileOpened("school.md")
                        setArrayToMapForContent(schoolInfo);
                        break;
                    case "collegeInfo":
                        setFileOpened("college.md")
                        setArrayToMapForContent(collegeInfo);
                        break;
                    default:
                        setArrayToMapForContent([]); // If no valid key, set to empty array
                }
            }
        }
    }, [fileViewer])

    useEffect(() => {
        gsap.to("#codeSnippet", {
            opacity: 1,
            duration: 1.5,
            ease: "power1.inOut"

        })
    }, [])

    return (
        <section className='h-[calc(100vh-104.2px)] overflow-x-hidden flex w-full text-[#607B96]'>
            <div className='border-r-[1px] min-w-[265px] sticky top-0 box-border border-[#1E2D3D] max-w-[50%] h-full'>
                <div className={` ${isPersonalInfoOpened ? "pb-6  gap-3 border-b-[1px]" : " gap-0 border-b-0 p-0"} transition-all flex-col h-fit flex border-[#1E2D3D]`}>
                    <button onClick={() => setIsPersonalInfoOpened((prev) => !prev)} className={`flex ${isPersonalInfoOpened ? "text-white" : ""} transition-all bg-[#011627] gap-3 z-10 text-[18px] w-full px-6 py-3 border-b-[1px] border-[#1E2D3D]`}><img className={`${isPersonalInfoOpened ? "rotate-0" : "rotate-[-90deg]"}`} src={arrowFilledSvgSrc} alt="" />personal-info</button>
                    <div className={`flex transition-all text-[16px] relative ${isPersonalInfoOpened ? "top-[0] opacity-1 z-0 h-fit" : "p-0 opacity-0 top-[-100px] h-0"} flex-col`}>
                        <button onClick={() => setIsBioOpened((prev) => !prev)} className={`flex gap-3 ${isBioOpened ? "text-white" : ""} px-6`}><img className={isBioOpened ? "rotate-[90deg]" : "rotate-0"} src={arrowOutLineSvgSrc} alt="" /><img src={bioSvgSrc} alt="" /> bio</button>
                        <div className={`${isBioOpened ? "h-fit top-0 py-1 " : "h-0 z-[-1] py-0 opacity-0 top-[-100px] "} ml-[20px] px-3 relative transition-all`}>
                            <button onClick={() => toggleHandlerForFileViewing("aboutMe")} className='w-full flex  gap-2 px-3'><img src={fileIconSvgSrc} alt="" />about-me.md</button>
                        </div>
                        <button onClick={() => setIsInterestOpened((prev) => !prev)} className={`flex p gap-3 ${isInterestOpened ? "text-white" : ""} px-6`}><img className={isInterestOpened ? "rotate-[90deg]" : "rotate-0"} src={arrowOutLineSvgSrc} alt="" /><img src={interestSvgSrc} alt="" /> interests</button>
                        <div className={`${isInterestOpened ? " h-fit top-0 py-1 " : "h-0 z-[-1] py-0 opacity-0 top-[-100px] "} ml-[20px] px-3 relative transition-all`}>
                            <button onClick={() => toggleHandlerForFileViewing("hobbies")} className={`w-full flex  gap-2 px-3`}><img src={fileIconSvgSrc} alt="" />hobbies.md</button>
                        </div>

                        <button onClick={() => setIsEducationOpened((prev) => !prev)} className={`flex p gap-3 ${isEducationOpened ? "text-white" : ""} px-6`}><img className={isEducationOpened ? "rotate-[90deg]" : "rotate-0"} src={arrowOutLineSvgSrc} alt="" /><img src={educationSvgSrc} alt="" /> education</button>
                        <div className={`${isEducationOpened ? " h-fit top-0 py-1 " : "h-0 z-[-1] py-0 opacity-0 top-[-100px] "} ml-[20px] px-3 relative transition-all`}>
                            <button onClick={() => toggleHandlerForFileViewing("schoolInfo")} className={`w-full flex  gap-2 px-3`}><img src={fileIconSvgSrc} alt="" />school.md</button>
                            <button onClick={() => toggleHandlerForFileViewing("collegeInfo")} className={`w-full flex  gap-2 px-3`}><img src={fileIconSvgSrc} alt="" />college.md</button>
                        </div>

                    </div>
                </div>
                <div className={` ${isContactOpened ? "pb-6 h-fit gap-3  border-b-[1px]" : "h-fit gap-0 border-b-0 p-0"} transition-all flex-col h-fit flex border-[#1E2D3D]`}>
                    <button onClick={() => setIsContactOpened((prev) => !prev)} className={`flex transition-all bg-[#011627] gap-3 z-10 text-[18px] ${isContactOpened ? "text-white" : ""} w-full px-6 py-3 border-b-[1px] border-[#1E2D3D]`}><img className={`${isContactOpened ? "rotate-0" : "rotate-[-90deg]"}`} src={arrowFilledSvgSrc} alt="" />contacts</button>
                    <div className={`flex transition-all gap-3 text-[16px] relative ${isContactOpened ? "top-[0]  opacity-1 h-fit" : "p-0 opacity-0 z-[-1] top-[-100px] h-0"} flex-col`}>
                        <button className='flex gap-3 px-6'><img src={mailIconSvgSrc} alt="" /> manjinder@manjindersingh.ca</button>
                        <button className='flex gap-3 px-6'><img src={telephoneIconSvgSrc} alt="" /> +1 437 661 5014</button>
                    </div>
                </div>

            </div>

            <div className='min-w-[50%]  h-full'>
                <div className='sticky top-0 bg-[#011627]/70 backdrop-blur-md'>
                    <div className='w-full flex border-b-[1px]  border-[#1E2D3D]'>
                        <button className='flex text-[18px] w-fit border-r-[1px] gap-3 p-3 border-[#1E2D3D]'>{fileOppened} </button>
                    </div>
                </div>
                <div className='p-12 h-[calc(100vh - 156px)]'>
                    <ReadMe arrayToView={arrayToMapForContent} fileToView={fileViewer} />
                </div>
            </div>

            <div id='codeSnippet' className=' border-l-[1px] border-[#1E2D3D] h-full sticky top-0 opacity-0 flex-1 flex flex-col items-center'>
                <div className='p-[25.5px] box-border w-full border-b-[1px] border-[#1E2D3D]'></div>
                <CodeSnippet codeString={codeString} linkContent={linkContent} />
            </div>
        </section>
    )
}



export default About