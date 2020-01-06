import React from 'react';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
         return (
            <div>
                <h1 className="header">VIDEO SYNC THING</h1>
                <VideoSync />
            </div>
         )
    }
    
}

class VideoSync extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            newUrl: "",
            currentTime: "11:00:00 AM EST",
            targetTime: "12:00:00 AM EST"
        }
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        this.setState({
            url: document.getElementById('urlInput').value
        });
    }

    // handleChange(url){
    //     console.log(document.getElementById('userInput').value);
    //     this.setState({
    //         newUrl: url
    //     })
    // }

    render(){
        return (
          <div className="mainBody">

            <div className="targetTime">
                <h2>Set Time:</h2>
                <h1>{this.state.targetTime}</h1>
            </div>
            <div className="timers">
                <div className="currentTime">
                    <h4>Current Time:</h4>
                    <h4>{this.state.currentTime}</h4>
                </div>
                <div className="remainingTime">
                    <h4>Remaining Time:</h4>
                    <h4>01:00:00</h4>
                </div>
            </div>

            <div className="urlContainer">
                <input id="urlInput" type="text" onChange={this.handleChange} placeholder={this.state.url}></input>
                <input type="submit" value="Submit" onClick={this.handleSubmit}></input>
            </div>
            
            <div className="video">
                <iframe width="560" height="315" src={this.state.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>  
        );
    }
}