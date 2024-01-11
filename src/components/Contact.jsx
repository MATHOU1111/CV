import React from 'react';
import Title from './Title';


function Contact() {
   return (
      <div className="flex flex-col mb-10 mx-auto pt-32">
         <div className="flex justify-center items-center">
            <form
               action="https://getform.io/f/5aaa02f6-692d-4b96-8933-8599e439838c"
               method="POST"
               className="flex flex-col w-full md:w-7/12"
            >
               <Title>Contact</Title>
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <textarea
                  name="message"
                  placeholder="Message"
                  rows="10"
                  className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <button
                   type="submit"
                  className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
               >
                  Work With Me
               </button>
            </form>
         </div>
      </div>
   )
}

export default Contact;