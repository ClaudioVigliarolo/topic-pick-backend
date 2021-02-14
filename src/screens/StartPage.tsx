import React from "react";
import Button from "@material-ui/core/Button";
import { COLORS } from "../constants/Colors";
import { useHistory } from "react-router-dom";
import CustomButton from "../components/CustomButton";
export default function StartPage() {
  const history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        alignSelf: "center",
        minHeight: "100vh",
        backgroundColor: COLORS.lighterOrange,
      }}
    >
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "15%",
        }}
      >
        TOP Pick Control Base
      </h1>
      <div
        style={{
          marginTop: 50,
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ marginTop: 50 }}>
          <CustomButton
            onClick={() => history.push("/insert")}
            title="INSERT NEW TOPICS"
          />
        </div>
        <div style={{ marginTop: 50 }}>
          <CustomButton
            onClick={() => history.push("/reports")}
            title="CHECK REPORTS"
          />
        </div>
      </div>
    </div>
  );
}