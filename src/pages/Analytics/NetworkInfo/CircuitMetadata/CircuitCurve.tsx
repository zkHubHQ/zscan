import React from "react";
import MetricCard from "../MetricCard";
export default function CircuitCurve() {
  return (
    <MetricCard
      data={"bn128"}
      label="Curve"
      tooltip="Type of elliptic curve used."
      isDisabled={true}
    />
  );
}
