// import { useEffect, useState, useRef } from 'react'
import FadeInSection from '../FadeInSection/FadeInSection'
import AnomAnonMockup from '../../assets/AnomAnonMockup.png'
import DriftCastMockup from '../../assets/DriftCastMockup.png'
import FlyBinMockup from '../../assets/FlyBinMockup.png'
import './projects.scss'

// const FadeInSection = (props) => {
//     const [isVisible, setIsVisible] = useState(false)
//     const domRef = useRef(null)
//     useEffect(() => {
//         const observer = new IntersectionObserver(entries => {
//             entries.forEach(entry => setIsVisible(entry.isIntersecting))
//         })
//         observer.observe(domRef.current)
//         // return () => observer.unobserve(domRef.current)
//     }, [])

//     return (
//         <div className={`card fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
//             {props.children}
//         </div>
//     )
// }

export default function Projects() {

    return (
        <section id='projects' > 
            <FadeInSection>
                {/* <div className='card'> */}
                    <img src={DriftCastMockup} />
                    <h2>DriftCast - River Condition Monitoring MERN App</h2>
                    <div className="links">
                        <a href='https://drift-cast.herokuapp.com/' target='_blank'><i className="fa-solid fa-globe fa-xl"></i> Live Site</a>
                        <a href='https://github.com/spbovarnick/drift-cast' target='_blank'><i className="fa-brands fa-github fa-xl"></i> GitHub Repo</a>
                    </div>
                {/* </div> */}
            </FadeInSection>
            <FadeInSection>
                {/* <div className='card'> */}
                    <img src={AnomAnonMockup} />
                    <h2>AnomaliesAnonymous - UFO Sighting Django Project</h2>
                    <div className="links">
                        <a href='https://www.anomaliesanonymous.com/' target='_blank'><i className="fa-solid fa-globe fa-xl"></i> Live Site</a>         
                        <a href='https://github.com/spbovarnick/anomalies-anonymous' target='_blank'><i className="fa-brands fa-github fa-xl"></i> GitHub Repo</a>           
                    </div>
                {/* </div> */}
            </FadeInSection>
            <FadeInSection>
                {/* <div className='card'> */}
                    <img src={FlyBinMockup} />
                    <h2>FlyBin - Fly Organizing MEN App</h2>
                    <div className="links">
                        <a href='https://fly-bin.herokuapp.com/' target='_blank'><i className="fa-solid fa-globe fa-xl"></i> Live Site</a>
                        <a href='https://github.com/spbovarnick/fly-bin' target='_blank'><i className="fa-brands fa-github fa-xl"></i> GitHub Repo</a>                    
                    </div>
                {/* </div> */}
            </FadeInSection>
        </section>
    )
}