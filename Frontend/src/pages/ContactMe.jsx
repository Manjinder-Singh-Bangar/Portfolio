import React, {useEffect, useState} from 'react'
import mailIconSvgSrc from "../../public/assets/Icons/mail-icon.svg"
import telephoneIconSvgSrc from "../../public/assets/Icons/telephone-icon.svg"
import arrowFilledSvgSrc from "../../public/assets/Icons/filled-arrow.svg"
import ContactCodeSnippet from '../Components/ContactCodeSnippet'


const ContactMe = () => {
  const [nameInputVal, setNameInputVal] = useState("")
  const [emailInputVal, setEmailInputVal] = useState("")
  const [messageInputVal, setMessageInputVal] = useState("")
  const [isContactOpened, setIsContactOpened] = useState(false);
  const [date, setDate] = useState("")

  useEffect(() => {
    const todaysDate = new Date().toDateString()
    console.log(typeof todaysDate)
    const splitLetters = todaysDate.split(" ")

    const fewWords = splitLetters.slice(0, 4).join(" ")
    setDate(fewWords)
  },[])
  
  return (
    <section className='text-[#607B96] flex lg:flex-row xs:flex-col w-full h-[calc(100vh-104.2px)]'>
      <div className='min-w-[300px] xs:flex-none lg:flex-[0.6] '>
        <div className={` ${isContactOpened ? "pb-6 h-fit gap-3  border-b-[1px]" : "h-fit gap-0 border-b-0 p-0"} transition-all flex-col h-fit flex border-[#1E2D3D]`}>
          <button onClick={() => setIsContactOpened((prev) => !prev)} className={`flex transition-all bg-[#011627] gap-3 z-10 text-[18px] ${isContactOpened ? "text-white" : ""} w-full px-6 py-3 border-b-[1px] border-[#1E2D3D]`}><img className={`${isContactOpened ? "rotate-0" : "rotate-[-90deg]"}`} src={arrowFilledSvgSrc} alt="" />contacts</button>
          <div className={`flex transition-all gap-3 text-[16px] relative ${isContactOpened ? "top-[0]  opacity-1 h-fit" : "p-0 opacity-0 z-[-1] top-[-100px] h-0"} flex-col`}>
            <button className='flex gap-3 w-full text-[14px] px-6'><img src={mailIconSvgSrc} alt="" /> manjinder@manjindersingh.ca</button>
            <button className='flex gap-3 text-[14px] px-6'><img src={telephoneIconSvgSrc} alt="" /> +1 437 661 5014</button>
          </div>
        </div>
      </div>

      <div className='lg:h-full xs:h-fit w-full flex flex-col flex-1 text-[#607B96] border-l-[1px] border-[#1E2D3D]'>
        <div className='w-full h-[51.8px] border-b-[1px] border-[#1E2D3D]'></div>
        <div className=' flex p-6 relative top-[65px] items-center'>
          <form className='flex gap-5 min-w-fit w-full flex-col' action="">
            <div className='flex gap-3 w-full flex-col'>
              <label htmlFor="">_name</label>
              <input onChange={(e) => setNameInputVal(e.target.value)} className='bg-[#011221] w-full p-2 rounded-md' type="text" />
            </div>
            <div className='flex gap-3 w-full flex-col'>
              <label htmlFor="">_email</label>
              <input onChange={(e) => setEmailInputVal(e.target.value)} className='bg-[#011221] w-full p-2 rounded-md' type="email" />
            </div>
            <div className='flex gap-3 w-full flex-col'>
              <label htmlFor="">_message</label>
              <textarea onChange={(e) => setMessageInputVal(e.target.value)} className='bg-[#011221] max-h-[200px] min-h-[100px] p-2 rounded-md w-full' name="" id="text-area"></textarea>
            </div>
            <button className='bg-[#1C2B3A] hover:bg-transparent hover:border-2 transition-all hover:border-[#1E2D3D] p-2 w-fit px-4 rounded-md'>_submit</button>
          </form>
        </div>
      </div>

      <div className='h-full flex flex-col xs:hidden lg:block items-center border-l-[1px] border-[#1E2D3D]'>
        <div className='w-full py-[25.4px] border-b-[1px] border-[#1E2D3D]'></div>
        <div className='p-6 h-full flex items-center'>
          <ContactCodeSnippet name={nameInputVal} email={emailInputVal} message={messageInputVal} date={date} />
        </div>
      </div>

    </section>
  )
}

export default ContactMe