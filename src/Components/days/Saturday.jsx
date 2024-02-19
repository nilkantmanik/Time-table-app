import React from "react";

const Saturday = ({ navigateTo }) => {
  return (
    <>
      <h2>
        <label htmlFor="backbutton">Back</label>
        <button onClick={() => navigateTo("home")} id="backbutton"></button>
      </h2>
      <div className="headingtext">
        <h1>Saturday Time Table</h1>
      </div>

      <div className="outcontainer">
        <div className="periodtable">
          <div className="daystopbox">Day/Period</div>

          <div className="daystopbox">
            <div>I</div>
            <div>9:30-10:20</div>
          </div>

          <div className="daystopbox">
            <div>II</div>
            <div>10:20-11:10</div>
          </div>

          <div className="daystopbox">
            <div>III</div>
            <div>11:10-12:00</div>
          </div>

          <div className="daystopbox">
            <div>12:00-12:40</div>
          </div>

          <div className="daystopbox">
            <div>IV</div>
            <div>12:40-1:30</div>
          </div>

          <div className="daystopbox">
            <div>V</div>
            <div>1:30-2:20</div>
          </div>

          <div className="daystopbox">
            <div>VI</div>
            <div>2:20-3:10</div>
          </div>

          <div className="daystopbox">
            <div>VII</div>
            <div>3:10-4:00</div>
          </div>
        </div>

        <div className="mondaytable">
          <div className="daysbox">
            <div style={{ fontWeight: "bold" }}>Saturday</div>
          </div>
          <div className="daysbox">Eng</div>
          <div className="daysbox">Che</div>
          <div className="daysbox">Mat</div>
          <div className="daysbox" style={{ fontWeight: "bold" }}>
            LUNCH
          </div>
          <div className="daysbox labdiv">SEMINAR</div>
          <div className="daysbox">SPORTS</div>
        </div>
      </div>
    </>
  );
};

export default Saturday;
