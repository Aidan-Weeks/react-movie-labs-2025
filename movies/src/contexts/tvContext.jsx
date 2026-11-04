import React, { useState } from "react";

export const TvContext = React.createContext(null);

const TvContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [myReviews, setMyReviews] = useState({});
  const [playlist, setPlaylist] = useState([]);

  const addToFavorites = (tv) => {
    let newFavorites = [];
    if (!favorites.includes(tv.id)) {
      newFavorites = [...favorites, tv.id];
    } else {
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites);
  };

  const removeFromFavorites = (tv) => {
    setFavorites(favorites.filter((mId) => mId !== tv.id));
  };

  const addReview = (tv, review) => {
    setMyReviews({ ...myReviews, [tv.id]: review });
  };
  // console.log(myReviews);

  const addToPlaylist = (tv) => {
    let newPlaylist = [];
    if (!playlist.includes(tv.id)) {
      newPlaylist = [...playlist, tv.id];
    } else {
      newPlaylist = [...playlist];
    }
    setPlaylist(newPlaylist);
  };
  console.log(playlist);

  return (
    <TvContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToPlaylist,
        playlist
      }}
    >
      {props.children}
    </TvContext.Provider>
  );
};

export default TvContextProvider;