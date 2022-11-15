import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../Menu-Item/Menu-Item';
import { selectDirectorysections } from '../../Redux/Directory/directory.selectors';

import './Directory.scss';


const Directory = ({sections}) => (
  <div className='directory-menu'>
    {sections.map(({id, ...otherSectionProps}) => (
      <MenuItem key= {id} {...otherSectionProps} />
    ))}
  </div>
);
      const mapStateToProps = createStructuredSelector({
        sections: selectDirectorysections
      })

export default connect(mapStateToProps)(Directory);