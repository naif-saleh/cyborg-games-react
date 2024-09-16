import React from 'react'
import './MostPopular.css'
import { Card , SectionHeader , SectionWrapper} from '../../components/index'
import popular_01 from "../../assets/images/popular-01.jpg";
import popular_02 from "../../assets/images/popular-02.jpg";
import popular_03 from "../../assets/images/popular-03.jpg";
import popular_04 from "../../assets/images/popular-04.jpg";
import popular_05 from "../../assets/images/popular-05.jpg";
import popular_06 from "../../assets/images/popular-06.jpg";
import popular_07 from "../../assets/images/popular-07.jpg";
import popular_08 from "../../assets/images/popular-08.jpg";

const MostPopular = () => {
  const mostPopularData = [
    {id:'mostPopular_01' , title:'Fort Night' , image: popular_01 , category:'sandbox' , rate:'3.2' , download:'1.5'},
    {id:'mostPopular_02' , title:'Pubg' , image: popular_02 , category:'sandbox' , rate:'4.2' , download:'2.5'},
    {id:'mostPopular_03' , title:'Doat2' , image: popular_03 , category:'sandbox' , rate:'5.2' , download:'5.5'},
    {id:'mostPopular_04' , title:'CS-Go' , image: popular_04 , category:'sandbox' , rate:'3.7' , download:'7.5'},
    {id:'mostPopular_05' , title:'Minicraft' , image: popular_05 , category:'sandbox' , rate:'4.8' , download:'5.5'},
    {id:'mostPopular_06' , title:'Egleas Fly' , image: popular_06 , category:'sandbox' , rate:'5.5' , download:'4.5'},
    {id:'mostPopular_07' , title:'God Hand' , image: popular_07 , category:'sandbox' , rate:'2.2' , download:'6.5'},
    {id:'mostPopular_08' , title:'Star War' , image: popular_08 , category:'sandbox' , rate:'5.2' , download:'3.5'},
  ]


   const cards = mostPopularData.map(card =>{
      return <Card 
          key={card.id}
          title={card.title}
          image={card.image}
          category={card.category}
          rate={card.rate}
          download={card.download}
      />
    })


  return (

    <SectionWrapper>
        <SectionHeader title="Most Popular"/>
        <div className='most-popular-items'>
            {cards}
        </div>
      </SectionWrapper>
    
  )
}




    
        

        
        
  

export default MostPopular
