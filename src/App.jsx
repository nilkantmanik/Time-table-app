import React, { useState } from "react";

import Timetable from "./Components/Timetable";
import Monday from "./Components/days/Monday";
import Tuesday from "./Components/days/Tuesday";
import Wednesday from "./Components/days/Wednesday";
import Thursday from "./Components/days/Thursday";
import Friday from "./Components/days/Friday";
import Saturday from "./Components/days/Saturday";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  let content;

  switch (currentPage) {
    case "home":
      content = <Timetable navigateTo={navigateTo} />;
      break;
    case "monday":
      content = <Monday navigateTo={navigateTo} />;
      break;
    case "tuesday":
      content = <Tuesday navigateTo={navigateTo} />;
      break;
    case "wednesday":
      content = <Wednesday navigateTo={navigateTo} />;
      break;
    case "thursday":
      content = <Thursday navigateTo={navigateTo} />;
      break;
    case "friday":
      content = <Friday navigateTo={navigateTo} />;
      break;
    case "saturday":
      content = <Saturday navigateTo={navigateTo} />;
      break;

    default:
      content = <Timetable navigateTo={navigateTo} />;
  }
  return <>
  {content}
  </>;
};

export default App;
