import React from 'react';
import { CodeBlock, dracula } from "react-code-blocks";

const CreeateJSON = (showLineNumbers) => {
    
    return (
        <section class="row py-11 bg-slate-100">
            <div class="container w-3/5 m-auto text-left">
                <h1 class="title text-5xl font-bold mb-5">JSON storage bins <br />that won't break your app</h1>
                <p className='mb-5'>Set up a lightweight JSON endpoint in seconds, <br />then add a <a href="#" className='font-bold underline hover:text-orange-500'>schema</a> to edit your data safely at any time</p>
                <div className='w-full h-96 bg-white rounded-md p-5 relative'>
                    <CodeBlock
                        text={`{
		"what": "a simple JSON data store",k
		"why": [
			"quick setup",
			"easy editing",
			"schema validation"
			]
}`}
                        showLineNumbers={showLineNumbers}
                    // theme={dracula}
                    />
                    <button className='absolute h-8 bg-orange-500 rounded -bottom-4 left-0 right-0 w-fit px-5 m-auto text-white'>Create JSON Bin</button>
                </div>
            </div>
        </section>
    )
}

export default CreeateJSON