import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../StepContext";

export const ThirdStep = () => {
  const { setCurrentStep, userData, setUserData, submitdata } =
    useContext(multiStepContext);
  return (
    <div>
      <div>
        <TextField
          label="city"
          margin="normal"
          variant="outlined"
          color="secondary"
          type={"text"}
          value={userData["city"]}
          onChange={(e) => {
            setUserData({ ...userData, city: e.target.value });
          }}
        />
      </div>
      <div>
        <TextField
          label="LandMark"
          margin="normal"
          variant="outlined"
          color="secondary"
          type={"text"}
          value={userData["LandMark"]}
          onChange={(e) => {
            setUserData({ ...userData, LandMark: e.target.value });
          }}
        />
      </div>
      <div>
        <TextField
          label="postal code"
          margin="normal"
          variant="outlined"
          color="secondary"
          type={"number"}
          value={userData["postal"]}
          onChange={(e) => {
            setUserData({ ...userData, postal: e.target.value });
          }}
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setCurrentStep(2)}
          sx={{ "margin-right": "60px" }}
        >
          Back
        </Button>
        <Button variant="contained" color="success" onClick={submitdata}>
          Next
        </Button>
      </div>
    </div>
  );
};
