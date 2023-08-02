import React from 'react'

const Footer = () => {
    return (
        <section class="row py-11 footer">
            <div class="container w-3/5 m-auto flex justify-between text-white text-base">
                <div className='w-2/5 text-left'>
                    <p>n:point © 2018</p>
                    <p>Made by <a href='javascropt:void(0)' className='underline'>Alex Zirbel</a> · Code on GitHub</p>
                </div>
                <div className='w-2/5 text-right'>
                    <p><a href='javascropt:void(0)' className='underline'>Frequently Asked Questions</a></p>
                    <p>More questions? <a href='mailto:support@npoint.io' className='underline'>support@npoint.io</a></p>
                </div>
            </div>
        </section>
    )
}

export default Footer