import React from 'react';

export default function Learn({course}) {
    var learnArray=course.learn;
    console.log(learnArray);
  return (
    <>
 <div className="m-10 ml-0 border border-gray-900 p-3 ">
    <div className='font-extrabold text-2xl'>
    What you'll learn

    </div>
    <div >
        
<ul className=" grid grid-cols-2 pl-0  text-left text-gray-500 dark:text-gray-400">
{learnArray.map((item) => (
    <li key={item.id} className="flex items-center space-x-3">
         <svg className="flex-shrink-0 w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
         </svg>
   <div className='p-1'> {item.state}
</div>
    </li>
))}
</ul>

    </div>
</div>
    </>
  );
}
