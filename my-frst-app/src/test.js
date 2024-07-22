import React from "react";

const App = () => {
    return (
        <section className="movie-container" >
      <>
      <Movie />
      <TitleComponent />
      <ImageComponent1 />
      <TitleComponent1 />
      <ImageComponent2/>
      <TitleComponent2 />
      {/* <Movie />
      <TitleComponent />
      <ImageComponent1 />
      <TitleComponent1 />
      <ImageComponent2/>
      <TitleComponent2 /> */}
      </>
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
        <div className="image-style">
        <img src="https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdZBaHsvXZnrbMdEHXnbVS0L_vJGxtbBlyvajQo0f13vY97Qz4i9juE9NCtMUVRXmZ_knzGi1h84E3kejHMqxJ2oW9yASD7pgRaz5H4_Hs_76uyER-qKUcuIWqVysHlA0r4s.jpg?r=71f"
        alt="Image Show" />
        </div>
    );
};

const ImageComponent1 = () => {

    return (
        <div className="image-style">
        <img src="https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeV7REIHwvLWvgoFe5w7e4v0SEvxUmXHVx-N6XEbwDHW3TYNJp4gfEz-RKpr5P0dG3FtUQdmWeTVaq-V2AzjkiYSeCwlN-o9qq_oFyHstkhE_vx3Kg8OM_3GFcOsjBHKZMN03uYKPsHM1ezm7XWEACY5NKkFlfUlxdRuDR5RloXaz6VDY7TerwtcCW4RoEcTTVYpc0ViwQfCdw7jK8wJoQUJPNVk4VgkXrC5ukZ7hsI4gkHcytVKaK2ss_ed8cZ9U8Ks6xCEjREDilGieAoOuGpTXvG5MgE35hDIeW_aa_pd9Rn_7ByO8PyE9zXakcysVIfD7I41U2QEV3oAJ_x1gqwo5qWx-5HtbHdhc2BY3XCDz--NDnNlbxvIziA9g51-13_nhWBp2puXb_lptJnUg1-VKmoVq83L3qG98JjyEjUW-nK2Fd7IX5MtszV_6TfqJOAU0hJFwdF92dtKm1SFfGhMBKxidkFY9sQnbKumbF0oiSI6pUAYpzG5xoH9vPEBIio.jpg?r=92b"
        alt="Image1"/>
        </div>
    );
};

const ImageComponent2 = () => {

    return (
        <div className="image-style">
        <img src="https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABauaf_pjBXX9G_dl-IYBIWLYWexsTpaSGU0ulKaCMLmsn_ew6nmLGev9nFJJ7bRDMaKAGE0G2Egdgy30VgHbVI7c0-IeOxmMp5j-0AoMIuToZbPzDmGzCQjZIN_OLvtEARjE.jpg?r=3e4"
        alt="Image2"/>
        </div>
    );
}

const TitleComponent = () => {
    return (
        <div className="title-style">
        <h1>The Night Agent </h1>
        </div>
    );
};

const TitleComponent1 = () => {
    return (
        <div className="title-style">
        <h1>The Great Indian Kapil Show </h1>
        </div>
    );
};
const TitleComponent2 = () => {
    return (
        <div className="title-style">
        <h1>QUEEN of TEARS </h1>
        </div>
    );
};

export default App;