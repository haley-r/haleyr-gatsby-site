import React, {Component} from "react"
import './index.css';

class Index extends Component {
    state = {
        currentStyleIndex: 0,
        listOfStyles:['none', 'mod', 'sporty', 'metal', 'rose-code', 'modern', 'pop', 'screen'],
    }
    changeStyle=()=>{
        if (this.state.currentStyleIndex<this.state.listOfStyles.length-1){
            this.setState({
                currentStyleIndex: this.state.currentStyleIndex+1
            })
        }
        else{
            this.setState({
                currentStyleIndex: 0
            })
        }
        window.scrollTo(0, 0); 
    }
    render(){
        return(
            <div className={this.state.listOfStyles[this.state.currentStyleIndex]}>
                <div id="background-div"></div>
                <div id="button-div">
                    <button onClick={this.changeStyle}>not your style? try another!</button>
                </div>

                <div id="content-div">
                    <h1><span id="firstname">Haley</span> <span id="lastname">Ryan</span></h1>
                    <div id="main-text">
                        <p>I'm a full-stack software engineer in Minneapolis with a background in design and art-making.</p>
                        <p>Becoming a developer is part of a lifelong practice of self-motivated exploration and learning how to make things that are useful, thought-provoking, joy-inducing, and easy to share.</p>
                        <p>When I'm not coding, I'm probably taking care of my garden, filling up sketchbooks, fixing a bike I rescued from a dumpster, making collages, or trying to decide what I want to learn next.</p>
                        <p>I'm interested in the ways technology can give more than it takes, and how its reach can be more inclusive and less intrusive.</p>
                        <p id="github">github: <a href="https://github.com/haley-r">haley-r</a></p>
                        <p id="last-paragraph">email: haleyryan0000@gmail.com</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default (Index);
