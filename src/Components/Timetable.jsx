import React from 'react'

import './timetable.css'

const Timetable = ({navigateTo}) => {
  return (
    <div>
        <div className="headingtext">
      <h1>Time Table</h1>
    </div>

    <div className="table">
      <div className="topbox">
        Day/Period
    </div>

      <div className="topbox">
        <div >I</div>
        <div>9:30-10:20</div>
      </div>

      <div className="topbox">
        <div >II</div>
        <div>10:20-11:10</div>
      </div>

      <div className="topbox">
        <div >III</div>
        <div>11:10-12:00</div>
      </div>

      <div className="topbox ">
        <div>12:00-12:40</div>
      </div>

      <div className="topbox">
        <div >IV</div>
        <div>12:40-1:30</div>
      </div>

      <div className="topbox">
        <div >V</div>
        <div>1:30-2:20</div>
      </div>

      <div className="topbox">
        <div >VI</div>
        <div>2:20-3:10</div>
      </div>

      <div className="topbox">
        <div >VII</div>
        <div>3:10-4:00</div>
      </div>


      {/* <!-- Lunch --> */}

      <div className="box lunchdiv">
        <span>L</span>
        <span>U</span>
        <span>N</span>
        <span>C</span>
        <span>H</span>
        {/* <!-- Lunch --> */}
      </div>

      {/* <!-- Monday --> */}

      <div className="box">
        <label htmlFor="mondaybutton">Monday</label>
        <button onClick={()=>navigateTo('monday')} id='mondaybutton'></button>
      </div>

      <div className="box">
        Eng
      </div>

      <div className="box">
        Mat
      </div>

      <div className="box">
        Che
      </div>

      <div className="box mondaylab">
        Lab
      </div>

      <div className="box">
        Phy
      </div>

      {/* <!-- Tuesday --> */}

      <div className="box">
        <label htmlFor="tuesdaybutton">Tuesday</label>
        <button onClick={()=>navigateTo('tuesday')} id='tuesdaybutton'></button>
      </div>

      <div className="box tuesdaylab">
        Lab
      </div>

      <div className="box">
        Eng
      </div>

      <div className="box">
        Che
      </div>

      <div className="box">
        Mat
      </div>

      <div className="box">
        SPORTS
      </div>


      {/* <!-- Wednesday --> */}

      <div className="box">
        <label htmlFor="wedbutton">Wednesday</label>
        <button onClick={()=>navigateTo('wednesday')} id='wedbutton'></button>
      </div>

      <div className="box ">
        Mat
      </div>

      <div className="box">
        Phy
      </div>

      <div className="box">
        Eng
      </div>

      <div className="box">
        Che
      </div>

      <div className="box wedlib">
        Library
      </div>


      {/* <!-- Thursday --> */}

      <div className="box">
        <label htmlFor="thursdaybutton">Thursday</label>
        <button onClick={()=>navigateTo('thursday')} id='thursdaybutton'></button>
      </div>

      <div className="box ">
        Phy
      </div>

      <div className="box">
        Eng
      </div>

      <div className="box">
        Che
      </div>

      <div className="box thulab">
        Lab
      </div>

      <div className="box">
        Mat
      </div>


      {/* <!-- Friday --> */}

      <div className="box">
      <label htmlFor="fridaybutton">Friday</label>
        <button onClick={()=>navigateTo('friday')} id='fridaybutton'></button>
      </div>


      <div className="box fridaylab">
        Lab
      </div>

      <div className="box ">
        Mat
      </div>

      <div className="box">
        Che
      </div>

      <div className="box">
        Eng
      </div>

      

      <div className="box">
        Phy
      </div>

      {/* <!-- Saturday --> */}

      <div className="box">
      <label htmlFor="saturdaybutton">Saturday</label>
        <button onClick={()=>navigateTo('saturday')} id='saturdaybutton'></button>
      </div>

      <div className="box ">
        Eng
      </div>

      <div className="box">
        Che
      </div>

      <div className="box">
        Mat
      </div>

      <div className="box satseminar">
        Seminar
      </div>

      <div className="box">
        SPORTS
      </div>


    </div>

    </div>
  )
}

export default Timetable