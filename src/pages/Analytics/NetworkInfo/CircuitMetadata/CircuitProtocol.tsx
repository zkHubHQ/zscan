import React from "react";
import MetricCard from "../MetricCard";

export default function CircuitProtocol() {
  return (
    <MetricCard
      data={"groth16"}
      label="Protocol"
      tooltip="Type of zk protocol used."
      isDisabled={true}
    />
  );
}
