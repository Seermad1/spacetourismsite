import {Link} from 'react-router-dom'
import Logo from '../assets/shared/logo.svg'
import Open from '../assets/shared/icon-hamburger.svg'
import Close from '../assets/shared/icon-close.svg'


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
                <img src={Logo} alt="logo" />
            </div>
                <div className='line'>

                </div>
                    <div className='check'>
                        
                    <input type='checkbox' />
                    
                    <img src={Open} alt="logo" />
                    <img src={Close} alt="logo" />
                    </div>
                <div className='nav-items'>
                    <Link className='nav-text active' to='/' onClick={changeActive}>
                    <span className='nav-number'>00</span><span className="nav-item"> HOME</span>
                    </Link>
                    <Link className='nav-text' to='/destinations' onClick={changeActive}>
                    <span className='nav-number'>01</span><span className="nav-item"> DESTINATION</span>
                    </Link>
                    <Link className='nav-text' to='/crew' onClick={changeActive}>
                    <span className='nav-number'>02</span><span className="nav-item"> CREW</span>
                    </Link>
                    <Link className='nav-text' to='/technology' onClick={changeActive}>
                    <span className='nav-number'>03</span><span className="nav-item"> TECHNOLOGY</span>
                    </Link>
                       
                </div>
        </nav>
        </header>
)
}

export default Nav