import React from "react";

let data = [
    {
        title: "Heeramandi",
        imgURL: "https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVx9XeGF_87h4odP_kFwqC8-piPPbFyxiUQLZzG97sPE_L6_40jVHVjTMpnCSLh5SsVFqmwKZ5buXfiiFgZ--XFugjYGO_r00UPk7cxQtKsb1q_q90sxX31vLgvXAwLFNc-VtgeShro6FRBjIctmxmOD0nzVvWd3sekSdM9hUrThqy-LNLjAMWAYSh5_n5A.jpg?r=66f",
        description: "This film is streaming on Netflix plotform"
    
    },
    {
        title:  "Manifest",
        imgURL: "https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZrMLnw8WE5hCJsepUt8asAgLAOczm8tGn3WGO3OvnZengYhUh7ZT3tncJ9z00fK6zlch9fBhVMKHQI77cCFiCHmxTQEDwpjuUBNiEzyxgCrRXNDQtECKDbrH5pR5s5oagYG.jpg?r=488",
        description: "This film is streaming on Netflix plotform"
    }

];

const App = () => {
    return (
        <section>
            {data.map((eachObj) => {
                return (
                    <Movie 
                    title={eachObj.title}
                    imgURL={eachObj.imgURL}
                    description={eachObj.description} />
                )
            }
        )}
        </section>
    )
};





// let App = () =>{
//     return (
//         <section>
//         <Movie
//         title = {data[0].title}
//         imgURL = {data[0].imgURL}
//         description = {data[0].description}
//         />
//         <Movie
//         title = {data[1].title}
//         imgURL = {data[1].imgURL}
//         description = {data[1].description}
//         />
        
//         </section>
//     );
// };

let Movie = (props) => {
    return (
        <article className="each-movie">
          <img src={props.imgURL} />
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </article>
    );
};

export default App;

