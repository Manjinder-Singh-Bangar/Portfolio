import React, {useState} from 'react'
import mailIconSvgSrc from "../../public/assets/Icons/mail-icon.svg"
import telephoneIconSvgSrc from "../../public/assets/Icons/telephone-icon.svg"
import arrowFilledSvgSrc from "../../public/assets/Icons/filled-arrow.svg"


const ContactMe = () => {
    const [isContactOpened, setIsContactOpened] = useState(false);
  return (
    <section className='text-[#607B96]'>
      <div>
        <div className={` ${isContactOpened ? "pb-6 h-fit gap-3  border-b-[1px]" : "h-fit gap-0 border-b-0 p-0"} transition-all flex-col h-fit flex border-[#1E2D3D]`}>
          <button onClick={() => setIsContactOpened((prev) => !prev)} className={`flex transition-all bg-[#011627] gap-3 z-10 text-[18px] ${isContactOpened ? "text-white" : ""} w-full px-6 py-3 border-b-[1px] border-[#1E2D3D]`}><img className={`${isContactOpened ? "rotate-0" : "rotate-[-90deg]"}`} src={arrowFilledSvgSrc} alt="" />contacts</button>
          <div className={`flex transition-all gap-3 text-[16px] relative ${isContactOpened ? "top-[0]  opacity-1 h-fit" : "p-0 opacity-0 z-[-1] top-[-100px] h-0"} flex-col`}>
            <button className='flex gap-3 px-6'><img src={mailIconSvgSrc} alt="" /> manjinder@manjindersingh.ca</button>
            <button className='flex gap-3 px-6'><img src={telephoneIconSvgSrc} alt="" /> +1 437 661 5014</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMe