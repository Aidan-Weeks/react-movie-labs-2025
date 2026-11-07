import { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToTvPlaylistIcon = ({ tv }) => {
  const context = useContext(MoviesContext);

  const handleAddToTvPlaylist = (add) => {
    add.preventDefault();
    context.addToTvPlaylist(tv);
  };

  return (
    <IconButton aria-label="add to watchlist" onClick={handleAddToTvPlaylist}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToTvPlaylistIcon;