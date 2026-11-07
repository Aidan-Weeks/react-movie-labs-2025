import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import WorkIcon from "@mui/icons-material/Work";
import CakeIcon from "@mui/icons-material/Cake";
import PlaceIcon from "@mui/icons-material/Place";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getActorCredits } from "../../api/tmdb-api";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {

const { data: credits } = useQuery({
    queryKey: ['actor-credits', { id: actor.id }],
    queryFn: getActorCredits,
  });

  const roles = (credits?.cast || [])
    .sort((a, b) => b.vote_count - a.vote_count)
    .slice(0, 10);

  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography || "No biography available."}
      </Typography> 

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Also Known As" sx={{...chip}} color="primary" />
        </li>
        
        {actor.also_known_as.map((name) => (
          <li key={name}>
            <Chip label={name} sx={{...chip}} />
          </li>
        ))}
        
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<WorkIcon />} label={actor.known_for_department} />
        <Chip
          icon={<TrendingUpIcon />}
          label={`${actor.popularity}`}
        />
        <Chip icon={<CakeIcon />} label={`Born: ${actor.birthday}`} />
        <Chip icon={<PlaceIcon />} label={`${actor.place_of_birth}`} />

      </Paper>
      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Known For" sx={{...chip}} color="primary" />
        </li>
        {roles.map((movieLink) => (
          <li key={movieLink.credit_id}>
            <Chip
              label={movieLink.title || movieLink.name}
              sx={{...chip}}
              clickable
              component={Link}
              to={movieLink.media_type === "tv" ? `/tv/${movieLink.id}` : `/movies/${movieLink.id}`}
            />
          </li>
        ))}
      </Paper>
      </>
  );
};
export default ActorDetails ;