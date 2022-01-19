import { useContext } from 'react';
import FavoritesContext from '../store/favorites.context';

import MeetupList from '../components/meetups/MeetupList';

const FavoritesPage = () => {
  const favoritesContext = useContext(FavoritesContext);
  let content = null;
  if (favoritesContext.totalFavorites === 0) {
    content = <p>You don't have any Favorites yet</p>
  } else {
    content = <MeetupList meetups={favoritesContext.favorites}></MeetupList>
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
