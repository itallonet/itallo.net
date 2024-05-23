import React from "react";
import ProfilePic from "../assets/images/profile.jpg";
import "../assets/css/home.css";

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
                    <div>
                        No posts at the moment
                    </div>
                </div>
            </main>
        );
    }
}