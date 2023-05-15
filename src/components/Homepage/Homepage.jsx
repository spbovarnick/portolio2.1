import './homepage.scss'
import globe from '../../assets/icons/globe.jpeg'

export default function Homepage() {

    return (
        <div id="home">
            <div id='homeDiv'>
                <h1>Hello World, I'm Sam</h1>
                <h3>a full-stack developer</h3>
                <div id='locationDiv'>
                <img src={globe} /><p> based in Los Angeles, CA</p>
                </div>
            </div>
        </div>
    )
}