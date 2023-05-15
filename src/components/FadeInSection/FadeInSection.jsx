import { useEffect, useState, useRef } from 'react'
import './fadeinsection.scss'

export default function FadeInSection(props) {
    const [isVisible, setIsVisible] = useState(false)
    const domRef = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting))
        })
        observer.observe(domRef.current)
    }, [])

    return (
        <div className={`card fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            {props.children}
        </div>
    )
}