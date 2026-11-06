import { useState } from "react";
import { getSeries, getTvGenres } from "../api/tmdb-api";
import PageTemplate from '../components/templateTvListPage';
import { useQuery, keepPreviousData  } from '@tanstack/react-query';
import Spinner from '../components/spinner';


const TvSeriesPage = (props) => {
  const [page, setPage] = useState(1);

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['tv-discover', { page: page }],
    queryFn: getSeries,
    placeholderData: keepPreviousData,

  })
  
  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  
  const series = data.results;

     return (
      <PageTemplate
        title="Discover TV Series"
        tv={series}  
        genresKey="tv-genres"
      genresFn={getTvGenres}   
         action={() => null}  
       page={page}
        totalPages={Math.min(data.total_pages, 500)}
        onPageChange={setPage}
      />
  );

};
export default TvSeriesPage;
