import { getSeries, getTvGenres } from "../api/tmdb-api";
import PageTemplate from '../components/templateTvListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';


const TvSeriesPage = (props) => {

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['tv-discover'],
    queryFn: getSeries,
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
      />
  );

};
export default TvSeriesPage;
