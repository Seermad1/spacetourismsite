import { Link } from 'react-router-dom'

const Home =()=> {
    return (
       
        <main>
            <div className='home-grid'>
                <div className='home-text'>
                    <div className='heading-5'>So, you want to travel to</div>
                    <div className='heading-1'>Space</div>
                    <div>
                    Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!
                    </div>
                </div>
                <div className='explore'>
                    <Link to='/destinations' className='heading-4'>Explore</Link>
                </div>
            </div>
        </main>
    )
}

export default Home