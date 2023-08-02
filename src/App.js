import React from "react"
import './App.css';
import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from "@material-tailwind/react";
import { Code, CodeBlock, dracula } from "react-code-blocks";

function App(showLineNumbers) {
	// const copyHTMLCode() => {
	// 	return <>
	// 	"what": "a simple JSON data store",
	// 	"why": [
	// 		"quick setup",
	// 		"easy editing",
	// 		"schema validation"
	// 	]
	// 	</>
		
	// }
	// const myObject = {
	// 	name: 'John Doe',
	// 	age: 30,
	// 	occupation: 'Engineer',
	//   };
	// let beautify_html = require('js-beautify').html;
	// let indentedHTML = myObject
	const [activeTab, setActiveTab] = React.useState("html");
	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0];
		// Do something with the selected file (e.g., upload to the server)
		console.log('Selected file:', selectedFile);
	};
	const data = [
		{
			label: "Convert URL to PDF",
			value: "html",
			desc: <div className="mt-4"><h2>Web	addresses:</h2><textarea class="border rounded w-full p-3 my-3 text-sm" rows={5} placeholder='Paste your URLs here, one per line:
			https://www.example.com/
			https://www.google.com/'></textarea></div>,
		},
		{
			label: "Convert HTML files",
			value: "converHTML",
			desc: <div className="mt-5">
				<input className="bg-green-500 text-white px-3 rounded py-1" type="file" onChange={handleFileChange} />

			</div>,
		},
		{
			label: "HTML code",
			value: "HTMLCode",
			desc: <div className="mt-5"><h3>HTML Code:</h3><textarea class="border rounded w-full p-3 my-3 text-sm" rows={5} placeholder="<!DOCTYPE html>
			<html lang=&quot;en&quot;>
			<head>
			<meta content=&quot;width=device-width, initial-scale=1.0&quot; name=&quot;viewport&quot;><meta charset=&quot;utf-8&quot;>"></textarea><button className="bg-green-500 text-white px-3 rounded py-1">Convert HTLM to PDF</button><button className="bg-green-100 ml-3 px-3 py-1 rounded">More options</button></div>,
		}
	];
	return (
		<div className="App text-zinc-700 text-lg">
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
			<section class="row py-11">
				<div class="container w-3/5 m-auto text-center">
					<h1 class="title text-5xl font-bold">HTML to PDF</h1>
					<p className='text-2xl text-gray-500'>Convert web pages or HTML files to PDF documents</p>
					<div className='flex items-center justify-center my-8'>
						<a className='bg-green-50 text-green-600 rounded-md px-3 flex items-center text-sm mr-2'><button className='bg-green-600 text-white text-xs rounded-md px-2 mr-2'>NEW</button>NEW Browser extension <span className='pl-2 text-2xl'>&#62;</span></a>
						<a className='bg-green-50 text-green-600 rounded-md px-3 flex items-center text-sm ml-2'>'Save as PDF' for your website <span className='pl-2 text-2xl'>&#62;</span></a>
					</div>
					<Tabs value={activeTab}>
						<TabsHeader
							className="rounded-none border-b border-slate-300 bg-transparent p-0 flex justify-center items-center"
							indicatorProps={{
								className:
									"bg-transparent border-b border-slate-400 shadow-none rounded-none",
							}}
						>
							{data.map(({ label, value }) => (
								<Tab
									key={value}
									value={value}
									onClick={() => setActiveTab(value)}
									className={activeTab === value ? "w-3/12 rounded-t-md border border-slate-300 border-b-0 relative top-px bg-white py-3 px-2" : "w-3/12"}
								>
									{label}
								</Tab>
							))}
						</TabsHeader>
						<TabsBody>
							{data.map(({ value, desc }) => (
								<TabPanel key={value} value={value}>
									{desc}
								</TabPanel>
							))}
						</TabsBody>
					</Tabs>
				</div>
			</section>
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
							// theme={dracula}
						/>
						<button className='absolute h-8 bg-orange-500 rounded -bottom-4 left-0 right-0 w-fit px-5 m-auto text-white'>Create JSON Bin</button>
					</div>
				</div>
			</section>
			<section class="row py-11">
				<div class="container w-3/5 m-auto">
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
					<div class="usage-row flex w-9/12 py-7 m-auto justify-between">
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
					</div>
				</div>
			</section>
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
			<section class="row py-11">
				<div class="container w-3/5 m-auto">
					<h2 className='text-3xl font-bold mb-4'>Ready to try it out?</h2>
					<button className='h-8 bg-orange-500 rounded px-5 text-white'>Create JSON Bin</button>
				</div>
			</section>
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
		</div>
	);
}

export default App;
