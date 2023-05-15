import './footer.scss'
import envelope from '../../assets/icons/envelope.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import github from '../../assets/icons/github.svg'

export default function Footer() {

    return (
        <footer>
            <div id="copyright">
                <p>&copy; Sam Bovarnick 2023</p>
            </div>
            <div id="socials">
                <a 
                href="https://www.linkedin.com/in/sam-bovarnick/"
                target="_blank">
                    <img width="20px" src={linkedin} />
                </a>
                <a
                href="mailto:spbovarnick@gmail.com"
                target="_blank">
                    <img width="20px" src={envelope} />
                </a>
                <a 
                href="https://github.com/spbovarnick"
                target="_blank">
                    <img width="20px" src={github} />
                </a>
            </div>   
        </footer>
    )
}