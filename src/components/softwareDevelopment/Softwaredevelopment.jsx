

import './Softwaredevelopment.css'
import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Container,
  } from "@mui/material";
  import {softwaredevelopments} from '../../utilis/data-SoftwareDevelopment'
  import { Link } from "react-router-dom";

export default function Softwaredevelopment() {
  return (
    <Container sx={{ backgroundColor: "#171719", padding: 1, borderRadius: 1 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        style={{ fontSize: "1.8rem" }}>
        Software Development Services
      </Typography>
      <Grid container spacing={4} className="container__grid">
        {softwaredevelopments.map((software, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} className="grid-item">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="280"
                image={software.image} // Use 'software' for accessing data
                alt={software.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{ fontSize: "1.3rem" }}>
                  {software.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {software.service.map((serviceItem, idx) => (
                    <div key={idx}>{serviceItem}</div>
                  ))}

                    <div className="buttons">
                    {/* Link to the corresponding category page */}
                    <Link to={`/${software.category}`} className="btn">
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
  )
}
