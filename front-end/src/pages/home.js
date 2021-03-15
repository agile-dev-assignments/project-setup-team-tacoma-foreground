import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {useState, useEffect} from "react"
import "../home.css"
import logo from '../worldmap.jpg'; // with import



const HomePage=({props})=>{
        const [citizenship, setCitizenship] = useState()
        const [location, setLocation] = useState()
        const [airport, setAirport] = useState()        
        const [advanced, setAdvanced] = useState(null)
        const [feedback, setFeedback] = useState();
        const [updates, setUpdates] = useState(null);

        const [continent, setContinent] = useState(null);
        const [reason, setReason] = useState(null);
        const [name, setName] = useState(null);
        const [email, setEmail] = useState(null);

    let isAdvanced=true;
      const handleSubmit= (evt)=>  {
        evt.preventDefault();
        alert("SUBMITTED" + citizenship)
        alert("SUBMITTED" + location)
        alert("SUBMITTED" + airport)
      }
 
      const setAdvance= (evt)=>  {
       console.log(evt.target.checked)
        isAdvanced=evt.target.checked
        setAdvanced(evt.target.checked)

      }

      useEffect(()=>{
          if (advanced===true){
            setFeedback(
                <div>
                <label>
                <input
                    name="continent"
                    type="text"
                    placeholder="Enter desired continent"
                    value={continent}
                    onChange={e=>setContinent(e.target.value) }
                />
              </label>
              <br></br>
              <label>
              <input
                  name="reason"
                  type="text"
                  placeholder="Enter reason for traveling"
                  value={reason}
                  onChange={e=>setReason(e.target.value) }
              />
            </label>
            <br></br>

            <label>
            <input
                name="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={e=>setName(e.target.value) }
            />
          </label>
          <br></br>

          <label>
          <input
              name="email"
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={e=>setEmail(e.target.value) }
          />
        </label>
        <br></br>
        <label>
          recieve updates
        <input
          type="checkbox"
          name="updates"
          checked={updates}
          onChange={(e=>setUpdates(e.target.checked)) }
        />
      </label>
        </div>   
            )
          }
          else{
            setFeedback(<div></div>)
            setUpdates()
          }
      },[advanced])
  return (   
  
  <div>
      <h1>Welcome to the Coivd Travel Agent</h1>
   <img src={logo} alt="World Map"></img>
      
    <form class="inputs" onSubmit={handleSubmit}>
      <label>
        <input
            name="citizenship"
            type="text"
            placeholder="Enter your citizenship"
            value={citizenship}
            onChange={e=>setCitizenship(e.target.value) }
        />
      </label>
<br></br>

      <label>
        <input
            name="location"
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={e=>setLocation(e.target.value) }
            //onChange={e => setChoreDesc(e.target.value)}

        />
      </label>


      <br></br>
      <label>
        <input
            name="airport"
            type="text"
            placeholder="Enter desired airport"
            value={airport}
            onChange={e=>setAirport(e.target.value) }
        />
      </label>
      <br></br>
      <label>
          advanced
        <input
          type="checkbox"
          name="advanced"
          checked={advanced}
          onChange={(e=>setAdvance(e)) }
        />
      </label>
      
      {feedback}
    <br></br>
      <input type="submit" value="CALCULATE" />
    </form>
  </div>
);
}

export default HomePage;