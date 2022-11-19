// import React, { useEffect, useState } from "react"
// // import * as d3 from 'd3'
// import { getAllFromTable } from "../../network-requests"
// import { Calendar } from "./CalendarFunction"


// export default function JournalList() {
//     const [journals, setJournals] = useState([])
//     useEffect(() => {
//         getAllFromTable('journal')
//             .then(res => setJournals(res))
//     }, [])


//     return (
//         <>
//             <div>Calandar page</div>
//             <div className="JournalListContainer">
//                 {journals?.map((journal) => (
//                     <div classname="journal">
//                         {journal.user_id}
//                         <br></br>
//                         {journal.id}
//                         <br></br>
//                         {journal.entry}
//                         <br></br>
//                         {journal.emoji}
//                         <br></br>
//                         {journal.title}
//                         <br></br>
//                         {journal.date}
//                     </div>
//                 ))}
//             </div>
//         </>



//     );
// }


