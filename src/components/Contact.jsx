"use client";
import React from 'react';
import { Text } from "@chakra-ui/react";

function Contact() {
   return (
       <div className="flex flex-col mb-10 mx-auto pt-32">
          <div className="flex flex-col items-center">
             <Text className="text-2xl md:text-3xl mb-4 font-semibold ">Contactez-moi !</Text>
             <form
                 action="https://getform.io/f/5aaa02f6-692d-4b96-8933-8599e439838c"
                 method="POST"
                 className="flex flex-col w-full md:w-7/12"
             >
                <input
                    type="text"
                    name="name"
                    placeholder="Nom"
                    className="p-2 bg-transparent border-2 border-gray-500 rounded-md focus:outline-none mb-2"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="p-2 bg-transparent border-2 border-gray-500 rounded-md focus:outline-none mb-2"
                />
                <textarea
                    name="message"
                    placeholder="Votre message"
                    rows="10"
                    className="p-2 mb-4 bg-transparent border-2 border-gray-500 rounded-md focus:outline-none"
                />
                <button
                    type="submit"
                    className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white text-white"
                >
                   Travailler avec moi
                </button>
             </form>
          </div>
       </div>
   );
}

export default Contact;
