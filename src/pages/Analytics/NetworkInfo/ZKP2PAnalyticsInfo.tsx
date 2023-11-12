import React, {createContext} from "react";
import Grid from "@mui/material/Grid";
import {useGetInMainnet} from "../../../api/hooks/useGetInMainnet";
import {Link} from "../../../routing";
import CircuitConstraints from "./CircuitMetadata/CircuitContraints";
import CircuitCurve from "./CircuitMetadata/CircuitCurve";
import CircuitProtocol from "./CircuitMetadata/CircuitProtocol";
import CircuitPublicInputs from "./CircuitMetadata/CircuitPublicInputs";

type CardStyle = "default" | "outline";

export const StyleContext = createContext<CardStyle>("default");

function LinkableContainer({
  linkToAnalyticsPage,
  children,
}: {
  linkToAnalyticsPage: boolean;
  children: React.ReactNode;
}) {
  const inMainnet = useGetInMainnet();

  return inMainnet && linkToAnalyticsPage ? (
    <Link to="/analytics" underline="none" color="inherit" variant="inherit">
      {children}
    </Link>
  ) : (
    <>{children}</>
  );
}

type NetworkInfoProps = {
  isOnHomePage?: boolean;
};

export default function ZkP2PAnalyticsInfo({isOnHomePage}: NetworkInfoProps) {
  const onHomePage = isOnHomePage === true;
  return (
    <StyleContext.Provider value={onHomePage ? "default" : "outline"}>
      <Grid
        container
        spacing={3}
        direction="row"
        sx={{alignContent: "flex-start"}}
        marginBottom={onHomePage ? 6 : 0}
      >
        <Grid item xs={12} md={6} lg={3}>
          <LinkableContainer linkToAnalyticsPage={onHomePage}>
            <CircuitCurve />
          </LinkableContainer>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <LinkableContainer linkToAnalyticsPage={onHomePage}>
            <CircuitProtocol />
          </LinkableContainer>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          {/* <LinkableContainer linkToAnalyticsPage={onHomePage}> */}
          <CircuitConstraints />
          {/* </LinkableContainer> */}
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          {/* <LinkableContainer linkToAnalyticsPage={onHomePage}> */}
          <CircuitPublicInputs />
          {/* </LinkableContainer> */}
        </Grid>
      </Grid>
    </StyleContext.Provider>
  );
}
