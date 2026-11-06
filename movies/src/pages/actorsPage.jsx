import { useState } from "react";
import { getActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorListPage';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import Spinner from '../components/spinner';


const ActorsPage = (props) => {
const [page, setPage] = useState(1);

  const { data, error, isPending, isError  } = useQuery({
    queryKey: ['actors', { page: page }],
    queryFn: getActors,
    placeholderData: keepPreviousData,
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
        page={page}
        totalPages={Math.min(data.total_pages, 500)}
        onPageChange={setPage}
      />
  );

};
export default ActorsPage;