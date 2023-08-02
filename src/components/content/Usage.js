import React from 'react'

const Usage = () => {
    return (
        <section class="row py-11 bg-slate-100">
            <div class="container w-3/5 m-auto text-left">
                <h2 className='text-left text-3xl font-bold mb-4'>Usage and limits</h2>
                <p className='mb-3'>
                    What started out as a hobby project to help with prototyping has turned into a service serving over 2,000 requests/minute for over 25,000 JSON bins.
                </p>
                <p className='mb-3'>
                    To keep everything running smoothly, n:point now rate-limits requests as follows:
                </p>
                <p className='mb-3'>
                    100 requests/min per IP address <br />
                    600 requests/min per JSON bin
                </p>
                <p className='mb-3'>
                    n:point is a one-way JSON store: edit online, fetch via GET requests over API. Editing data over the API via POST requests is in private beta. Even once released, n:point is not meant to be a full backend for your app.
                </p>
                <p className='mb-8'>
                    Contact support@npoint.io if you have any questions!
                </p>

                <p className='font-bold mb-3'>Open source</p>
                <p className='mb-3'>
                    n:point is completely open source and hosted on Github.
                </p>
                <p className='mb-3'>
                    Contributions are welcome! There are also instructions in case you want to self-host your own instance.
                </p>
            </div>
        </section>
    )
}

export default Usage