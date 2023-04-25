import clsx from "clsx";
import style from './FriendListItem.module.css';

const FriendListItem = ({name, avatar, isOnline}) => {
  return (
    <li className={style.item}>
      <span className={clsx(style.status , isOnline ? style.active : '')}></span>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
