import { getActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';


const ActorsPage = (props) => {

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['actors'],
    queryFn: getActors,
  })

  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const actors = data.results;

     return (
      <PageTemplate
        title="Popular Actors"
        actors={actors}
        action={(actor) => null}
      />
  );

};
export default ActorsPage;