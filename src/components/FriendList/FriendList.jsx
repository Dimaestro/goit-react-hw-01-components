import FriendListItem from "./FriendListItem/FriendListItem";
import style from './FriendList.module.css';

const FriendList = ({friends}) => {
  return (
    <ul className={style.friendList}>
      {friends.map(friend => {
        return (
          <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
        )
      })}
    </ul>
  );
};

export default FriendList;
