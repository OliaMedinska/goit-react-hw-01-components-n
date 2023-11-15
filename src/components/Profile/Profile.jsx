
import  { ProfileWrapper, Description, Name, Tag, Location, Avatar, List, ListItem, Label, Quantity }  from './Profile.styled';


const Profile = ({user: {username, avatar, tag, location, stats: {followers, views, likes}}})=> {
    return (
<ProfileWrapper>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
    <Name>{username}</Name>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <List>
    <ListItem>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </ListItem>
    <ListItem>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </ListItem>
    <ListItem>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </ListItem>
  </List>
</ProfileWrapper>
    )
};


export default Profile;