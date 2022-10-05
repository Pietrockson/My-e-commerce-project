import React from 'react';
import MenuItem from '../Menu-Item/Menu-Item';
import './Directory.scss';


class Directory extends React.Component{
  constructor(){
    super();
    this.state ={
      sections: [
        { 
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1, 
          linkUrl: 'hats'
                
        },

        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: ''
          
        },

        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: ''
          
        },

        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: ''
          
        },

        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: ''
     
        }
      ]
    } 
  } 

  render(){
    return(
      <div className='directory-menu'>
      {/*here, we use ES6 method of destructuring...rest to destructure the props we pass to reduce the verbosity of our code
      so instead of keep passsing thesame repeated props, we do the first object and rest */}
        {/* {this.state.sections.map(({id, title, imageUrl,  size, linkUrl}) => ( */}
        {this.state.sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key= {id} {...otherSectionProps} />
        ))}
      </div>
    )
  }
}

export default Directory;