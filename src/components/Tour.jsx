import { useState } from 'react'
import React from 'react'

const Tour = ({tours, removeTour}) => {
  const [readmore, setReadmore] = useState(false)

  return (
    <section className="tours">
      {tours.map(tour => {
        return (
          <article className="single-tour" key={tour.id}>
            <div className="tour-price">{tour.price}</div>
            <img className="img" src={tour.image} />
            <div className="tour-info">
              <h5 className="title">{tour.name}</h5>
              <p>{readmore ? tour.info : `${tour.info.substring(0, 200)}... `}
                <button type="button" className="info-btn" onClick={()=>setReadmore(!readmore)}>
                  {readmore ? 'Show Less' : 'Read More'}
                </button>
              </p>
              <button 
                className="btn btn-block delete-btn"
                onClick={() => removeTour(tour.id)}>
                  Not interested
              </button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Tour