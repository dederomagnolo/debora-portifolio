import _ from 'lodash'
import './styles.scss'

import { useScrollPosition } from 'hooks/use-scroll-position'

export const Header = () => {
  // const updateHeaderPosition = (pageYOffset: number) => {
  //   const header = document.getElementById('animated-header')
  //   if (header) {
  //     header.style.top = `${0.3 * pageYOffset}px`
  //   }
  // }
  const position = useScrollPosition()
  const hide = position > 1300;
  return (
    <div className={hide ? '' : 'animated-header'} id='animated-header'>
      <div className="wrapper">
        <div className="inner-wrapper">
          <h1>Débora R. Romagnolo</h1>
          <div className={hide ? '' : 'landscape'}></div>
        </div>
        <div className='triangle'></div>
        <div className='role'>
          <h2>Full stack developer</h2>
        </div>
      </div>
    </div>
  )
}