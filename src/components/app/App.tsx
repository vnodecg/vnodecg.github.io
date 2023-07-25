import React from "react";
import { ResumeView } from "../resume/resume-view";
import resume from "../../data/vinod";

function App() {
  return <ResumeView {...resume} />;
}

export default App;
