import React from "react";
import SplitLayout from "./components/layout/SplitLayout";

const App = () => {
  return (
    <SplitLayout
      leftPanel={<div />} // Empty div for now - will be replaced in Issue #3
      rightPanel={<div />} // Empty div for now - will be replaced in Issue #4
    />
  );
};

export default App;
