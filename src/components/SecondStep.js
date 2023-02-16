import React, { useContext, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../StepContext";
export const SecondStep = () => {
  const { currentStep, setCurrentStep, userData, setUserData } =
    useContext(multiStepContext);
  useEffect(() => {}, [setCurrentStep]);
  return (
    <div>
      <div>
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          color="secondary"
          type={"email"}
          value={userData["email"]}
          onChange={(e) => {
            setUserData({ ...userData, email: e.target.value });
          }}
        />
      </div>
      <div>
        <TextField
          label="country"
          margin="normal"
          variant="outlined"
          color="secondary"
          type={"text"}
          value={userData["country"]}
          onChange={(e) => {
            setUserData({ ...userData, country: e.target.value });
          }}
        />
      </div>
      <div>
        <TextField
          label="district"
          margin="normal"
          variant="outlined"
          color="secondary"
          type={"text"}
          value={userData["district"]}
          onChange={(e) => {
            setUserData({ ...userData, district: e.target.value });
          }}
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setCurrentStep(1)}
          sx={{ "margin-right": "60px" }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => setCurrentStep(3)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
