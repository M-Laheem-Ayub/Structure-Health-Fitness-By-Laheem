import React, { useState, useEffect, useRef } from 'react'
import './GymFactsSec.css'
import gymFactsData from '../../../api/home/gymFactsData'

const GymFactsSec = () => {
  const [counts, setCounts] = useState(gymFactsData.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          gymFactsData.forEach((fact, index) => {
            const target = parseInt(fact.num.replace(/,/g, ''))
            let current = 0
            const increment = target / 100
            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                current = target
                clearInterval(timer)
              }
              setCounts(prev => {
                const newCounts = [...prev]
                newCounts[index] = Math.floor(current)
                return newCounts
              })
            }, 30)
          })
        }
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const formatNumber = (num) => {
    return num.toLocaleString()
  }

  return (
    <div ref={sectionRef} className='gym-fact-con pt-5 pb-5'>
      <h2 className='gym-fact-heading pb-2'>GYM FACTS</h2>
      <p>
        You dream. You plan. You reach. There will be obstacles
      </p>
      <div className='container pb-4'>
        <div className='row pt-3'>

          {gymFactsData.map((fact, index) => (
            <div className='col-md-3 col-12 fact-card' key={index}>
              <div className='fact-num'>{formatNumber(counts[index])}</div>
              <div className='fact-title'>{fact.title}</div>
            </div>
          ))}
        </div>
      </div>


    </div>
  )
}

export default GymFactsSec
