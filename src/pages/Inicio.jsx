import {Link, useNavigate} from 'react-router-dom'
import logo from '../assets/react.svg'
import '../App.css'

const Home = () => {

    return (
        <div>
            <h1>Izonça Sapin</h1>
           <p><h2>O horror</h2><br/>
            Pela necessidade de amar, todos morreriam<br/>
            O amor está morrendo, pelo último vestígio de fé<br/>
            O céu cai diante de meus olhos, infurece meus sentidos<br/>
            Ocorrendo a extrapolação da vida<br/>
            Quebra minhas pontes e arrasa minhas lágrimas<br/>
            Condensando-as em um lago, onde me afogo.<br/>
           </p>
                <img className='img-fluid' src={logo}
                        alt='logo' />
           
        </div>
    )
}
export default Home