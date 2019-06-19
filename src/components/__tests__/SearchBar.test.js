import React from 'react';
import {mount} from 'enzyme';

import SearchBar from 'components/SearchBar';

let wrapped;

beforeEach(()=>{
    wrapped = mount(<SearchBar/>);
});

it ('has a textbox',()=>{
    expect(wrapped.find(SearchBar).length).toEqual(1);
});

it('has a input control that users can type into',()=>{
    const text = 'a message';
    wrapped.find('input').simulate('change',{target:{value: text}});
    wrapped.update();
    expect(wrapped.find('input').prop('value')).toEqual(text);
});

it('calls callback when form is submitted',()=>{    
   // wrapped.find('form').simulate('submit', {});
});


