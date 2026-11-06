import React, { useState } from "react";
import Header from "../headerMovieList";
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import PaginationBar from "../paginationBar";

function ActorListPageTemplate({ actors, title, action, page, totalPages, onPageChange }) {
  const [nameFilter, setNameFilter] = useState("");

  let displayedActors = actors
  .filter((a) => {
    return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
  });

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
        <Grid
          key="find"
          size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}}
          sx={{padding: "20px"}}
        >
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h1">
                <SearchIcon fontSize="large" />
                Find an actor
              </Typography>
              <TextField
                sx={{ mt: 2, width: "100%", backgroundColor: "#fff" }}
                id="actor-search"
                label="Search by name"
                type="search"
                variant="outlined"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
              />
            </CardContent>
          </Card>
        
        </Grid>
         <ActorList action={action} actors={displayedActors}></ActorList>
      </Grid>
      <Grid size={12}>
        <PaginationBar page={page} totalPages={totalPages} onPageChange={onPageChange} />
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;