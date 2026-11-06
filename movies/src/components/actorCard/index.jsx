import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router";
import {getActorImages} from "../../api/tmdb-api";
 

export default function ActorCard({ actor, action, subtitle }) {

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h5" component="p">
            {actor.name}{" "}
          </Typography>
        }
        subheader={subtitle}
      />
      <CardMedia
        sx={{ height: 500 }}
            image={actor.profile_path? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
      : img
  } 
      />
      <CardContent>
        <Grid container>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <WorkIcon fontSize="small" />
              {actor.known_for_department}
            </Typography>
          </Grid>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <TrendingUpIcon fontSize="small" />
              {"  "} {(actor.popularity ?? 0).toFixed(1)}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
           <CardActions disableSpacing>
      
        {action ? action(actor) : null}
      
        <Link to={`/actors/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
        
      </CardActions>

    </Card>
  );
}  