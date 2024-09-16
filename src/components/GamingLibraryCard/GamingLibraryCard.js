import React from 'react'
 
function GamingLibraryCard(props) {
  return (
    <div calssName='gaming-library-item' style={{'flex':'1 100%'}}>
        <ul style={{'display':'flex' , 'justify-content': ' space-between', 'align-items': 'center' ,'border-bottom':'1px solid var(--color-primary)', 'padding':'calc(var(--padding-primary) / 2)'}}>
            <li><img alt={props.image} src={props.image} /></li>
            <li><h4>{props.title}</h4><span>{props.category}</span></li>
            <li><h4>Date</h4><span>{props.dateAdded}</span></li>
            <li><h4>Hours Played</h4>{props.hourly}</li>
            <li><h4>Currently</h4>{props.download}</li>
            <div className="min-button">
                  <a href="#" style={{'padding':'15px 30px' , 'border-radius':'25px' , 'color':'#fff','background-color':'var(--color-primary)'}}>Download</a>
              </div>
        </ul>
      
    </div>
  )
}

export default GamingLibraryCard
