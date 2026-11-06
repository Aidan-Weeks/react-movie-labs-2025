

import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import TvList from "../tvList";
import Grid from "@mui/material/Grid";
import PaginationBar from "../paginationBar";

function TvListPageTemplate({ tv, title, action, genresKey, genresFn, page, totalPages, onPageChange }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedTv = tv
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return (genreId > 0 ? (m.genre_ids || []).includes(genreId) : true);
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

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
          <FilterCard
          
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            genresKey={genresKey}
            genresFn={genresFn}
          />
        </Grid>
        <TvList action={action} tv={displayedTv}></TvList>
      </Grid>
      <Grid size={12}>
        <PaginationBar page={page} totalPages={totalPages} onPageChange={onPageChange} />
      </Grid>
    </Grid>
  );
}
export default TvListPageTemplate;
