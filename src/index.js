import React from 'react'
import ReactDOM from 'react-dom'
import Cards from './Card'
import './index.css'
import dat from './sdata'


ReactDOM.render(
    <>
    <div className='main-heading'><h1>Top pics for you</h1></div>
    <div className='grid'>
    <Cards
    
    title='Lucifer'      
            
    imagesrc='https://m.economictimes.com/thumb/height-450,width-600,imgsize-736605,msid-84753762/lucifer-revolves-around-lucifer-morningstar-played-by-tom-ellis-the-devil-who-abandons-hell-for-los-angeles-.jpg'
    
    desc='The ruler of hell is out on a vacation.'
    link={dat[0].link}
    />
    
    <Cards
        title='Vikings' 
            
        imagesrc='https://ntvb.tmsimg.com/assets/p9155926_b_h8_as.jpg?w=1280&h=720'
    
        desc='The story of a farmer being a legend '
        link={dat[1].link}

    />
    
    <Cards
     title='Peeky Blinders'
            
    imagesrc='https://i.guim.co.uk/img/media/64c687b75da57f3e82d9fcfd019a4103ce81db15/0_143_4284_2570/master/4284.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b03ca8f1265401501deb033c7481740e'
    
    desc='The story of the gang peeky blinders.'
    link={dat[2].link}

    />
    <Cards
    title='Stranger Things' 
            
    imagesrc='https://phantom-marca.unidadeditorial.es/75efb02c6a249960938d66061da25988/resize/1320/f/jpg/assets/multimedia/imagenes/2022/02/17/16451324297651.jpg'
    
    desc='The story of hawkins and the starnge happenings.'
    link={dat[3].link}

    
    
    
    
    
    
    />
    <Cards 
        title='13 Reasons Why' 
            
            imagesrc='https://occ-0-1217-34.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbTlz8VeTWzaiVDJQfylYCrVqQNif4ErvhQ6oE5IqfmL39-OGQZWCbW55p42FtzhG6rr7BXPDUrw5ewZL9wQ7mhMRgE2XRpoiOREOam44EO6IdusvVJqLggkM3vl3VTUYwEu0w.jpg?r=ba6'
    
            desc='Answering the question of why she did what she did '
            link={dat[4].link}

    />
    
    
    <Cards
         title='Supernatural' 
            
            imagesrc='https://ntvb.tmsimg.com/assets/p17057825_b_h13_ac.jpg'
    
            desc='Get on a ride for the supernatural hunting gig wit the winchesters'
            link={dat[5].link}

    />
    
    
    
    
    
    
    
    </div>
    
    </>



,document.getElementById('root')




 












    )


