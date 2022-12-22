import React from 'react';

const Blog = () => {
    return (
        <div className='p-2 md:p-5 md:w-2/3 mx-auto text-gray-800'>
            <div className='p-5 border shadow rounded mb-5'>
                <h1 className='text-3xl font-semibold pb-3'>what is cors?</h1>
                <p className='text-xl'>CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests. The same-origin security policy forbids cross-origin access to resources. But CORS gives web servers the ability to say they want to opt into allowing cross-origin access to their resources.</p>
            </div>
            <div className='p-5 border shadow rounded mb-5'>
                <h1 className='text-3xl font-semibold pb-3'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p className='text-xl'>Firebase works under the flag of Google, and thats why it provides powerful databases for web and mobile application development. Firebase Realtime database allows applications to approach cross-platform data within realtime after joining NoSQL cloud-storage. Another advantage of Firebase is its Cloud Firestore. This NoSQL database makes it easy for programmers to transfer and store data for front and backend development etc.
                <br />
                the Substitute of firebase are: Auth0, Okta, MongoDB etc.</p>
            </div>
            <div className='p-5 border shadow rounded mb-5'>
                <h1 className='text-3xl font-semibold pb-3'>How does the private route work?</h1>
                <p className='text-xl'>Private route protects sensitive data or limited visitors in a website. It checks if a user is logged in or not and based on the authetication it returns the expected element or it redirects if it can not authenticate the user.</p>
            </div>
            <div className='p-5 border shadow rounded mb-5'>
                <h1 className='text-3xl font-semibold pb-3'>What is Node? How does Node work?</h1>
                <p className='text-xl'>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                <br />
                Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
            </div>
        </div>
    );
};

export default Blog;