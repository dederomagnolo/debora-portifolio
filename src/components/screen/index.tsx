import React from 'react'

import './styles.scss'
import { Arrow } from '../../assets/figures/arrow'
import myPhoto from '../../assets/photo-default.png'
import { Button } from '../button'

const timelineYears = [
  {
    year: 2018,
    yearRoles: [
      {
        company: 'Tecumseh Products Company',
        position: 'Continuous delivery intern'
      },
      {
        company: 'BeThere',
        position: 'Founder and developer'
      }
    ]
  },
  {
    year: 2019,
    yearRoles: [
      {
        company: 'UFSCar',
        position: `Electrical engeenering bachelor's degree`
      },
      {
        company: 'Tecumseh Products Company',
        position: 'Maintenance technical assistant'
      },
      {
        company: 'Amdocs @ Altice Mobile USA',
        position: 'Junior full stack developer'
      }
    ]
  },
  {
    year: 2021,
    yearRoles: [
      {
        company: 'CI&T @ Globoplay',
        position: 'Senior full stack developer'
      }
    ]
  }
]

const renderTimelineItems = () => {
  return timelineYears.map((item, yearIndex) => {
    const year = item.year;
    const yearItems = item.yearRoles

    return (
      <div className='line-item' key={item.year}>
        <div className={`vertical-line vertical-line--${yearIndex}`}>
          <div className='line-year'>{year}</div>
        </div>
        <div className='year-history'>
          {yearItems.map((yearItem, groupIndex) => {
            const position = yearItem.position
            const company = yearItem.company
          
            return (
            <div className={`group group--${groupIndex}`} key={company}>
              <div className='timeline-dot' />
              <div className='timeline-role'>
                <div className='timeline-company'>{company}</div>
                <div className='timeline-position'>{position}</div>
              </div>
            </div>
          )
          })}
        </div>
      </div>
    )
  })
}

export const Screen = () => {
  return (
    <div className='main-screen'>
      <Arrow className='arrow-icon' />
      <div className='row first-section'>
        <div className='about'>
          <span className='title-with-cursor'>
            <h2>Hello</h2>
            <h2 className='blinking-cursor'>_</h2>
          </span>
          <p>
            I'm a Brazilian full stack developer bringing you programming and design from the future. 
          </p>
          <p>
            I have extensive experience with modern and dynamic  web applications, using React JS, Node JS, GraphQL and Javascript related technologies and concepts, including the design and the experience.
          </p>
          <p>
            My main focus is to turn the web more accessible to everyone with simplicity.
          </p>
          <Button className='cyberpunk'>
            Check my work
          </Button>
        </div>
        <div className='frame-corners'>
          <div className='corners-top'></div>
          <div className='corners-bottom'></div>
          <div className='stripes photo'>
            <div className='stripes moving-stripe'></div>
            <img src={myPhoto} alt='profile' />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='carreer'>
          <h2>Carreer</h2>
          <div className='timeline'>
            <div className='main-line'></div>
            <div className='line-items'>
              {renderTimelineItems()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}