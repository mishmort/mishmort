import Resumesvg from './assets/logos/resume.svg'
import Codepensvg from './assets/logos/codepen.svg'
import Githubsvg from './assets/logos/github.svg'
import Linkedinsvg from './assets/logos/linkedin.svg'
import Twittersvg from './assets/logos/twitter.svg'
import Resume from './Camisha_Mortensen_Resume.pdf'

const About = () => {
    return ( 
    
    <div className="about">

        <div className="bio">

            <div className="biotitle">ABOUT</div>
                <span>Hi, I'm Misha<br/><br/>

                I'm a developer and designer living in Toronto.
                I'm a fourth year computer science student at McMaster University 
                and a Canadian-American dual citizen. 
                I enjoy combining my love for art and programming.<br/><br/> 

                I started at the University of Waterloo
                in a design and business program.<br/><br/> 
                
                Now I'm working on full-stack web projects
                and solidifying my understanding of the fundamentals of computer science.<br/><br/>

                Outside of my work, I spend time running, playing games, sewing and watching cartoons.<br/><br/>

                Please check out my work and find my resume below. Feel free to reach out anytime!<br/><br/>

                Misha :-)
                </span>
        </div>

        <div className="selfie">
        </div>

        <div className="links">
            <div className="resumetitle">RESUME</div>
            <div className="resumetitle">TWITTER</div>
            <div className="resumetitle">CODEPEN</div>
            <div className="resumetitle">LINKEDIN</div>
            <div className="resumetitle">GITHUB</div>


            <a  
                className="link" 
                target="_blank"
                href={Resume}
                style={{backgroundImage: `url(${Resumesvg})` }}
            ></a>
            
            <a  
                className="link" 
                target="_blank"
                href="https://twitter.com/_mishmort_"
                style={{backgroundImage: `url(${Twittersvg})` }}
            ></a>

            <a  
                className="link" 
                target="_blank"
                href="https://codepen.io/mishmort"
                style={{backgroundImage: `url(${Codepensvg})` }}
            ></a>

            <a  
                className="link" 
                target="_blank"
                href="https://www.linkedin.com/in/camisha-mortensen-10b9b1110/"
                style={{backgroundImage: `url(${Linkedinsvg})` }}
            ></a>

            <a  
                className="link" 
                target="_blank"
                href="https://github.com/mishmort"
                style={{backgroundImage: `url(${Githubsvg})` }}
            ></a>
                
        </div>
        

    </div>
    
    );
}
 
export default About;