import React from 'react'
import DateTime from './DateTime'


/**
 * This method constructs the final date that will be displayed in the application
 * It established the current time and date in military time which then must be converted to a standard 12:00 hour format 
 * @returns finalDate() << which corresponds with the format xx/xx/xx XX:XX:XX
 */
const FinalDate = () => {
    var currentTime = new Date(); 

    function timeMonths(){
        if(currentTime.getMonth()){
            return currentTime.getMonth() + 1
        }
    }

    function timeHours() {
        if(currentTime.getHours() <= 10){
            return '0' + currentTime.getHours()
        } 

        if(currentTime.getHours() == 12 | currentTime.getHours() == 11){
            return currentTime.getHours()
        }
        else {
            return '0' + currentTime.getHours() - 12
        }
    }

    function timeSeconds() {
        if(currentTime.getSeconds() < 10){
            return '0'+ currentTime.getSeconds()
        }else{
            return currentTime.getSeconds()
        }
    }
    function timeMinutes(){
        if(currentTime.getMinutes() < 10){
            return '0'+ currentTime.getMinutes()
        }else{
            return currentTime.getMinutes()
        }

    }

    function timeDate(){
        if(currentTime.getDate() < 10){
            return '0' + currentTime.getDate() 
        } else {
            return currentTime.getDate() 
        }
    }
    
    function finalDate(){
            return timeMonths() + '/' + timeDate() + '/' + currentTime.getFullYear() + ' ' + timeHours()+ ':' + timeMinutes() + ':' + timeSeconds()
          }

    return (
        finalDate() 
    )
} 
export default FinalDate; 
