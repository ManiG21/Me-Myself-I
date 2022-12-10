import * as d3 from 'd3'
import React, { useState, useRef, useEffect } from 'react'
import { getAllFromTable } from '../../network-requests';


// take data map over data, take each journal entry grab the emoji (codewars:counting object track all the counts of certain emojis)
//map over counting object, each will get own object (array of object) 

export default function PieChart(props) {
    const id = props.profile ? props.profile.id : 1

    const [data,setData] = useState([
        // { emoji: 'a', value: 4, color: 'red' },
        // { emoji: 'b', value: 3, color: 'blue' },
        // { emoji: 'c', value: 10, color: 'green' },
        // { emoji: 'd', value: 2, color: 'yellow' },
        // { emoji: 'e', value: 8, color: 'pink' },
    ]);
    // loop through all the journal entries convert into d3 data
    const formatJournals = newJournals => {
        // input:array of objects 
        // output: array of objects but only 1 for each emoji 
        // {id: 2, entry_time: '2022-09-09T04:00:00.000Z', title: 'Best Day Ever', entry: 'Im so busy got nothing to do Spent the last two ho…ometimes the little things Start closing in on me', color: 'blue', …}
        // {id: 5, entry_time: '2022-10-09T04:00:00.000Z', title: 'Best Day Ever', entry: 'Im so busy got nothing to do Spent the last two ho…ometimes the little things Start closing in on me', color: 'blue', …} 
        // {id: 8, entry_time: '2022-06-09T04:00:00.000Z', title: 'Best Day Ever', entry: 'Im so busy got nothing to do Spent the last two ho…ometimes the little things Start closing in on me', color: 'blue', …}
        // {id: 11, entry_time: '2022-09-09T04:00:00.000Z', title: 'Best Day Ever', entry: 'Im so busy got nothing to do Spent the last two ho…ometimes the little things Start closing in on me', color: 'blue', …}
            // output: array [{emoji:'happy',value: 3 ,color: 'blue'}]
        // create 1 object [{emoji,value and color}] 
        const output = []
        // loop through data
        for (let i= 0; i< newJournals.length; i++){
            // find emoji in output 
            const emoji = output.find(x => x.emoji === newJournals[i].emoji)
            // (if emoji does not exist in our output insert new object), 
            if( !emoji){
                output.push({emoji:newJournals[i].emoji,value:1,color:newJournals[i].color})
            }
            // OTHERWISE incrementing value(if there is multiple entries with same emoji) 
            else{
                emoji.value++
            }
        } 
      setData(output)
    }
    // useState: variable tha react tracks to see if it needs to refresh component(default value)

    useEffect(() => {
        getAllFromTable(`users/${id}/journals`)
            .then(res => formatJournals(res))
    }, [])

    const svgRef = useRef()
    useEffect(() => {



        // setting up svg container
        const w = 500;
        const h = 500;
        const radius = w / 2;
        const svg = d3.select(svgRef.current)
            // how to select and get the value
            .attr('width', w)
            .attr('height', h)
            .style('overflow', 'visible')
            .style('margin-top', '400px');

        // setting up chart 
        const formattedData = d3.pie().value(d => d.value)(data);
        // creates a function that we can pass through the data 
        const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius)
        // 0 is to get the full circle
        const color = d3.scaleOrdinal().range(d3.schemeSet2);

        // set up svg data
        svg.selectAll()
            .data(formattedData)
            .join('path')
            .attr('d', arcGenerator)
            // determine distance for the pie
            .attr('fill', d => color(d.value))
            // passing the value 
            .style('opacity', 0.7);

        svg.selectAll()
            .data(formattedData)
            .join('text')
            .text(d => `${d.data.emoji} (${d.data.value})`)
            // data property
            .attr('transform', d => `translate(${arcGenerator.centroid(d)})`)
            .style('text-anchor', 'middle')
            .style('font-size', '10px');

    }, [data]);
    return (
        <div className="Pie Chart">
            <svg ref={svgRef}></svg>
        </div>
    )
}

// pull all journals from (1 user) userid (Select * from journals where userid) 