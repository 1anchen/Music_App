import React from 'react';

class DetailView extends React.Component{

  render(){
    if(!this.props.children)return null;
    console.log(this.props.children);
    return(
       <p>{this.props.children['im:artist'].label}</p>
    );
  }
}
export default DetailView;
