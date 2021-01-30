import React from 'react';
import './search-box.styles.css';
// functional components
// -  no access  to state ;
// -  no constructor ;
// -  no internal state ;
// - no access life cycle methods;
// -  USED just to render something.
export const SearchBox = ({placeholder, handleChange}) => (
    <input className='search'
           type='search'
           placeholder={placeholder}
           onChange={handleChange}
    />
)
