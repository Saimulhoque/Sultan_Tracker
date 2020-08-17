import React, { Fragment } from "react";
import { Typography, Box } from "@material-ui/core";
// import {} from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { grey } from "@material-ui/core/colors";
import AOS from "aos";
import "aos/dist/aos.css";
import { ServiceData } from "../data";

AOS.init();
const OurService = () => {
  return (
    <Fragment>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4"> OurService </Typography>
        <Typography variant="h6"> OurService </Typography>
      </Box>

      <Grid
        container
        data-aos="fade-up"
        data-aos-delay="100"
        style={{ width: "100%", overflow: "hidden" }}
      >
        {ServiceData.map((item, index) => {
          return (
            <Grid
              item
              xs={4}
              key={index}
              data-aos="fade-up"
              style={{ padding: 10 }}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  src={item.image}
                  style={{ width: 80, height: 80 }}
                ></Avatar>
                <Card
                  style={{
                    marginTop: -40,
                    height: 100,
                    width: 275,
                    paddingTop: 40,
                    backgroundColor: grey[200],
                  }}
                >
                  <Typography variant="h4" style={{ textAlign: "center" }}>
                    {item.title}
                  </Typography>
                </Card>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
};

export default OurService;