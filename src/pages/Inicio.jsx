import {Link, useNavigate} from 'react-router-dom'
import logo from '../assets/react.svg'
import '../App.css'

const Home = () => {

    return (
        <div>
            <h2>Izonça Sapins</h2>
           <p>Outra tela Inicial</p>
                <img className='img-fluid' src={logo}
                        alt='logo' />
           
        </div>
    )
}
export default Home