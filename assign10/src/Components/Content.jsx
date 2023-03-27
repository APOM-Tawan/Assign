import { Grid } from "@mui/material";
import React from "react";
import MediaCard from "./MediaCard";
function Content() {
  return (
    <>
      <h1>4EVE</h1>
      <p>
      Group consists of 7 female members: Mind, Jorin, Taaom, Hannah, Fai, Punch, and Aheye. They debuted on December 23, 2020. They were formed through
      </p>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <MediaCard
            img="https://pbs.twimg.com/media/Euvx_EfUUAEAmHE.jpg"
            title="Mind 4EVE"
            msg="Her stage name is Mind. Her Birth Name is Atitaya Tribudarak . She was born in 1990. Her age is 31 years old as of 2021. She is Thai by Nationality. "
          />
        </Grid>
        <Grid item xs={6}>
          <MediaCard
            img="https://files.vogue.co.th/uploads/Jorin_4EVE_Fashion_-_5.jpg"
            title="Jorin 4EVE"
            msg=" Her stage name is Jorin . Her Birth Name is Jorin Khumpiraphan . She was born in 1999. Her age is 22 years old as of 2021. She is Thai by Nationality."
          />
        </Grid>
      </Grid>
    </>
  );
}
export default Content;
