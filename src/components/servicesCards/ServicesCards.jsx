

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
} from "@mui/material";
import { projects } from "../../utilis/data-electrical";
import "./ServicesCards.css";
import { Link } from "react-router-dom";

export default function ServicesCards() {
  return (
    <Container sx={{ backgroundColor: "#171719", padding: 1, borderRadius: 1 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        style={{ fontSize: "1.8rem" }}
      >
        Electrical Services
      </Typography>
      <Grid container spacing={4} className="container__grid">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} className="grid-item">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="280"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography 
                gutterBottom variant="h5" 
                component="div"
                style={{ fontSize: "1.3rem" }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.service.map((serviceItem, idx) => (
                    <div key={idx}>{serviceItem}</div>
                  ))}
                  <div className="buttons">
                    {/* Link to the corresponding category page */}
                    <Link to={`/${project.category}`} className="btn">
                      Read more
                    </Link>
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
