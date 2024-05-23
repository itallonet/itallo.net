import React from "react";
import ProfilePic from "../assets/images/profile.jpg";
import Card from "../posts/card";

/**
 * HomeView
 * @description Home page
 * @returns {JSX.Element} HomeView
 */
export default class HomeView extends React.Component {
    render() {
        return (
            <main id="home">
                <div id="banner">
                    <img src={ProfilePic} />
                </div>
                <div id="identity">
                    <h1>Itallo Rian</h1>
                    <span><strong>IT Engineer</strong> focused on software development and observability</span> <br />
                    <small>#dotnet #javascript #docker #kubernetes #aws #opentelemetry #grafana #newrelic</small>
                </div>
                <div id="social">
                    <a href="https://github.com/itallonet" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-github"></i> GitHub
                    </a>
                    <a href="https://linkedin.com/in/itallonet" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="mailto:itallorian3@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i class="fa-solid fa-envelope"></i> E-mail
                    </a>
                </div>
                <div id="posts">
                    <h3>Blog</h3>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", width: '100%', flexWrap: 'wrap' }}>
                        <Card 
                            date='Mar 1, 2022'
                            image="https://miro.medium.com/v2/resize:fit:828/format:webp/1*Nw4LPSnLoRJmcEI8_AirkA.jpeg"
                            title="A New Milestone: Unveiling Boundless Possibilities" 
                            link="/post/a-new-milestone"
                        />
                    </div>
                </div>
            </main>
        );
    }
}