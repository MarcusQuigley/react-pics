import React from 'react';
import {shallow} from 'enzyme';

import App from 'components/App';
import SearchBar from 'components/SearchBar';
import ImageList from 'components/ImageList';

let wrapped;

beforeEach(()=>{
    wrapped = shallow(<App/>);
});

it('contains a SearchBar',()=>{
    //const wrapped = shallow(<App/>);
    expect(wrapped.find(SearchBar).length).toEqual(1);
});

it('contains an ImageList', ()=>{
    //const wrapped = shallow(<App/>);
    expect(wrapped.find(ImageList).length).toEqual(1);
}); 