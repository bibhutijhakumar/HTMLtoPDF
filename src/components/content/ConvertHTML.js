import React, { useState } from 'react';

import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from "@material-tailwind/react";
import {
	PerfectScrollbar,
	initTE,
} from "tw-elements";

initTE({ PerfectScrollbar });
const ConvertHTML = ({ showLineNumbers, props }) => {
	const [language, changeLanguage] = useState("jsx");
	const [activeTab, setActiveTab] = React.useState("html");
	const [selectedFile, setSelectedFile] = useState(null);
	const [activeA, setActiveA] = useState(!false);

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const [text, setText] = useState('');

	const handleChange = (event) => {
		setText(event.target.value);
	};

	const countLines = (text) => {
		return text.split('\n').length;
	};

	const data = [
		{
			label: "Convert URL to PDF",
			value: "html",
			desc: <div className="mt-4"><h2>Web	addresses:</h2><textarea class="border rounded w-full h-4/6 p-3 my-3 text-sm" rows={5} placeholder='Paste your URLs here, one per line:
    		https://www.example.com/
    		https://www.google.com/'></textarea></div>,
		},
		{
			label: "Convert HTML files",
			value: "converHTML",
			desc: <div className="mt-5 text-center pt-5">
				<div className={`file-name mb-5 ${selectedFile ? 'file-selected' : 'hidden'}`}>
					<span className='text-xl'>Selected:</span> {selectedFile ? selectedFile.name : 'No file selected'}
				</div>
				<div className='bg-green-500 text-white mb-8 rounded w-96 m-auto relative'>
					<input className='opacity-0 absolute w-full h-full left-0' type="file" onChange={handleFileChange} />
					<h4 className=' px-3 py-2 text-2xl font-bold'>Upload HTML Files</h4>
				</div>
			</div>,
		},
		{
			label: "HTML code",
			value: "HTMLCode",
			desc: <div className="mt-5 text-left px-4">
				<h3 className='text-xl mb-4'>HTML Code:</h3>
				{/* <textarea class="html-code border rounded w-full h-full p-3 my-3 text-sm" rows={5}>

            </textarea> */}
				<div className="textarea-container h-96 border-b-2 mb-5 pb-5" >

					<div className="relative h-full w-full flex justify-start"
						data-te-perfect-scrollbar-init
						data-te-suppress-scroll-x="true"
					>


						{/* <div className="line-numbers">
							{Array.from({ length: countLines(text) }).map((_, index) => (
								<div key={index} className="line-number">
									{index + 1}
								</div>
							))}
						</div> */}
						<textarea
							id="journal-scroll"
							value={text}
							onChange={handleChange}
							placeholder="Type your text here..."

							className='w-full overflow-y-scroll border p-4 rounded-lg focus:0 h-full bg-[lemonchiffon]'
						/>
					</div>

				</div>

				<div className='flex justify-center gap-8'>
				<button className="bg-green-500 text-white px-3 rounded py-1">Convert HTLM to PDF</button><button className="bg-green-100 px-3 py-1 rounded">More options</button></div>
				</div>
		}
	];
	return (
		<section class="row py-11 h-4/5">
			<div class="container w-3/5 m-auto text-center">
				<h1 class="title text-5xl font-bold mb-3">HTML to PDF</h1>
				<p className='text-2xl text-gray-500'>Convert web pages or HTML files to PDF documents</p>
				<div className='flex items-center justify-center my-12 gap-8'>
					<a className='cursor-pointer rounded bg-yellow-500 px-6 pb-2 pt-2.5 text-lg font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-yellow-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-yellow-500 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-yellow-600 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] flex items-center'><button className='bg-white text-green-500 text-xs rounded-sm px-2 mr-2'>NEW</button>NEW Browser extension <span className='pl-2 text-2xl'>&#62;</span></a>


					<a className='cursor-pointer rounded bg-yellow-500 px-6 pb-2 pt-2.5 text-lg font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-yellow-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-yellow-500 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-yellow-600 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] flex items-center'>'Save as PDF' for your website<span className='pl-2 text-2xl'>&#62;</span></a>
				</div>
				<div className='border rounded-xl min-h-32'>
					<Tabs id="custom-animation" value="html">
						<TabsHeader className='bg-gray-200 py-2 justify-center gap-8 rounded-s-none rounded-e-none rounded-t-xl'>
							{data.map(({ label, value }) => (
								<Tab key={value} value={value} className='w-2/12'>
									{label}
								</Tab>
							))}
						</TabsHeader>
						<TabsBody
							animate={{
								initial: { y: 250 },
								mount: { y: 0 },
							}}
						>
							{data.map(({ value, desc }) => (
								<TabPanel key={value} value={value}>
									{desc}
								</TabPanel>
							))}
						</TabsBody>
					</Tabs>
				</div>

			</div>
		</section>
	)
}

export default ConvertHTML