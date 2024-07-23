import React from "react";
import './index.css';

const App = () => {
    return (
        <section className="movie-container" >
      <Movie />
      </section>
    );
    
};

const Movie = () => {
    return (
        <article>
         <ImageComponent />
         
        </article>
    );
};

const ImageComponent = () => {
    return (
    <ul className="content-container">
        <li className="content-item">
          <img src="https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVx9XeGF_87h4odP_kFwqC8-piPPbFyxiUQLZzG97sPE_L6_40jVHVjTMpnCSLh5SsVFqmwKZ5buXfiiFgZ--XFugjYGO_r00UPk7cxQtKsb1q_q90sxX31vLgvXAwLFNc-VtgeShro6FRBjIctmxmOD0nzVvWd3sekSdM9hUrThqy-LNLjAMWAYSh5_n5A.jpg?r=66f"
          alt="Image-1" className="image-style" />
          <h1 className="heading"> <span className="sub-heading" >Heeramandi</span></h1> 
        </li>

        <li className="content-item">
          <img src="https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdzLf-Q3OK2H03_O-TYenAtdtgEP9kHEK4Wov-JlvcJNPMiTwFtyZQ_eJ8yMtVrYzoc6mSbEyFAgqu9z-5P0-htUTbfc1AMpCtffuTkpgSJ_c8nM2GKlmkpcEHqoMsmfAmDY.jpg?r=501"
          alt="Image-2" className="image-style" />
          <h1 className="heading">Lucifer</h1> 
        </li>
        <li className="content-item">
          <img src="https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR1l83LSG4xbdyAbitBTo-a0v5E2G4T_k9piDB3Ji_VX6VLa4lDzyd3ULTFADOXFAc0IxKBY6zE64yeq6Jon1upvB5waWMROXMyOd3u4nX3N8f7WaOAjWfut3WrXbfucJT6P.jpg?r=9a1"
          alt="Image-3" className="image-style" />
          <h1 className="heading"> <span className="sub-heading" >Sweet Tooth</span></h1> 
        </li>
        <li className="content-item">
          <img src="https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUxf8Oi6b-AfMTchGw1zexfCRExKjd14PmkhCXIovRIpH70VwEz4VkhB58vU0BcoJhZhzfYtNhlYVIsB50UyowN9BDl_0XCIOTsaoXLS3ORN1g8mR0cqo99LDjNB_WZQX8zI.jpg?r=a98"
          alt="Image-4" className="image-style" />
          <h1 className="heading">Extraction 2</h1> 
        </li>
        <li className="content-item">
          <img src="https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdZBaHsvXZnrbMdEHXnbVS0L_vJGxtbBlyvajQo0f13vY97Qz4i9juE9NCtMUVRXmZ_knzGi1h84E3kejHMqxJ2oW9yASD7pgRaz5H4_Hs_76uyER-qKUcuIWqVysHlA0r4s.jpg?r=71f"
          alt="Image-5" className="image-style"/>
          <h1 className="heading"><span className="sub-heading" >The Night Agent</span></h1> 
        </li>
        <li className="content-item">
          <img src="https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdSP_TBZRZO7Siqz0q6dXfDELBbkeNN0xBuoz3DqdrZjTZ7TIjyaArksghAUAC2VgpSZZg08ot7a79GcYnWh6aFg303gEMrJHi_Vir552xyQqb8oSuEG0rWBKrS69bnqTtif.jpg?r=5d9"
          alt="Image-6" className="image-style" />
          <h1 className="heading">The Monkey King</h1> 
        </li>
    </ul>
    );
};

export default App;