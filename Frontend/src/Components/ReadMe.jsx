import React, { useEffect, } from 'react';


const ReadMe = ({arrayToView}) => {
    return (
        <div className=''>
            <ol className='flex flex-col gap-2'>
                {arrayToView.map((item, index) => (
                    <li key={index} className="list-decimal opacity-0 line list-inside text-[16px]">
                        <span className=' ml-3'>{item}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ReadMe;