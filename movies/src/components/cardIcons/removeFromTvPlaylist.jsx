import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromTvPlaylistIcon = ({ tv }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromTvPlaylist = (remove) => {
    remove.preventDefault();
    context.removeFromTvPlaylist(tv);
  };

  return (
    <IconButton aria-label="remove from watchlist" onClick={handleRemoveFromTvPlaylist}>
      <PlaylistRemoveIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromTvPlaylistIcon;