import React from "react";
import MetricCard from "../MetricCard";
export default function CircuitConstraints() {
  return (
    <MetricCard
      data={`3115057`}
      label="Constraints"
      tooltip="Total number of constraints in the circuit."
      isDisabled={true}
    />
  );
}
