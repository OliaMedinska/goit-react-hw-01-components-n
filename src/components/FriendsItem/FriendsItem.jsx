const FriendsItem = ({avatar, name, isOnline}) => {
    const statusClassName = isOnline ? 'status online' : 'status';

    return (
        <li className="item">
        <span className={statusClassName}>{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
        </li>
    )
};

export default FriendsItem;