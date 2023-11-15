
import FriendsItem from "../FriendsItem/FriendsItem";

const FriendList = ({friends}) => {
    return(
    <ul className="friend-list">
    {

    friends.map(({id, avatar, name, isOnline}) => (
        <FriendsItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        />
      ))
    },
    </ul>)
};

export default FriendList;