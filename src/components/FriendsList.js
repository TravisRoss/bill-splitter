import AddFriendButton from "./AddFriendButton";
import Friend from "./Friend";

export default function FriendsList({
  friends,
  onSetFriends,
  selectedId,
  onSelectFriend,
}) {
  function handleSelectFriend(friendId) {
    onSelectFriend(friendId === selectedId ? null : friendId);
  }

  return (
    <div className="friend-list">
      {friends.map((friend) => (
        <Friend
          name={friend.name}
          image={friend.image}
          selected={selectedId === friend.id}
          onSelect={() => handleSelectFriend(friend.id)}
          key={friend.id}
        />
      ))}
      <AddFriendButton friends={friends} onSetFriends={onSetFriends}>
        Add friend
      </AddFriendButton>
    </div>
  );
}
