import './ImageList.css';
import './ImageCard';
import React from 'react';
import ImageCard from './ImageCard';
 
class ImageList extends React.Component{
    render(){
       const images = this.props.images.map((image)=>{
         //return  <img key={id} src={urls.regular} alt={description}/>
         return <ImageCard key={image.id} image = {image}/>
       });
       return <div className='image-list'>{images}</div>
    }

}

export default ImageList;