import React from 'react';
//import Axios from 'axios';

import unsplash from '../api/unsplash';
import SearchBar from 'components/SearchBar';
import ImageList from 'components/ImageList';


class App extends React.Component{
    
    constructor (p){
        super(p);
        this.state = {images:[]};
     }
     
    render = () => {
        return (
            <div className="ui container"  >
                <SearchBar searchCallBack={this.onSearchSubmit}/>
                Found {this.state.images.length} images
                <ImageList images={this.state.images}/>
            </div>
        );
    };

    onSearchSubmit =async (searchTerm) =>{
        const response = await unsplash.get('/search/photos',{
                params: {query: searchTerm}
            });
        this.setState({images: response.data.results});
    }

    // async onSearchSubmit1 (searchTerm){
    //     let response = await Axios.get('https://api.unsplash.com/search/photos',{
    //         params: {query: searchTerm},
    //         headers: {
    //             Authorization: 'Client-ID f8d6c2d150d29755eca1f9f0d0b9a8bc4383921d449c6fbfdfc04ba5b667371e'
    //                 }
    //         });
    //     this.setState({images: response.data.results});
    //     console.log(this.state.images);
    // }

    // onSearchSubmit = searchTerm => {
    //     console.log(`in app term: ${searchTerm}`);
 
    //     Axios.get('https://api.unsplash.com/search/photos',{
    //         params: {query: searchTerm},
    //         headers: {
    //             Authorization: 'Client-ID f8d6c2d150d29755eca1f9f0d0b9a8bc4383921d449c6fbfdfc04ba5b667371e'
    //                 }
    //         }).then(response=>console.log(response.data.total));
       
    // }
}
 

export default App;
