import React,{useState} from 'react'

const CopyButton = ({ code }) => {
    const [copied, setCopied] = useState(false);
  
    const handleCopy = () => {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
    };
  
    return (
      <button onClick={handleCopy} className="copy-btn">
        {copied ? "Copied!" : "Copy"}
      </button>
    );
};

export default CopyButton