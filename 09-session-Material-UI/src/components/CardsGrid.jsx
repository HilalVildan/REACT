import { Button, CardActionArea, CardActions, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import data from "../data";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const CardsGrid = () => {
  //! Grid container= row, Grid item =col

  return (
    <Container>
      <Typography variant="h4" align="center" color="error">
        CARD GRID
      </Typography>

      <Grid
        container
        mt={4}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        {data.map((a) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={a.id}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" image={a.img} alt="#" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {a.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {a.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CardsGrid;
