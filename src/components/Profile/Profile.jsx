import user from '../../user.json'
import s from './Profile.module.css';


function Profile({ name, tag, location, avatar, stats
}) {
 return (

<div>
  <div>
    <img
      src={avatar}
      alt={name}
    />
    <p>{name}</p>
    <p>@p{tag}</p>
    <p>{location}</p>
  </div>

  <ul>
    <li>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>

 )
}



export default Profile 