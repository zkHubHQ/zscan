import React from "react";
import MetricCard from "../MetricCard";
export default function CircuitPublicInputs() {
  return (
    <MetricCard
      data={"10"}
      label="Public Inputs"
      tooltip="Total number of public inputs in the circuit."
      isDisabled={true}
    />
  );
}
