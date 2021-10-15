import React from 'react';
import CalanderPic from './CalendarPic.png';

const Calendar = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <img src={CalanderPic} height={600} width={1200}/>
    </div>
  );
};

export default Calendar;