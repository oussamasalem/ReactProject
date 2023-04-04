import React from "react";

const MainContent = ({PageName,designer}) => {
  return (
  <main>
    {PageName} Page
    <br />
    desinged by {designer}
  </main>
  
  );
};

export default MainContent;
