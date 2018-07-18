 import React from 'react';
 import DetailView from './detailView.js';

 class ListView extends React.Component{

   render(){
      
      const songs = this.props.data.map((song,index)=>{
        return <DetailView key={index}>{song}</DetailView>
      })

     return(
       <div>
         {songs}
       </div>
     )
   }

 }

 export default DetailView;
