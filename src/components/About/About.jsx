import FadeInSection from '../FadeInSection/FadeInSection'
import './about.scss'
import Headshot from '../../assets/Headshot.jpg'
import Django from '../../assets/icons/Django.svg'
import ExpressJS from '../../assets/icons/ExpressJS.svg'
import NodeJS from '../../assets/icons/NodeJS.svg'
import TailwindCSS from '../../assets/icons/TailwindCSS.svg'
import squareJs from '../../assets/icons/squareJs.svg'
import html5 from '../../assets/icons/html5.svg'
import css3 from '../../assets/icons/css3.svg'
import sass from '../../assets/icons/sass.svg'
import markdown from '../../assets/icons/markdown.svg'
import python from '../../assets/icons/python.svg'
import bootstrap from '../../assets/icons/bootstrap.svg'
import tools from '../../assets/icons/tools.svg'

export default function About() {

    return (
        <section id='about'>
            <div>
                <h1>About me</h1>
                <FadeInSection>
                    <div id="personal" >
                        <p>I'm a software developer and born tinkerer. I have a compulsion for learning how systems work, how I can disassemble them, and put them back together has led me to develop a diverse set of skills ranging from backcountry trail-building to bagel making to building full-stack web apps using Django, Node.js, and React. <br/><br/>
                        Before my career in development, my passion for learning led me through a Master of Education and classroom teaching. Being able to effectively distill and communicate complex ideas and concepts and facilitate learning are integral components of my own learning and development. <br/><br/>
                        As a developer, I am driven by the same thirst for knowledge. No matter the size or scope of a project, I methodically identify core problems and implement efficient, DRY solutions.</p>
                        <img src={Headshot} />
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div id="technologies">
                        <h2>Technologies</h2>
                        <div id="langAndFrame">
                            <div id="languages">
                                <h3>Languages I use:</h3>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td><img height="24px" src={squareJs} /></td>
                                        <td>JavaScript</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={html5} /></td>
                                        <td>HTML5</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={css3} /></td>
                                        <td>CSS</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={sass} /></td>
                                        <td>Sass</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={markdown} /></td>
                                        <td>Markdown</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={python} /></td>
                                        <td>Python</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="frameworks">
                                <h3>Frameworks I use:</h3>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td><img height="24px" src={bootstrap} /></td>
                                        <td>Bootstrap</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={Django} /></td>
                                        <td>Django</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={ExpressJS} /></td>
                                        <td>Express</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={NodeJS} /></td>
                                        <td>Node.js</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={TailwindCSS} /></td>
                                        <td>TailwindCSS</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div id="tools">
                            <h3>Tools I use:</h3>
                            <div id="tool-tables">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td><img height="24px" src={tools} /></td>
                                        <td>MongoDB</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={tools} /></td>
                                        <td>PostgresSQL</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={tools} /></td>
                                        <td>SQLite</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={tools} /></td>
                                        <td>AWS</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={tools} /></td>
                                        <td>Discord</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td><img height="24px" src={tools} /></td>
                                        <td>Figma</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={tools} /></td>
                                        <td>Google Cloud Platform</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={tools} /></td>
                                        <td>Git</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={tools} /></td>
                                        <td>GitHub</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={tools} /></td>
                                        <td>Heroku</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td><img height="24px" src={tools} /></td>
                                        <td>Photoshop</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={tools} /></td>
                                        <td>Postman</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={tools} /></td>
                                        <td>Stack Overflow</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={tools} /></td>
                                        <td>Vite</td>
                                    </tr>
                                    <tr>
                                        <td><img height="24px" src={tools} /></td>
                                        <td>Visual Studio Code</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    )
}