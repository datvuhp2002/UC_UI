import React from "react";
import { Grid, Paper, Skeleton } from "@mui/material";

const StatisticsSkeleton = () => {
  return (
    <Grid container spacing={3}>
      {[...Array(4)].map((_, index) => (
        <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
          <div className="mb-3">
            <Skeleton height={"19rem"} variant="rounded" />
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatisticsSkeleton;
