import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleMaleFemale() {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton
        value="left"
        style={{ marginRight: "3px",
        padding:" 5px 50px 5px 50px", 
       borderRadius: "10px 0 0 10px" }}
      >
        Male
      </ToggleButton>
      <ToggleButton
        value="right"
        style={{
          padding: "5px 50px 5px 50px",
          marginLeft: "3px",
          borderRadius: "0px 10px 10px 0px",
        }}
      >
        Female
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
