import Moon from '../assets/destination/image-moon.png'
import Mars from '../assets/destination/image-mars.png'
import Europa from '../assets/destination/image-europa.png'
import Titan from '../assets/destination/image-titan.png'
import { useState } from 'react'

const Destination =()=> {

    const destinations =  [
        {
        "name": "Moon",
        "images": {
            "png": "./assets/destination/image-moon.png",
            "webp": "./assets/destination/image-moon.webp"
        },
        "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384,400 km",
        "travel": "3 days"
        },
        {
        "name": "Mars",
        "images": {
            "png": "./assets/destination/image-mars.png",
            "webp": "./assets/destination/image-mars.webp"
        },
        "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        "distance": "225 mil. km",
        "travel": "9 months"
        },
        {
        "name": "Europa",
        "images": {
            "png": "./assets/destination/image-europa.png",
            "webp": "./assets/destination/image-europa.webp"
        },
        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "distance": "628 mil. km",
        "travel": "3 years"
        },
        {
        "name": "Titan",
        "images": {
            "png": "./assets/destination/image-titan.png",
            "webp": "./assets/destination/image-titan.webp"
        },
        "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "distance": "1.6 bil. km",
        "travel": "7 years"
        }
    ]

    const [destination, setDestination] = useState([destinations[0]])

    function changeActiveState(event){
        function remove(){
            document.querySelectorAll('.i').forEach(link=>link.classList.remove('active'))
        }
        remove()

        event.currentTarget.classList.add('active')
        const id = event.currentTarget.id
        
        const newDest = destinations.filter(dest=>
            dest.name === id )

        setDestination(newDest)
        }

    return (
        <div>
            <div className="heading-5 title"><span className="number">01 </span><span>PICK YOUR DESTINATION</span></div>
        
        <div className='destination-main'>
            <div>
                <img src={destination[0].name==="Moon"? Moon:
                destination[0].name==="Mars"? Mars:
                destination[0].name==="Titan"? Titan:
                destination[0].name==="Europa"? Europa: null } alt="planetpic" />
            </div>
            <div className='grid-2'>
                <div className='inner-nav'>
                    <div id='Moon' className='nav-text i active' onClick={changeActiveState}>moon</div>
                    <div id='Mars' className='nav-text i' onClick={changeActiveState}>mars</div>
                    <div id='Europa' className='nav-text i' onClick={changeActiveState}>europa</div>
                    <div id='Titan' className='nav-text i' onClick={changeActiveState}>titan</div>
                </div>
                <div className='heading-3'>{destination[0].name}</div>
                <div>{destination[0].description}</div>
                <div className='separator'></div>
                <div className='bottom-flex'>
                    <div>
                        <div className='subheading-2'>avg. distance</div>
                        <div className='subheading-1'>{destination[0].distance}</div>
                    </div>
                    <div  className='travel'>
                        <div className='subheading-2'>est. travel time</div>
                        <div className='subheading-1'>{destination[0].travel}</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Destination