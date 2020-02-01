import React from 'react';

export default class Timers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentTime: new Date().toLocaleTimeString(),
            targetTime: this.props.targetTime
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleTimeString()
            });
        }, 1000);
    }
    render(){
        return (
            <div className="timersContainer container">
                <div className="targetTime">
                    <h2>Set Time:</h2>
                    <input id="set-time" type="time" name="set-time"/>
                </div>
                <div className="timers text-center">
                    <div className="currentTime col-4 mr-1">
                        <h4>Current Time:</h4>
                        <h4>{this.state.currentTime}</h4>
                    </div>
                    <div className="remainingTime col-4">
                        <h4>Remaining Time:</h4>
                        <h4>01:00:00</h4>
                    </div>
                </div>
            </div>
        );
    }
}
