import React from 'react';
import { Route } from 'react-router-dom'
import ButtonListContainer from "./components/ButtonListContainer"
import DisplaySignUp from "./components/DisplaySignUp"
import DisplayLogin from "./components/DisplayLogin"
import EventsList from "./components/EventsList"
import TicketList from "./components/TicketList"
import TicketDetails from "./components/TicketDetails"
import CreateTicket from "./components/CreateTicket"
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Online Event Tickets</h1>
        <ButtonListContainer />
        <Route exact path="/" component={ButtonListContainer} /> 
        <Route exact path="/signup" component={DisplaySignUp} />
        <Route exact path="/login" component={DisplayLogin} />
        <Route exact path="/events" component={EventsList} />
        <Route exact path="/events/:id" component={TicketList} />
        <Route exact path="/tickets/:id" component={TicketDetails} />
        <Route exact path="/createTicket" component={CreateTicket} />  
    </div>
  );
}

export default App;
