import { useState } from 'react'
import './resume.scss'
import Resume2023Pg1 from '../../assets/Resume2023Pg1.jpg'
import Resume2023Pg2 from '../../assets/Resume2023Pg2.jpg'
import chevronRightSolid from '../../assets/icons/chevronRightSolid.svg'
import chevronLeftSolid from '../../assets/icons/chevronLeftSolid.svg'


export default function Resume() {
    const [resPages, setResPages] = useState([<img className='pages' src={Resume2023Pg1} />, <img className='pages' src={Resume2023Pg2} />])
    const [currentPage, setCurrentPage] = useState(resPages[0])

    function pgBtn() {
        currentPage === resPages[0] ? setCurrentPage(resPages[1]) : setCurrentPage(resPages[0])
    }

    let backBtn = <img className='btn' src={chevronLeftSolid} onClick={pgBtn} />
    currentPage === resPages[0] ? backBtn = <img className='btn' src={chevronLeftSolid} style={{opacity:.3, cursor:'inherit'}} /> : null

    let nextBtn = <img className='btn' src={chevronRightSolid} onClick={pgBtn} />
    currentPage === resPages[1] ? nextBtn = <img className='btn' src={chevronRightSolid} style={{opacity:.3, cursor:'inherit'}} /> : null
    return (
        <section id='resume'>
            <div className='pages'>
                {backBtn}
                {currentPage}
                {nextBtn}
            </div>
            <div className='link'>
                <p>You can download a copy <a href='https://docs.google.com/document/d/1lu4nGLGtMJUyvEDbPbaYS9oTqpd046OqtOwW3i1c--M/edit?usp=sharing' target='_blank'>here</a></p>
            </div>
        </section>
    )
}