import React from "react";

const imgSrc = [
                "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "https://cdn130.picsart.com/300561943099201.jpg?c256x256",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7a9KQGXahoywO8TYBNZlXdiHgkASegMNk9XXBH_DW0eK7IHu",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Great_Wave_off_Kanagawa2.jpg/330px-Great_Wave_off_Kanagawa2.jpg",
                "https://static1.squarespace.com/static/5511fc7ce4b0a3782aa9418b/t/55319dace4b0c604b970e9d6/1429314991016/colorful-abstract-art-style-by-thaneeya.jpg"
               ]

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
