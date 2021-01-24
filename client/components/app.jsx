import React from 'react';
import Video from './Video'

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
          //time when page is loaded
          startTime: new Date().getTime(),
          //progressing time in milliseconds
          time: new Date().getTime(),
          play: false,
          //url received in the text input
          url: '',
          //the url received by the Video component as a prop
          setUrl: '',
          month: (new Date().getMonth()).toString(),
          day: (new Date().getDate()).toString(),
          year: (new Date().getFullYear()).toString(),

          //time set by user to start video
          setTime: null
        }
      }

      componentDidMount(){
        this.intervalID = setInterval(
          ()=> this.tick(),
          1000
        )
      }

      componentWillUnmount(){
        clearInterval(this.intervalID)
      }

      tick(){
        this.setState({
          //Changes state of time every second
          time : new Date().getTime()
        }, ()=>{
          //newTime is null until user sets a time for video to go off
          if(this.state.newTime){
            //if the current time passes  the set time then the video will play
            if(this.state.time>this.state.newTime){
              console.log("Current Time: ", this.state.time, "Set Time: ", this.state.newTime);
              this.setState({
                play: true
              })
            }
          }
        }
        )
      }

      //Video component receives url as a prop from input field
      enterUrl=()=>{
        this.setState({
          setUrl: this.state.url
        })
      }

      handleChange = (e) => {
        this.setState({
          [e.target.id] : e.target.value
        }, console.log(this.state))
      }

      //receive time from HTML input (having trouble syncing time)
      handleTime = (e) =>{
        this.setState({
          newTime: (new Date(this.state.year, this.state.month,this.state.day, this.state.setTime.slice(0,2), this.state.setTime.slice(3,6)).getTime())
      })}



      render(){

        return(
          <div className="App">
            <h1>Youtube Syncer</h1>
            <div className="url_input">
              <h5>Enter a YouTube link</h5>
              <input onChange={this.handleChange} type="text" id="url" />
                <button onClick = {this.enterUrl}>Enter Url</button>
            </div>
            <div className="player">
              <Video play={this.state.play} url={this.state.setUrl} />
            </div>
            <h5>Enter the start time.</h5>
            <input onChange={this.handleChange} type="time" id="setTime" />
            <button onClick={this.handleTime}>Set</button>
            <footer>
              <h6>Created by Vannarith Sar</h6>
              <a href="mailto:vannsar@gmail.com">Looking to hire?</a>
            </footer>
          </div>
        )
      }
}
