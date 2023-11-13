import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';


export const App = () => {
  return (
    <>
    <Profile user={user}/>
    <Statistics title="Upload stats"  stats={data}/>
    <FriendList friends={friends}/>
    </>
  );
};

