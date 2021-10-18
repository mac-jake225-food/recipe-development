import React from 'react'
import './DateTime.css'

export const DateTime = () => {
    var currentTime = new Date()
        return (
            <div className="timeClock">
                {(currentTime.getMonth()+1 + '/' + currentTime.getDate() + '/' +currentTime.getFullYear() + ' ' + 
                (currentTime.getHours()-12)) + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds() } 
            </div>
        )      
}

export default DateTime; 
