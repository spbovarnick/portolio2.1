// import { useEffect, useState, useRef } from 'react'
import FadeInSection from '../FadeInSection/FadeInSection'
import AnomAnonMockup from '../../assets/AnomAnonMockup.png'
import DriftCastMockup from '../../assets/DriftCastMockup.png'
import FlyBinMockup from '../../assets/FlyBinMockup.png'
import WAFMockup from '../../assets/WAFMockup.png'
import globe from '../../assets/icons/globe.jpeg'
import github from '../../assets/icons/github.svg'
import './projects.scss'

export default function Projects() {

    return (
        <section id='projects' > 
            <FadeInSection>
                <div className='card'>
                    <img src={WAFMockup} className='mockup' />
                    <h2>World Arts Foundation - React and Rails Digital Archive</h2>
                    <div className="links">
                        <a href='https://www.worldartsfoundation.org/archive-beta' target='_blank'><img src={globe} className='icon' /> Live Site</a>
                        <a href='https://github.com/leeritter/waf' target='_blank'><img src={github} className='icon' /> GitHub Repo</a>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className='card'>
                    <img src={DriftCastMockup} className='mockup' />
                    <h2>DriftCast - River Condition Monitoring MERN App</h2>
                    <div className="links">
                        <a href='https://drift-cast.herokuapp.com/' target='_blank'><img src={globe} className='icon' /> Live Site</a>
                        <a href='https://github.com/spbovarnick/drift-cast' target='_blank'><img src={github} className='icon' /> GitHub Repo</a>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className='card'>
                    <img src={AnomAnonMockup} className='mockup' />
                    <h2>AnomaliesAnonymous - UFO Sighting Django Project</h2>
                    <div className="links">
                        <a href='https://www.anomaliesanonymous.com/' target='_blank'><img src={globe} className='icon' /> Live Site</a>         
                        <a href='https://github.com/spbovarnick/anomalies-anonymous' target='_blank'><img src={github} className='icon' /> GitHub Repo</a>           
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className='card'>
                    <img src={FlyBinMockup} className='mockup' />
                    <h2>FlyBin - Fly Organizing MEN App</h2>
                    <div className="links">
                        <a href='https://fly-bin.herokuapp.com/' target='_blank'><img src={globe} className='icon' /> Live Site</a>
                        <a href='https://github.com/spbovarnick/fly-bin' target='_blank'><img src={github} className='icon' /> GitHub Repo</a>                    
                    </div>
                </div>
            </FadeInSection>
        </section>
    )
}