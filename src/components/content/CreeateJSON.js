import React, { useState } from 'react';
import {CodeBlock, CopyBlock, dracula } from "react-code-blocks";

const CreeateJSON = ({ showLineNumbers, props }) => {
    const [language, changeLanguage] = useState("jsx");
    return (
        <section class="row py-11 bg-slate-100">
            <div class="container w-3/5 m-auto text-left">
                <h1 class="title text-5xl font-bold mb-5">JSON storage bins <br />that won't break your app</h1>
                <p className='mb-5'>Set up a lightweight JSON endpoint in seconds, <br />then add a <a href="#" className='font-bold underline hover:text-orange-500'>schema</a> to edit your data safely at any time</p>
                <div className='w-full h-96 bg-white rounded-md p-5 relative'>
                   
                    <CodeBlock
                        text={`{
    "what": "a simple JSON data store",
    "why": [
        "quick setup",
        "easy editing",
        "schema validation"
        ]
            
}`}
                        showLineNumbers={showLineNumbers}
                        language={language}
                        theme={dracula}
                        wrapLines

                    />
                  
                    <button className='absolute bg-blue-500 rounded -bottom-5 left-0 right-0 w-fit px-5 m-auto text-white inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-md font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>Create JSON Bin</button>
                </div>
            </div>
        </section>
    )
}

export default CreeateJSON