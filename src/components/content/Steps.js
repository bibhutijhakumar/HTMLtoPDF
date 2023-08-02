import React from 'react'

const Steps = () => {
    const Steps = [
        {id: "1", title: "Store JSON online", content: "Use n:point as a lightweight backend while you prototype your app or website.", img: "https://www.npoint.io/img/step-1.png"},
        {id: "2", title: "Lock the schema", content: `Define the structure of your data with <a className='underline hover:text-orange-500' href="#">JSON Schema</a>. When you're ready, lock the schema so it can never change again.`, img: "https://www.npoint.io/img/step-2.png"},
        {id: "3", title: "Edit with a friend", content: "Let others make changes to the saved data. With the schema locked, you can be sure edits won't break your app.", img: "https://www.npoint.io/img/step-3.png"}
        
    ]
    return (
        <section class="row py-11">
            <div class="container w-3/5 m-auto">
                {/* {
                    Steps.map((data, index)=> {
                        return (
                            
                        )
                    })
                } */}
                <div class="usage-row flex w-9/12 pb-7 m-auto justify-between">
                    <div class="text-right flex flex-col items-center justify-center w-5/12">
                        <div class="usage-step-number text-orange-500 text-7xl font-bold w-full  ">1.</div>
                        <h3 className='w-full font-bold my-2'>Store JSON online</h3>
                        <p className='w-full font-light'>Use n:point as a lightweight backend while you prototype your app or website.</p>
                    </div>
                    <div className='w-7/12 h-96 ml-11'>
                        <img class="w-full h-full object-cover" src={'https://www.npoint.io/img/step-1.png'} />
                    </div>
                </div>
                {/* <div class="usage-row flex w-9/12 py-7 m-auto justify-between">
                    <div className='w-7/12 h-96 mr-11'>
                        <img class="w-full h-full object-cover" src={'https://www.npoint.io/img/step-2.png'} />
                    </div>
                    <div class="text-left flex flex-col items-center justify-center w-5/12">
                        <div class="usage-step-number text-orange-500 text-7xl font-bold w-full  ">2.</div>
                        <h3 className='w-full font-bold my-2'>Lock the schema</h3>
                        <p className='w-full font-light'>Define the structure of your data with <a className='underline hover:text-orange-500' href="#">JSON Schema</a>. When you're ready, lock the schema so it can never change again.</p>
                    </div>
                </div>
                <div class="usage-row flex w-9/12 pt-7 m-auto justify-between">
                    <div class="text-right flex flex-col items-center justify-center w-5/12">
                        <div class="usage-step-number text-orange-500 text-7xl font-bold w-full">3.</div>
                        <h3 className='w-full font-bold my-2'>Edit with a friend</h3>
                        <p className='w-full font-light'>Let others make changes to the saved data. With the schema locked, you can be sure edits won't break your app.</p>
                    </div>
                    <div className='w-7/12 h-96 ml-11'>
                        <img class="w-full h-full object-cover" src={'https://www.npoint.io/img/step-3.png'} />
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Steps