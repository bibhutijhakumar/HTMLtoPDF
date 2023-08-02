import React from 'react';

import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from "@material-tailwind/react";

const ConvertHTML = () => {
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
    )
}

export default ConvertHTML