import './index.scss';
import LogoJ from '../../../assets/images/logo-j-light.png'

const Logo = () => {

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoJ} alt='J' />
        </div>
    )
}

export default Logo
