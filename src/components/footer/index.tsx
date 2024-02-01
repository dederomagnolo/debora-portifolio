import GitHub from 'assets/icons/github.png'
import Instagram from 'assets/icons/instagram.png'
import Linkedin from 'assets/icons/linkedin.png'
import Email from 'assets/icons/mail.png'
import WhatsApp from 'assets/icons/whatsapp.png'
import { useScrollPosition } from 'hooks/use-scroll-position'
import './styles.scss'

const icons = [GitHub, Instagram, Linkedin, Email, WhatsApp]

export const Footer = () => {
  const parallaxOverlay =  (positionY: number) => {
    const contentElement = document.getElementById('footer-content')
    if(contentElement) {
      contentElement.style.paddingTop = `${positionY * 0.07}px`
    }
  }
  useScrollPosition(parallaxOverlay)
  return (
    <footer>
      <div className='overlay'>
        <div className='content' id='footer-content'>
          <h2>What are you waiting to bring your digital to life? Let's get in touch.</h2>
          <div className='social-media'>
            {icons.map(icon => {
              return(
                <img src={icon} alt='' />
              )
            })}
          </div>
        </div>
      </div>
      
      <div className='copyright'>
        Copyright © Débora R. Romagnolo
      </div>
    </footer>
  )
}