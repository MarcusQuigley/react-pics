import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {searchWord : 'wolf'};
    }    

    onInputChanged = e => {
        this.setState({searchWord : e.target.value})
    }

    onFormSubmit = e =>{
 
        e.preventDefault();

        this.props.searchCallBack(this.state.searchWord);
    }

    render = ()=>{
        return (
            <div className="ui segment" style={{backgroundColor:'pink'}}>
                <form className="ui form"
                      onSubmit={this.onFormSubmit}
                       > 
                    <div className="field">
                         <input type="text" 
                                value={this.state.searchWord} 
                                onChange={this.onInputChanged}  />
                    </div>
                </form>
            </div>
                );
    }

}

export default SearchBar;