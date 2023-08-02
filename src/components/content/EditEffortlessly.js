import React from 'react'

const EditEffortlessly = () => {
    return (
        <section class="row py-11 bg-slate-100">
            <div class="container w-3/5 m-auto">
                <h2 className='text-left text-3xl font-bold mb-4'>Edit effortlessly</h2>
            </div>
            <div className="container w-4/5 m-auto">
                <div class="usage-row relative flex">

                    <div className='w-1/5'>
                        <span className='absolute left-0 pr-2 top-9 w-inherit text-right'>Quickly catch errors</span>
                        <span className='absolute left-0 pr-2 bottom-52 mb-1 w-inherit text-right'>Javascript object syntax is allowed</span>
                    </div>
                    <div className='w-3/5'>
                        <img class="h-full object-cover" src={'https://www.npoint.io/img/demo-screenshot-lines.png'} />
                    </div>
                    <div className='w-1/5 '>
                        <span className='absolute right-0 pl-2 top-4 w-inherit text-left'>Add a schema</span>
                        <span className='absolute right-0 pl-2 top-48 mt-1 w-inherit text-left'>Lock the schema to guarantee the JSON structure will never change</span>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default EditEffortlessly