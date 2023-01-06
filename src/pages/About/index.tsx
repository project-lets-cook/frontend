
import { Footer } from '../../../../../../Projeto doAcao/frontend/src/Components/footer'
import { TesteBox } from './styled'
import logo from '../../assets/icons/logo.png'
import { CardsAbout } from '../../Components/CardsAbout'
import { Link } from 'react-router-dom'


export const About = () => {
  return (
    <TesteBox>
      <div>
        <Link to='/'>Voltar para Home</Link>
        <img src={logo} alt="" />
        <CardsAbout></CardsAbout>
      </div>
      <Footer />
    </TesteBox>
  )
}