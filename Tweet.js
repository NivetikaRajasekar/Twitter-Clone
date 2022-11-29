import UserAvatar from "./UserAvatar";

const Tweet = ({ TweetContent, Users }) => {
  const User = Users.find((u) => u.Username === TweetContent.Username);
  return (
    <div className="Tweet">
      <UserAvatar User={User} />
      <div className="TweetContent">
        <p className="Meta">
          <strong>{User.FullName}</strong> @<span>{User.Username}</span>
        </p>
        <p>{TweetContent.Message}</p>
      </div>
    </div>
  );
};

export default Tweet;
