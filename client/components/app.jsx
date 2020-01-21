import React from 'react';
import Youtube from 'react-youtube';

export default class App extends React.Component{
    constructor(props){
        super(props);
        const opts = {
            height: '315',
            width: '560',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1
            }
          };
       
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
            url: "2g811Eo7K8U",
            newUrl: "",
            currentTime: "11:00:00 AM EST",
            targetTime: "12:00:00 AM EST"
        }
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        const url = document.getElementById('urlInput').value;
        let video_id = url.split('v=')[1];
        let ampPos = video_id.indexOf('&');
        if(ampPos != -1) {
            video_id = video_id.substring(0, ampPos);
          }
        this.setState({
            url: video_id
        });
    }


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
                <input id="urlInput" type="text" onChange={this.handleChange} placeholder="Enter url here"></input>
                <input type="submit" value="Submit" onClick={this.handleSubmit}></input>
            </div>
            
            <div className="video">
                <Youtube
                    videoId={this.state.url}
                    opts={this.opts}
                    onReady={this.onReady}/>
            </div>
          </div>  
        );
    }
}