import React from 'react'

const Features = () => {
    return (
        <section class="row py-11">
            <div class="container w-3/5 m-auto">
                <h2 className='text-left text-3xl font-bold mb-4'>Features</h2>
                <p className="italic text-left">This list is built on n:point! <br />
                    Check it out at <a className='underline hover:text-orange-500' href='#'>npoint.io/docs/features</a>, or via the API at <a className='underline hover:text-orange-500' href='#'>api.npoint.io/features</a>.</p>
                <div className='flex items-center my-4'>
                    <span className='text-4xl'>&#x2713;</span>
                    <div className='flex flex-col text-left ml-4'>
                        <h2>Schema validation</h2>
                        <p>Add <a className='underline hover:text-orange-500' href="#">JSON Schema</a> to enforce the structure of your data</p>
                    </div>
                </div>
                <div className='flex items-center my-4'>
                    <span className='text-4xl'>&#x2713;</span>
                    <div className='flex flex-col text-left ml-4'>
                        <h2>Schema and data locking</h2>
                        <p>Once you're confident that your schema or data won't change, lock them down so your app will never break</p>
                    </div>
                </div>
                <div className='flex items-center my-4'>
                    <span className='text-4xl'>&#x2713;</span>
                    <div className='flex flex-col text-left ml-4'>
                        <h2>Flexible syntax</h2>
                        <p>Forget the quotes! You can use javascript object syntax {`({ a: 1 } instead of { "a": 1 })`}</p>
                    </div>
                </div>
                <div className='flex items-center my-4'>
                    <span className='text-4xl'>&#x2713;</span>
                    <div className='flex flex-col text-left ml-4'>
                        <h2>Sub-property access</h2>
                        <p>If you just need a piece of your JSON data, you can add property keys or array indexes to your API URL (Example: <a className='underline hover:text-orange-500' href='#'>api.npoint.io/features/0/description</a>)</p>
                    </div>
                </div>
                <div className='flex items-center my-4'>
                    <span className='text-4xl'>&#x2713;</span>
                    <div className='flex flex-col text-left ml-4'>
                        <h2>Protected editing</h2>
                        <p>Once you're logged in, all JSON bins you create are associated with your account so only you can edit the data</p>
                    </div>
                </div>
                <div className='flex items-center my-4'>
                    <span className='text-4xl'>&#x2713;</span>
                    <div className='flex flex-col text-left ml-4'>
                        <h2>CORS support</h2>
                        <p>n:point sets the header <mark className='bg-gray-200 px-2 rounded-sm'>Access-Control-Allow-Origin: *</mark> in API responses, so you can access the API from anywhere</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features