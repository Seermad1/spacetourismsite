import vehicle from "../assets/technology/image-launch-vehicle-portrait.jpg"
import spaceport from "../assets/technology/image-spaceport-portrait.jpg"
import capsule from "../assets/technology/image-space-capsule-portrait.jpg"
import vehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg"
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg"
import capsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg"
import {useState} from 'react'

const Technology =()=> {

    const technology = [
        {
        "name": "Launch vehicle",
        "images": {
            "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
            "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
        },
        "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
        "name": "Spaceport",
        "images": {
            "portrait": "./assets/technology/image-spaceport-portrait.jpg",
            "landscape": "./assets/technology/image-spaceport-landscape.jpg"
        },
        "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
        "name": "Space capsule",
        "images": {
            "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
            "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
        },
        "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    ]

    const [tech, setTech] = useState([technology[0]])

    function handleActiveCircle(event){
        function remove(){
            document.querySelectorAll('.numbered-circles').forEach(circle=>circle.classList.remove('active-numbered-circle'))
        }
        remove()
        event.currentTarget.classList.add('active-numbered-circle')
        const id = event.currentTarget.id
        const newTech = technology.filter(tech=>tech.name===id)
        setTech(newTech)
    }

    return (
        <div className="technology">
            <div className="heading-5 title"><span className="number">03 </span><span>SPACE LAUNCH 101</span></div>
            <div className="technology-main">
                <div className="landscape-image">
                    <img src={tech[0].name==='Launch vehicle'? vehicleLandscape:
                    tech[0].name==='Spaceport'? spaceportLandscape :
                    tech[0].name==="Space capsule"? capsuleLandscape: null} alt='techpic' />
                </div>
                <div className="inner-flex">
                    <div className="circles-container">
                        <div id='Launch vehicle' onClick={handleActiveCircle} className="numbered-circles heading-4 active-numbered-circle">1</div>
                        <div id="Spaceport" onClick={handleActiveCircle} className="numbered-circles heading-4">2</div>
                        <div id="Space capsule" onClick={handleActiveCircle} className="numbered-circles heading-4">3</div>
                    </div>
                    <div className="tech-text">
                        <div className="terminology">THE TERMINOLOGY...</div>
                        <div className="heading-3">{tech[0].name}</div>
                        <div className="description">{tech[0].description}</div>
                    </div>
                </div>
                <div className="image-container">
                    <img src={tech[0].name==='Launch vehicle'? vehicle:
                    tech[0].name==='Spaceport'? spaceport:
                    tech[0].name==="Space capsule"? capsule: null} alt='techpic' />
                </div>
            </div>
        </div>
        
    )
}

export default Technology