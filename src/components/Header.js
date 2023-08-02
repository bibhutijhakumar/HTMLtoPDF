import React from 'react'

const Header = () => {
    return (
        <div class="bg-white shadow-md relative">
            <header class="container w-3/5 h-16 m-auto flex justify-between items-center">
                <div class="logo w-40 text-3xl font-bold text-sky-800 rounded border h-12">n:point</div>
                <div class="flex items-center">
                    <button class="bg-sky-800 h-9 rounded text-white px-3">+ New</button>
                    <div class="ml-5">
                        <button class="button subtle border-0">Log in<svg className='inline' fill="currentColor"
                            preserveAspectRatio="xMidYMid meet" height="1em" width="1em" viewBox="0 0 40 40">
                            <g>
                                <path d="m11.6 16.6h16.8l-8.4 8.4z"></path>
                            </g>
                        </svg></button>
                    </div>
                </div>
            </header>
            <div class="spacer"></div>
        </div>
    )
}

export default Header