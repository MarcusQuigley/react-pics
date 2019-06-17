import React from 'react';
 
import SearchBar from 'components/SearchBar';
import ImageList from 'components/ImageList';

class App extends React.Component{
    render = () => {
        return (
            <div className="ui container"  >
                <SearchBar searchCallBack={this.onSearchSubmit}/>
                <ImageList/>
            </div>
        );
    };

    onSearchSubmit = searchTerm => {
        console.log(`in app term: ${searchTerm}`);
        //call out to google
    }
}
// const App = ()=>{
//     return (
        
//     );
// }

export default App;
