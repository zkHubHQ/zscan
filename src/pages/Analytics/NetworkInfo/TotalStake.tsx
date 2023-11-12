import React from "react";
import {useGetValidatorSet} from "../../../api/hooks/useGetValidatorSet";
import {getFormattedBalanceStr} from "../../../components/IndividualPageContent/ContentValue/CurrencyValue";
import MetricCard from "./MetricCard";

export default function TotalStake() {
  const {totalVotingPower} = useGetValidatorSet();

  return (
    <MetricCard
      data={
        "Email Wallet"
      }
      label="Trending"
      tooltip="Wallet signing flow only using emails instead of traditional seed phrases."
    />
  );
}
