import React from "react"

export default function About(){
    return(
        <div>
            <img className="img--css" src="https://lh5.googleusercontent.com/cGbUCsT-eaBwpXV4uD63ff1ixZQKtNZAqTQ_W83ge3OgCm-S24cvHBj9_LBC6RgtgZI=w2400" />

            <h1 id="info">Vaibhav Desale</h1>
            <h3>Frontend Developer</h3> 
            <h4>vaibhavd.website</h4>

            <div id="disp">
               <a href="https://vaibhavdesale103@gmail.com"> <button id="first" type="button">Email</button></a>
                <a href="https://www.linkedin.com/in/vaibhav-desale-307615224/"><button id="second" type="button">Linkedin</button></a>
                
            </div>

            <h1>About</h1>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
    )
}