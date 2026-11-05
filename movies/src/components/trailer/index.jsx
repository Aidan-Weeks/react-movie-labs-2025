import { useQuery } from "@tanstack/react-query";
import Typography from "@mui/material/Typography";
import { getVideos } from "../../api/tmdb-api";
import Spinner from "../spinner";

const Trailer = ({ id, type = "movie" }) => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["videos", { id, type }],
    queryFn: getVideos,
  });

  if (isPending) return <Spinner />;
  if (isError) return <p>{error.message}</p>;

  const youTube = data.results.filter((v) => v.site === "YouTube");
  const trailer =
    youTube.find((v) => v.type === "Trailer" && v.official) ||
    youTube.find((v) => v.type === "Trailer") ||
    youTube.find((v) => v.type === "Teaser");

  if (!trailer) 
    return
     <p>No trailer available.</p>;

  return (
    <>
      <Typography variant="h5" component="h3" sx={{ mt: 2 }}>
        Trailer
      </Typography>
      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <iframe
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title={trailer.name}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
        />
      </div>
    </>
  );
};

export default Trailer;