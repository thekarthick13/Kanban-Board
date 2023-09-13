import React, { useEffect, useState } from "react";
import "../index.css";
import usr1 from "../assets/usr1.png";
import usr2 from "../assets/usr2.png";
import usr3 from "../assets/usr3.png";
import usr4 from "../assets/usr4.png";
import usr5 from "../assets/usr5.png";
import urgent from "../assets/urgent.png"; // Import the urgent image
import nopriority from "../assets/nopriority.png"
import high from "../assets/high.png"
import medium from "../assets/medium.png"
import low from "../assets/low.png"
import backlog from "../assets/pending.png"
import todo from "../assets/ring.png"
import inprog from "../assets/progress.png"
import done from "../assets/done.png"
import cancelled from "../assets/cancelled.png"
import plus from "../assets/plus.png"

function Cards() {
  const [tickets, setTickets] = useState([]);
  const [sortingOption, setSortingOption] = useState("title");

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => res.json())
      .then((data) => {
        setTickets(data.tickets);
      });
  }, []);

  // Define a function to sort tickets by title in ascending order
  const sortByTitle = () => {
    setSortingOption("title");
    const sortedTickets = [...tickets].sort((a, b) => a.title.localeCompare(b.title));
    setTickets(sortedTickets);
  };

  // Define a function to sort tickets by priority in descending order
  const sortByPriority = () => {
    setSortingOption("priority");
    const sortedTickets = [...tickets].sort((a, b) => b.priority - a.priority);
    setTickets(sortedTickets);
  };

  // Filter the tickets based on their status
  const backlogTickets = tickets.filter((ticket) => ticket.status === "Backlog");
  const todoTickets = tickets.filter((ticket) => ticket.status === "Todo");
  const inProgressTickets = tickets.filter((ticket) => ticket.status === "In progress");
  const doneTickets = tickets.filter((ticket) => ticket.status === "Done");
  const cancelledTickets = tickets.filter((ticket) => ticket.status === "Cancelled");

  // Function to render tickets based on sorting option
  const renderTickets = (ticketList) => {
    return ticketList.map((ticket) => (
      <div key={ticket.id} className="card-template">
        <div className="header">
          <p className="id">{ticket.id}</p>
          {ticket.userId === "usr-1" && <img className="pfp" src={usr1} alt="User 1" />}
          {ticket.userId === "usr-2" && <img className="pfp" src={usr2} alt="User 2" />}
          {ticket.userId === "usr-3" && <img className="pfp" src={usr3} alt="User 3" />}
          {ticket.userId === "usr-4" && <img className="pfp" src={usr4} alt="User 4" />}
          {ticket.userId === "usr-5" && <img className="pfp" src={usr5} alt="User 5" />}
        </div>
        <div className="title-checkbox">
          
          <label>{ticket.title}</label>
        </div>
        <div className="footer">
          {ticket.priority === 4 && <img className="urgent" src={urgent} alt="Urgent" />}
          {ticket.priority === 0 && <img className="nopriority" src={nopriority} alt="Urgent" />}
          {ticket.priority === 3 && <img className="high" src={high} alt="Urgent" />}
          {ticket.priority === 2 && <img className="medium" src={medium} alt="Urgent" />}
          {ticket.priority === 1 && <img className="low" src={low} alt="Urgent" />}
          <div className="footer-wrap">
            <p className="bullet">&#8226;</p>
            <p>{ticket.tag.join(", ")}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="hero">
      <div className="options">
        <label className="optn-label">
          Ordering
          <select className="labal" onChange={(e) => (e.target.value === "title" ? sortByTitle() : sortByPriority())}>
            <option>Default</option>
            <option value="title">Title</option>
            <option value="priority">Priority</option>
          </select>
        </label>
      </div>
      <div className="daddy">
        <div className="div1">
          <div className="div1title">
            <img className="backlog"src={backlog}/>
            <p>Backlog&nbsp;&nbsp;&nbsp;&nbsp;{backlogTickets.length}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;&#8226;&#8226;&#8226;</p>
           
            
          </div>
          {renderTickets(backlogTickets)}
        </div>
        <div className="div2">
        <div className="div2title">
        <img className="todo"src={todo}/>
            <p>Todo&nbsp;&nbsp;&nbsp;&nbsp;{todoTickets.length}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;&#8226;&#8226;&#8226;</p>
            
            
          </div>
            {renderTickets(todoTickets)}
            </div>
        <div className="div3">
        <div className="div3title">
        <img className="inprog"src={inprog}/>
            <p>InProgress&nbsp;&nbsp;&nbsp;&nbsp;{inProgressTickets.length}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;&#8226;&#8226;&#8226;</p>
            
            
          </div>
            {renderTickets(inProgressTickets)}
            </div>
        <div className="div4">
          <div className="div4title">
          <img className="done"src={done}/>
            <p>Done&nbsp;&nbsp;&nbsp;&nbsp;{doneTickets.length}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;&#8226;&#8226;&#8226;</p>
            
           
         
          </div>
          {renderTickets(doneTickets)}
        </div>
        <div className="div5">
          <div className="div5title">
          <img className="cancelled"src={cancelled}/>
          <p>Canceled&nbsp;&nbsp;&nbsp;&nbsp;{cancelledTickets.length}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;&#8226;&#8226;&#8226;</p>
            
            
          </div>
          {renderTickets(cancelledTickets)}
        </div>
      </div>
    </div>
  );
}

export default Cards;
