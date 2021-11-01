import React from 'react'
import './DateTime.css'

export const DateTime = () => {
    var currentTime = new Date()
    function timeClock() {
        if(currentTime.getHours() <= 12){
            return currentTime.getHours()
        } else {
            return currentTime.getHours() - 12
        }

    }
        return (
            <div className="timeClock">
                {(currentTime.getMonth()+1 + '/' + currentTime.getDate() + '/' +currentTime.getFullYear() + ' ' + 
                (timeClock())) + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds() } 
            </div>
        )      
}

export default DateTime; 
