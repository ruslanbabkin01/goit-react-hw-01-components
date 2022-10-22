import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
// import { TransactionHistory } from './Profile/TransactionHistory';
// import { FriendList } from './Statistics/FriendList';
import user from '../data/user.json';
import data from '../data/transactions.json';
// import friendsList from '../data/friends.json';
// import transacrions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
        title="Upload stats"
        stats={data}
      />
    </>
  );
};

