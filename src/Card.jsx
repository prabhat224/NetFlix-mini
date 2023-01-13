import React from 'react'


const Cards = (props)=>{


   return(
    <div className='cards'>

    <div className='image'>
    <img src={props.imagesrc}/>
    </div>
    <div className='title'>{props.title}</div>
    <div className='desc'>{props.desc}</div>
    <div className='link'>
        <a href={props.link} target='blank'> 
        <button className='btn'>Watch Now</button>
        </a>
    </div>
    
    </div>
    
   )
}


export default Cards;






