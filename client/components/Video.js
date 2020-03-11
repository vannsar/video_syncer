import React, { Component } from 'react';
import Youtube from 'react-player';

class Video extends Component{

    constructor(props){
      super(props);
      this.state = {
        play: this.props.play,
        duration: 0
      }
    }
    componentWillReceiveProps(props){
      this.setState({
        play: this.props.play
      })
    }

    handleDuration = (duration) => {
      console.log('onDuration', duration)
      this.setState({ duration })
    }

    ref = player => {
      this.player = player
    }


    render(){



        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: true
            }
          };


        return(
         <div>
          <Youtube
            ref={this.ref} url={this.props.url}
            playing={this.props.play}
            onDuration={this.handleDuration}
          />
          </div>

        )
    }

}

export default Video
