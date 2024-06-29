import user from '../user.json';
import Profile from './Profile'

function App() {
  return (
  
<>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        image={user.avatar}
        stats={user.stats}
      />
    </>
  )};


export default App
