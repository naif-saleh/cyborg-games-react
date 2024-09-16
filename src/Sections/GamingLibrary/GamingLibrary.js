 import {SectionHeader , SectionWrapper , GamingLibraryCard} from '../../components/index'
 import "./gamingLibrary.css"
 import React from 'react'
 import game_01 from "../../assets/images/game-01.jpg";

function GamingLibrary() {

    const gamingLibraryData = [
        {id:'gamingLibrary_01' , title:'Fort Night' , image: game_01 ,      category:'sandbox' ,  hourly:'16 H 62 Mrs' , dateAdded:'2/8/2024' , download:'downloaded'},
        {id:'gamingLibrary_02' , title:'Pubg' ,       image: game_01 ,      category:'sandbox' ,  hourly:'16 H 62 Mrs' ,      dateAdded:'2/8/2024' , download:'downloaded'},
        {id:'gamingLibrary_03' , title:'Doat2' ,      image: game_01 ,      category:'sandbox' ,  hourly:'16 H 62 Mrs' ,    dateAdded:'2/8/2024' , download:'downloaded'},
        // {id:'mostPopular_04' , title:'CS-Go' , image: popular_04 , category:'sandbox' , rate:'3.7' , download:'7.5'},
        // {id:'mostPopular_05' , title:'Minicraft' , image: popular_05 , category:'sandbox' , rate:'4.8' , download:'5.5'},
        // {id:'mostPopular_06' , title:'Egleas Fly' , image: popular_06 , category:'sandbox' , rate:'5.5' , download:'4.5'},
        // {id:'mostPopular_07' , title:'God Hand' , image: popular_07 , category:'sandbox' , rate:'2.2' , download:'6.5'},
        // {id:'mostPopular_08' , title:'Star War' , image: popular_08 , category:'sandbox' , rate:'5.2' , download:'3.5'},
      ]

      const cards = gamingLibraryData.map(card =>{
        return <GamingLibraryCard 
            key={card.id}
            title={card.title}
            image={card.image}
            category={card.category}
            hourly={card.hourly}
            dateAdded={card.dateAdded}
            download={card.download}
        />
      })

  return (
     
    <SectionWrapper>
        <SectionHeader title="Gaming Library"/>
            <div className='gaming-library-items'>
                {cards}
            </div>
  </SectionWrapper>
     
  )
}

export default GamingLibrary
