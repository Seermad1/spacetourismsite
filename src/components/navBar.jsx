import {Link} from 'react-router-dom'
import Logo from '../assets/shared/logo.svg'


const  Nav =()=>{

    function changeActive(event){
        
        function remove(){
            document.querySelectorAll('.nav-text').forEach(link=>link.classList.remove('active'))
        }
        remove()
        event.currentTarget.classList.add('active')
    }

    return (
    <header>
        <nav className='nav'>
            <div>
                <img  className='logo' src={Logo} alt="logo" />
            </div>
            <div className='line'>

            </div>
    
            <input type='checkbox' id='checkbox' />
            <label htmlFor='checkbox' className='toggle'>
                <div className='ham-line'></div>
                <div className='ham-line'></div>
                <div className='ham-line'></div>
            </label>
        
            <div className='nav-items'>
                <div className='links'>
                    <Link className='nav-text  active' to='/' onClick={changeActive}>
                    <span className='nav-number'>00</span><span className="nav-item"> HOME</span>
                    </Link>
                </div>
                <div className='links'>
                    <Link className='nav-text' to='/destination' onClick={changeActive}>
                    <span className='nav-number'>01</span><span className="nav-item"> DESTINATION</span>
                    </Link>
                </div>
                <div className='links'>
                    <Link className='nav-text' to='/crew' onClick={changeActive}>
                    <span className='nav-number'>02</span><span className="nav-item"> CREW</span>
                    </Link>
                </div>
                <div className='links'>
                    <Link className='nav-text' to='/technology' onClick={changeActive}>
                    <span className='nav-number'>03</span><span className="nav-item"> TECHNOLOGY</span>
                    </Link>
                </div>
            </div>
        </nav>
        
        
        </header>
)
}

export default Nav