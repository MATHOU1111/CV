import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';
import ProjectsList from "./ProjectsList.jsx";
import {Divider, Flex, Image} from "@chakra-ui/react";

function Timeline() {
   return (
       <div>
           <div className="flex items-center justify-center flex-col text-center pb-6">

               <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Dumage Mathis</h1>
               <p className="text-base md:text-xl mb-3 font-medium">Alternant en développement web</p>
               <p className="text-sm max-w-xl mb-6 font-bold">
                   Présentation Présentation Présentation Présentation Présentation Présentation Présentation
                   Présentation Présentation Présentation Présentation
               </p>
           </div>
            <div className="flex flex-col md:flex-row justify-center my-20">
                <div className="w-full md:w-7/12">
                    <Title>Timeline</Title>
                    {timeline.map(item => (
                       <TimelineItem
                           key={item.id}
                          year={item.year}
                          title={item.title}
                          duration={item.duration}
                          details={item.details}
                       />
                    ))}
                </div>
            </div>
           <Flex className="flex justify-center items-center flex-col text-center">
               <Title>Mes projets</Title>
               <div className="w-2/4 p-8">
                   <Divider />
               </div>
               <ProjectsList />
           </Flex>
       </div>
   )
}

export default Timeline;