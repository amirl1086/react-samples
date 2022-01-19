import { useContext } from 'react';

import Card from '../widgets/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites.context';

const MeetupItem = (props) => {
  const favoritesContext = useContext(FavoritesContext);
  const isMeetupFavorite = favoritesContext.isMeetupFavorite(props.id);
  
  const toggleFavoritesButton = () => {
    if (isMeetupFavorite) {
      favoritesContext.removeFavorite(props.id);
    } else {
      favoritesContext.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div>
          <img src={props.image} alt={props.title} className={classes.image} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesButton}>
            {isMeetupFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
