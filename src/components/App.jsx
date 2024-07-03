import Profile from './Profile';
import FriendList from './FriendList';
import FriendListItem from './FriendListItem';
import TransactionHistory from './TransactionHistory';
import Container from './Container';
import userInfo from '../user.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

function App() {
  return (
  
<Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statisticalData} />
      <FriendList>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          />
        ))}
      </FriendList>
      <TransactionHistory items={transactions} />
    </Container>
  )};


export default App
