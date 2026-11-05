import { useParams } from 'react-router';
import TvDetails from "../components/tvDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getSeriesById } from '../api/tmdb-api'
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner'
// import useMovie from "../hooks/useMovie";   Redundant


const TvPage = (props) => {
  const { id } = useParams();
  const { data: tv, error, isPending, isError  } = useQuery({
    queryKey: ['tv', {id: id}],
    queryFn: getSeriesById,
  })

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tv ? (
        <>
          <PageTemplate movie={tv} type='tv'>
            <TvDetails movie={tv} />
          </PageTemplate>   
        </>
      ) : (
        <p>Waiting for tv details</p>
      )}
    </>
  );
};

export default TvPage;
