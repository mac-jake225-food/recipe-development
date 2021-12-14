import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {savedRecipes, savedEvents, getCalendarData} from './event-utils'
import {removeRecipe} from '../RecipesPage/Recipes'
import Alert from "sweetalert2";
import './Calendar.css'


export default class Calendar extends React.Component {

  state = {
    weekendsVisible: true,
    currentEvents: savedEvents
  }

  /**
   * This function gathers the intialEvents from our './event-utils' file and if data is present sets the state to that current data (continously updated)
   */
  componentDidMount(){
    this.setState({currentEvents: getCalendarData(savedEvents, savedRecipes)})
  }

  render() { 
    return (
      <div className='calendar-app'>
        {this.renderSidebar()}
        {/* {this.renderEvents()} */}
        <div className='calendar-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: ''
            }}
            initialView='timeGridWeek'
            editable={true}
            selectable={false}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}

            //is this where the recipes are added?
            events={this.state.currentEvents} // alternatively, use the `events` setting to fetch from a feed
            // select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleRemove}
            // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            // eventAdd={this.renderEvents}
            eventRemove={this.handleRemove}
            
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}} 
            eventRemove={function(){}}
            
            */
          />
        </div>
      </div>
    )
  }

  /**
   * This is our main render method for components present on the calendar and UI, 
   * It renders in the data under ALL EVENTS as well as the dragable components on our calendar page
   * @returns 
   */
  renderSidebar() {
    return (
      <div className='calendar-app-sidebar'>
        <div className='calendar-app-sidebar-section'>
          <h2>Instructions</h2>
          <ul>
            <li>Drag your Recipes to the days where you would like them</li>
            <li>Drag, drop, and resize recipes</li>
            <li>Click a recipe to delete it</li>
          </ul>
        </div>
        <div className='calendar-app-sidebar-section'>

          <label>
            <input
              type='checkbox'
              checked={this.state.weekendsVisible}
              onChange={this.handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div>

        <div className='calendar-app-sidebar-section'>
          <h2>All Events ({this.state.currentEvents.length})</h2>
          <ul>
            <li>Select your recipe title below to view the full recipe</li>
          </ul>
          <ul>
          {this.state.currentEvents.map(renderSidebarEvent)}
          </ul>
        </div>

      </div>
    )
  }

  // renderEvents() {
  //   return (
  //     <div>
  //       {createCalendarData()}
  //     </div>
  //   )
  // }

  // componentDidUpdate(prevState) {
  //   // Typical usage (don't forget to compare props):
  //   if(this.state.currentEvents != finalArray) {
  //     this.setState(finalArray);
  //   }
  // }


  /**
   * This function handles the weekend visibility toggle on or off
   */
  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  /**
   * This function will be removed, but handles users adding in new events 
   * @param {selectInfo} 
   */
  // handleDateSelect = (selectInfo) => {
  //   let title = prompt('Please enter a new title for your event')
  //   let calendarApi = selectInfo.view.calendar

  //   calendarApi.unselect() // clear date selection

  //   if (title) {
  //     calendarApi.addEvent({
  //       id: createEventId(),
  //       title,
  //       start: selectInfo.startStr,
  //       end: selectInfo.endStr,
  //       allDay: selectInfo.allDay
  //     })
  //   }
  // }

  /**
   * The button popup function for this method was taken from "SweetAlert2" github: https://sweetalert2.github.io/
   * This method handles the remove aspect of the calendar prompting a popup before confirmation of removal 
   * @param {clickInfo} clickInfo 
   */
  handleRemove = (clickInfo) => {
    console.log("---------> clickInfo", clickInfo)
    Alert.fire({
      title: clickInfo.event.title,
      html:
        `<div class="table-responsive">
      <table class="table">
      <tbody>
      <tr >
      <td>Title</td>
      <td><strong>` +
      clickInfo.event.title +
        `</strong></td>
      </tr>
      <tr >
      <td>Start Time</td>
      <td><strong>
      ` +
      clickInfo.event.start +
        `
      </strong></td>
      </tr>
      </tbody>
      </table>
      </div>`,

      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Remove Event",
      cancelButtonText: "Close"
    }).then(result => {
      console.log("------------->", clickInfo.event, result.value)
      if (result.value) {

        removeRecipe(clickInfo.event.id)
        this.setState({
          currentEvents: getCalendarData()
        }) // It will remove event from the calendar
        Alert.fire("Deleted!", "Your Event has been deleted.", "success");
      }
    });
  };


  // handleRemove = (clickInfo) => {
  //   if(typeof(clickInfo) != "undefined"){

  //     this.INITIAL_EVENTS = removeEvent(search(clickInfo.event.title, INITIAL_EVENTS))
  //      console.log(this.INITIAL_EVENTS)

  //     this.setState({
  //       currentEvents: this.INITIAL_EVENTS
  //     })
  //   }
  // }

  // we want handle events if there is a new event to add the new event to current events instead of creating a new value 
  // handleEvents = (event) => {
  //   if(event != INITIAL_EVENTS){
  //     this.setState({
  //       currentEvents : INITIAL_EVENTS
  //     })
  //   }
  //   }
  }

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}



/**
 * This function gathers each event's ID, Start Time, and Title which is then rendered on to the calander page
 * @param {*} event 
 * @returns (event.id, event.title, event.start)
 */
function renderSidebarEvent(event) {
  return (
    <li key={event.title}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i
      onClick = {() => window.open('//moodle.macalester.edu', "_blank")}>{event.title}</i>
    </li>
  )
}
