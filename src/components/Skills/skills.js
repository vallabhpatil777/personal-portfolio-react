import React from 'react'
import './skills.css'
import pl from '/Users/vallabhpatil777/Documents/portfolio/portfolio/src/assets/prog1.webp'
import webdev from '/Users/vallabhpatil777/Documents/portfolio/portfolio/src/assets/webdev.png'
import database from '/Users/vallabhpatil777/Documents/portfolio/portfolio/src/assets/database.png'
import tool from '/Users/vallabhpatil777/Documents/portfolio/portfolio/src/assets/tool.png'
import ml from '/Users/vallabhpatil777/Documents/portfolio/portfolio/src/assets/ml.png'
import agile from '/Users/vallabhpatil777/Documents/portfolio/portfolio/src/assets/agile.png'
import soft from '/Users/vallabhpatil777/Documents/portfolio/portfolio/src/assets/soft.png'



const skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>About Me</span>
        <span className='skillDesc'>I am skilled and passionate software developer with professional experience in software engineering. Passionate about building scalable web applications and working on innovative projects in Python, Java, JavaScript, Web Development, Machine Learning, Data Analytics, and Cybersecurity.</span>
   <div className='skillBars'>
    <div className='skillBar'>
        <img src={pl} alt='skillImg' className="skillImg"/>
        <div className='skilltext'>
            <h2>Programming Languages</h2>
            <p>Python, Java, JavaScript, C++</p>
        </div>
    </div>
    <div className='skillBar'>
        <img src={webdev} alt='skillImg' className="skillImg"/>
        <div className='skilltext'>
            <h2>Web Development</h2>
            <p>Front-End: HTML, CSS, React, Redux <br/> Back-End: Django, Spring Boot, Node.js <br/> REST API Development</p>
        </div>
    </div>
    <div className='skillBar'>
        <img src={database} alt='skillImg' className="skillImg"/>
        <div className='skilltext'>
            <h2>Database</h2>
            <p>SQL</p>
        </div>
    </div>
    <div className='skillBar'>
        <img src={tool} alt='skillImg' className="skillImg"/>
        <div className='skilltext'>
            <h2>Tools and Technologies</h2>
            <p>Version Control: Git, GitHub <br/>
CI/CD: Jenkins <br/>
Cloud Platforms: AWS <br/>
DevOps: Docker</p>
        </div>
        
    </div>

    <div className='skillBar'>
        <img src={ml} alt='skillImg' className="skillImg"/>
        <div className='skilltext'>
            <h2>Specialized Area</h2>
            <p>Machine Learning: TensorFlow, NumPy, Pandas, scikit-learn <br/>
Natural Language Processing <br/>
Computer Vision <br/>
Data Analytics</p>
        </div>
        
    </div>
    <div className='skillBar'>
        <img src={agile} alt='skillImg' className="skillImg"/>
        <div className='skilltext'>
            <h2>Agile Development</h2>
            <p>JIRA <br/> Scrum Methodology</p>
        </div>
        
    </div>
    <div className='skillBar'>
        <img src={soft} alt='skillImg' className="skillImg"/>
        <div className='skilltext'>
            <h2>Soft Skills</h2>
            <p>Problem-Solving <br/>
Team Collaboration <br/>

Adaptability</p>
        </div>
        
    </div>
   </div>
   
    </section>
  )
}

export default skills