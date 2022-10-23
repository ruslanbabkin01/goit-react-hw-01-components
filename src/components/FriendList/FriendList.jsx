import PropTypes from 'prop-types';
import {
  FriendUl,
  FrienItem,
  Status,
  ImgAvatar,
  UserName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendUl>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FrienItem key={id}>
          <Status isOnline={isOnline}>{isOnline}</Status>
          <ImgAvatar src={avatar} alt="User avatar" width="48" />
          <UserName>{name}</UserName>
        </FrienItem>
      ))}
    </FriendUl>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
