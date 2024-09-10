import React from 'react'
import { useState, useEffect } from 'react'
import Tour from './Tour'
import Loading from "./Loading";

const Tours = ({url}) => {
  const [tours, setTours] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const removeTour = (id) => {
    const newToursList = tours.filter((tour) => id !== tour.id)
    setTours(newToursList)
  }

  useState(() => {
    const getTours = async () => {
      try {
        const resp = await fetch(url)
        const listOfTours = await resp.json()
        setTours(listOfTours)
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    }
    getTours()
  }, [])

  return (
    <>
      {isLoading ? <Loading /> : <Tour tours={tours} setTours={setTours} removeTour={removeTour} />}
    </>
  )
}

export default Tours