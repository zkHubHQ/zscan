import {Box, Stack} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useGetPeakTPS, useGetTPS} from "../../../api/hooks/useGetTPS";
import {useGlobalState} from "../../../global-config/GlobalConfig";
import MetricCard, {DoubleMetricCard} from "./MetricCard";

function getFormattedTPS(tps: number) {
  const tpsWithDecimal = parseFloat(tps.toFixed(0));
  return tpsWithDecimal.toLocaleString("en-US");
}

export default function TPS() {
  const {tps} = useGetTPS();
  const {peakTps} = useGetPeakTPS();
  const [state] = useGlobalState();
  const [showPeakTps, setShowPeakTps] = useState<boolean>(true);

  useEffect(() => {
    if (state.network_name === "mainnet") {
      setShowPeakTps(true);
    } else {
      setShowPeakTps(false);
    }
  }, [state]);

  return (
    <MetricCard
      data={"zkLogin (Sui)"}
      label="Supporting Soon"
      tooltip="Signing in with familiar web credentials, like those used for Google and Facebook.."
      isDisabled={true}
    />
  );
}
