import React from "react";

import {imgSrc} from "../imgSrc";


class Content extends React.Component {
    render(){
        const images = imgSrc.map((image)=> <img className="image" src={image} />)
        return(
            <main>
                {images}
            </main>
        )
    }
}

export default Content
