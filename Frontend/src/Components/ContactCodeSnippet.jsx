import React, {useEffect} from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const ContactCodeSnippet = ({name, email, message, date}) => {

    useEffect(() => {
            const codeElement = document.querySelectorAll("code")
            const preElement = document.querySelector("pre")
            if(codeElement){
              codeElement.forEach((item) =>{
                item.style.backgroundColor = "transparent"
        
              })
            } 
            if(preElement){
              preElement.style.width = "fit-content";
        
            }
        }, [])
    

    const codeString = `
const button = document.querySelector('#sendBtn');

const message = {
	name: ${name || ""},
	email: ${email || ""},
	message: ${message || ""},
	date: ${date || ""}
}

button.addEventListener('click', () => {
	form.send(message);
})
`
  return (
    <div className='text-center code-container'>
        <SyntaxHighlighter 
            language='javascript'
            style={oneDark}
            customStyle={{
                    width: "100%",
                    fontSize: "12.3px",
                    backgroundColor: "#011221",
                }}
        >
            {codeString}
        </SyntaxHighlighter>
    </div>
  )
}

export default ContactCodeSnippet