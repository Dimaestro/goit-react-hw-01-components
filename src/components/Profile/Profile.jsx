import PropTypes from 'prop-types';
import style from './Profile.module.css';

const Profile = ({
  username,
  tag,
  location,
  stats: { followers, views, likes },
  avatar,
}) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt={username} className={style.avatar} />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>{'@' + tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{followers}</span>
        </li>
        <li>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{views}</span>
        </li>
        <li>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
  avatar: PropTypes.string.isRequired,
};

export default Profile;
