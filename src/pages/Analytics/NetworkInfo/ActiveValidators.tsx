import React from "react";
import {useGetValidatorSet} from "../../../api/hooks/useGetValidatorSet";
import MetricCard from "./MetricCard";

export default function ActiveValidators() {
  const {numberOfActiveValidators} = useGetValidatorSet();

  return (
    <MetricCard
      data={
        "Dark Forest"
      }
      label="Supporting Soon"
      tooltip="World's first decentralized real-time strategy game."
      isDisabled={true}
    />
  );
}
