import douglas from '../assets/crew/image-douglas-hurley.png'
import victor from '../assets/crew/image-victor-glover.png'
import mark from '../assets/crew/image-mark-shuttleworth.png'
import anousheh from '../assets/crew/image-anousheh-ansari.png'
import {useState} from 'react'


const Crew =()=> {

    const crew =  [
        {
        "name": "Douglas Hurley",
        "images": {
            "png": "./assets/crew/image-douglas-hurley.png",
            "webp": "./assets/crew/image-douglas-hurley.webp"
        },
        "role": "Commander",
        "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
        "name": "Mark Shuttleworth",
        "images": {
            "png": "./assets/crew/image-mark-shuttleworth.png",
            "webp": "./assets/crew/image-mark-shuttleworth.webp"
        },
        "role": "Mission Specialist",
        "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
        "name": "Victor Glover",
        "images": {
            "png": "./assets/crew/image-victor-glover.png",
            "webp": "./assets/crew/image-victor-glover.webp"
        },
        "role": "Pilot",
        "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        {
        "name": "Anousheh Ansari",
        "images": {
            "png": "./assets/crew/image-anousheh-ansari.png",
            "webp": "./assets/crew/image-anousheh-ansari.webp"
        },
        "role": "Flight Engineer",
        "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
    ]

    const [crewMember, setCrewMember] = useState([crew[0]])

    function changeActiveCircle(event){
        function remove(){
            document.querySelectorAll('.circles').forEach(circle=>circle.classList.remove('active-circle'))
        }
        remove()
        event.currentTarget.classList.add('active-circle')
        const id = event.currentTarget.id
        const newCrewMember = crew.filter(crew=>crew.role===id)
        setCrewMember(newCrewMember)
    }

    return (
        <div className='crew'>
            <div className="heading-5 title"><span className="number">02 </span><span>MEET YOUR CREW</span></div>
        
        <div className='destination-main crew-main'>
            
            <div className='grid-1'>
                <div className='inner-nav mobile-circles'>
                    <div className='circles active-circle' id='Commander' onClick={changeActiveCircle}></div>
                    <div className='circles' id='Mission Specialist' onClick={changeActiveCircle}></div>
                    <div className='circles' id='Pilot' onClick={changeActiveCircle}></div>
                    <div className='circles' id='Flight Engineer' onClick={changeActiveCircle}></div>
                </div>
                <div className="heading-4 role">{crewMember[0].role}</div>
                <div className="heading-3">{crewMember[0].name}</div>
                <div className='bio'>{crewMember[0].bio}</div>
                <div className='inner-nav main-circles'>
                    <div className='circles active-circle' id='Commander' onClick={changeActiveCircle}></div>
                    <div className='circles' id='Mission Specialist' onClick={changeActiveCircle}></div>
                    <div className='circles' id='Pilot' onClick={changeActiveCircle}></div>
                    <div className='circles' id='Flight Engineer' onClick={changeActiveCircle}></div>
                </div>
            </div>
            <div>
                <img src={crewMember[0].role==='Commander'? douglas:
                crewMember[0].role==='Mission Specialist'? mark:
                crewMember[0].role==='Pilot'? victor:
                crewMember[0].role==='Flight Engineer'? anousheh: null} alt="crewpic" />
                <div className='separator'></div>
            </div>
            </div>
        </div>
    )
}

export default Crew