import React from 'react';
import CalanderPic from './CalendarPic.png';
import Draggable from 'react-draggable';

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

      <div id="draggable"></div>
      <script>$("#draggable").draggable();</script>

      <Draggable>
        <div>Recipe 1</div>
      </Draggable>
      <Draggable>
        <div>Recipe 2</div>
      </Draggable>
      <Draggable>
        <div>Recipe 3</div>
      </Draggable>
      <Draggable>
        <div>Recipe 4</div>
      </Draggable>
    </div>
  );
};


export default Calendar;