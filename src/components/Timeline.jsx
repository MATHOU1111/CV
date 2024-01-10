import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from './Title';

function Timeline() {
   return (
       <div>
           <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
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
       </div>
   )
}

export default Timeline;