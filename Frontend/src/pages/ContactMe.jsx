import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import mailIconSvgSrc from "../../public/assets/Icons/mail-icon.svg";
import telephoneIconSvgSrc from "../../public/assets/Icons/telephone-icon.svg";
import arrowFilledSvgSrc from "../../public/assets/Icons/filled-arrow.svg";
import ContactCodeSnippet from '../Components/ContactCodeSnippet';
import { useForm, ValidationError } from '@formspree/react';
import ClipLoader from "react-spinners/ClipLoader";


const override = {
  display: "flex",
  margin: "auto",
  borderColor: "white",
  position: "absolute", // Position the loader absolutely within the parent
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%, 0 ,0)", // Center the loader
};



const ContactMe = () => {
  const [nameInputVal, setNameInputVal] = useState("");
  const [emailInputVal, setEmailInputVal] = useState("");
  const [messageInputVal, setMessageInputVal] = useState("");
  const [isContactOpened, setIsContactOpened] = useState(false);
  const [date, setDate] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission state

  const [state, handleSubmit] = useForm("myzewezd");

  useEffect(() => {
    const todaysDate = new Date().toDateString();
    const splitLetters = todaysDate.split(" ");
    const fewWords = splitLetters.slice(0, 4).join(" ");
    setDate(fewWords);
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      setFormSubmitted(true); // Update form submission state to show the success message
    }
  }, [state.succeeded]);

  

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
        <div className='w-full h-[51.8px] xs:hidden lg:block border-b-[1px] border-[#1E2D3D]'></div>
        
        <div className={`flex p-6 relative items-center justify-center ${formSubmitted ? "h-full w-full justify-center items-center top-0" : "top-[65px]"}`}>
        {
        formSubmitted 
        ? 
        <div>
          <h1>Thank you! 🤘</h1>
          <p>Your message has been accepted. You will recieve answer really soon!</p> 
        </div>
        :
          <form 
            onSubmit={handleSubmit} 
            className='flex gap-5 min-w-fit w-full flex-col'
          >
            <div className='flex gap-3 w-full flex-col'>
              <label htmlFor="name">_name</label>
              <input 
                id="name" 
                name="name" 
                onChange={(e) => setNameInputVal(e.target.value)}
                type="text"
                className='bg-[#011221] w-full p-2 rounded-md' 
                required
              />
            </div>

            <div className='flex gap-3 w-full flex-col'>
              <label htmlFor="email">_email</label>
              <input 
                id="email" 
                name="email" 
                onChange={(e) => setEmailInputVal(e.target.value)}
                type="email"
                className='bg-[#011221] w-full p-2 rounded-md' 
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className='flex gap-3 w-full flex-col'>
              <label htmlFor="message">_message</label>
              <textarea 
                id="message" 
                name="message"
                onChange={(e) => setMessageInputVal(e.target.value)}
                className='bg-[#011221] max-h-[200px] min-h-[100px] p-2 rounded-md w-full' 
                required
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button 
              type="submit" 
              disabled={state.submitting}
              className='bg-[#1C2B3A] hover:bg-transparent hover:border-2 transition-all hover:border-[#1E2D3D] p-2 w-fit px-4 rounded-md'
            >
              _submit
            </button>
            
          </form>


        }
        {state.submitting && (
              
              <ClipLoader
                color={
                  "#ffff"
                }
                loading={state.submitting}
                cssOverride={override}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            
          )}
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

export default ContactMe;
