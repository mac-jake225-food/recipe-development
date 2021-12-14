import React from 'react'
import { render } from 'react-dom'
import './DateTime.css'
import FinalDate from './FinalDate'


/**
 * This class is rendering the current time from FinalDate and then displays it on the application in each page
 */
export class DateTime extends React.Component {
    
    constructor() {
        super();
        this.state = { time: FinalDate() };
        
        
    }


    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: FinalDate() }), 1000);
        }
    componentWillUnmount(){
        clearInterval(this.interval);
        }

    render() {
        return (
            <div className="timeClock">
                {this.state.time}
            </div>
        )     
    }
            
}

export default DateTime; 
