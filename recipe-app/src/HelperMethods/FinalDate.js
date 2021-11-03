import React from 'react'
import DateTime from './DateTime'

const FinalDate = () => {
    var currentTime = new Date(); 

    function timeMonths(){
        if(currentTime.getMonth()){
            return currentTime.getMonth() + 1
        }
    }

    function timeHours() {
        if(currentTime.getHours() < 12){
            return '0' + currentTime.getHours()
        }
        if(currentTime.getHours() == 12){
            return currentTime.getHours()
        }
        else {
            return currentTime.getHours() - 12
        }
    }

    function timeSeconds() {
        if(currentTime.getSeconds() < 10){
            return '0'+ currentTime.getSeconds()
        }else{
            return currentTime.getSeconds()
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
            return timeMonths() + '/' + timeDate() + '/' + currentTime.getFullYear() + ' ' + (timeHours())+ ':' + currentTime.getMinutes() + ':' + timeSeconds()
          }

    return (
        finalDate() 
    )
} 
export default FinalDate; 
