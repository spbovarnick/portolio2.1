import './pagenotfound.scss'
import frown from '../../assets/icons/frown.png'

export default function PageNotFound() {

    return (
        <section id='pagenotfound'>
            <div id='flextainer'>
                <div id='text'>
                    <h1>Hmmm...</h1>
                    <h3>That'll be a 404, I can't find <br/>
                    what you're looking for</h3>
                </div>
                <div id='img'>
                    <img src={frown} />
                </div>
            </div>
        </section>
    )
}