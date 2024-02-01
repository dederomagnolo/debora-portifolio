import { Header } from './components/header'
import { Screen } from './components/screen'
import { Section } from './components/section'
import { Footer } from './components/footer'

import './app.scss'

function App() {
  return (
    <div className='app-container'>
      <Header />
      <div className='body-content'>
        <Screen />
        <Section />
        <Footer />
      </div>
    </div>
  )
}

export default App;
