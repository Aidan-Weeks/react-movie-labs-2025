import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { getCredits } from "../../api/tmdb-api";
import Spinner from "../spinner";
import img from "../../images/film-poster-placeholder.png";

const CastList = ({ id, type = "movie" }) => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["credits", { id, type }],
    queryFn: getCredits,
  });

  if (isPending) return <Spinner />;
  if (isError) return <p>{error.message}</p>;

  const cast = data.cast.slice(0, 15);

  if (cast.length === 0) return null;

  return (
    <>
      <Typography variant="h5" component="h3" sx={{ mt: 2, mb: 1 }}>
        Cast
      </Typography>
      <Box sx={{ display: "flex", gap: 2, overflowX: "auto", pb: 1 }}>
        {cast.map((person) => (
          <Card key={person.credit_id} sx={{ flex: "0 0 140px" }}>
            <CardActionArea component={Link} to={`/actors/${person.id}`}>
              <CardMedia
                sx={{ height: 190 }}
                image={
                  person.profile_path
                    ? `https://image.tmdb.org/t/p/w185/${person.profile_path}`
                    : img
                }
                title={person.name}
              />
              <CardContent sx={{ p: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {person.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {person.character}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default CastList;