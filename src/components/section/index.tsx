import { useEffect, useState, useRef } from 'react'
import './styles.scss'
import BeThere from '../../assets/bethere-image-promo.png'
import MarcaAi from '../../assets/marcai-image-promo.png'
import CoguPromo from '../../assets/cogu-promo.png'
import XEnglishPromo from '../../assets/x-english-promo.png'
import PelePromo from '../../assets/pele-promo.png'
import { Button } from '../button'
import { useOnScreen } from 'hooks/use-on-screen'

const categories = ['Personal Work', 'UI Design', 'Corporative Work']

const slides = {
  'Personal Work': [
    {
      title: 'BeThere',
      details: {
        description: 'BeThere is my personal iot system. The project started in 2018 as an Arduino prototype and evolved into a unique electronic system.',
        tech: 'C++, MQTT, Node JS, React JS, ESP microcontrollers'
      },
      imgSource: BeThere
    },
    {
      title: 'MarcaAi',
      details: {
        description: 'Marca aí started in 2019 as a native mobile app and now it is a modern PWA. With Marca aí the user can schedule a service and the business owner can offer services, manage schedulings and send notifications to customers',
        workDetails: 'On this app I develop all the product concept from the scratch, the UI components from design to development and the entire UX research.',
        tech: 'Node JS, React JS, React Native'
      },
      imgSource: MarcaAi
    }
  ],
  'UI Design': [
    {
      title: 'Cogumelos São Carlos',
      details: {
        description: 'Cogumelos São Carlos is a company that sells organic shimeji. This is the website mockup created to share recipes and their information in the web. I also worked to put their idea online.',
        tech: 'Vanilla JS, html, css'
      },
      imgSource: CoguPromo
    },
    {
      title: 'X English for Women',
      details: {
        description: 'Concept and UI design for X English for Women — an English school designed to empower women through language learning and professional growth.',
        tech: 'Figma'
      },
      imgSource: XEnglishPromo
    },
    {
      title: 'Pelé Eterno',
      details: {
        description: 'Yes, I am a soccer fan. This is just a landing page concept for our King Pele.',
        tech: 'Playing around with Figma'
      },
      imgSource: PelePromo
    }
  ],
  'Corporative Work': [
    {
      title: 'Pelé Eterno',
      details: {
        description: '',
        tech: ''
      },
      imgSource: ''
    },
    {
      title: 'Test',
      details: {
        description: '',
        tech: ''
      },
      imgSource: ''
    }
  ]
} as any

export const Section = () => {
  const [slideChange, setSlideChange] = useState(0)
  const [selectedSlide, setSelectedSlide] = useState(0)
  const [categoryToShow, setCategory] = useState(slides['Personal Work'])
  const [slideClassName, setSlideClass] = useState('')
  const [sectionAppearingClass, setSectionAppearingClass] = useState('')

  const sectionRef = useRef(null)

  const isOnScreen = useOnScreen(sectionRef)

  console.log({ isOnScreen})

  useEffect(() => {
    if(isOnScreen) {
      setSectionAppearingClass('appear')
      setSlideClass('fade-out')
    } else {
      setSectionAppearingClass('')
    }
  }, [isOnScreen])

  useEffect(() => {
    setSlideClass('fade-out')
  }, [slideChange])


  const renderPaginator = (collection: any) => {
    return (
      <ul className='paginator'>
        {categoryToShow.map((slide: any, index: number) => {
          return (
            <li className='square' key={slide.title}>
              <button
                onClick={() => {
                setSlideChange(index)
              }}>
              </button>
            </li>
          )
        })}
      </ul>
    )
  }

  const renderFilters = () => {
    return (
      <div className='filters'>
        {categories.map((category: any) => {
          return (
            <Button
              className={`category category--${sectionAppearingClass}`}
              key={category}
              onClick={() => {
                setCategory(slides[category])}
              }
              variant='outline'>
              {category}
            </Button>
          )
        })}
      </div>
    )
  }

  const renderSlide = (index = 0) => {
    const { title, imgSource, details: { tech, description } } = categoryToShow[index]
    return (
      <div className={`row slide slide--${slideClassName}`} key={`${title}-${index}`}>
        <div className='frame-corners'>
          <div className='corners-top'></div>
          <div className='corners-bottom'></div>
          <div className='stripes'>
            <img
              onAnimationEnd={() => {
                setSlideClass('fade-in')
                setSelectedSlide(slideChange)
              }}
              src={imgSource} alt='bethere' />
          </div>
        </div>
        <div className='project-details'>
          <p>
            {description}
          </p>
          <p>
            Techs: {`${tech}`}
          </p>
        </div>
    </div>
    )
  }

  return (
    <div className='main-section' ref={sectionRef}>
      <div className='row inner-section'>
          <div className='col'>
            <h2>My work</h2>
            {renderFilters()}
            <div className='frame'>
              {renderSlide(selectedSlide)}
              {renderPaginator(categoryToShow)}
            </div>
          </div>
      </div>
    </div>
  )
}