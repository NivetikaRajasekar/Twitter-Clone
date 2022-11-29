import Tweet from "./Tweet";

const TweetsContainer = ({ Tweets, Users }) => {
  return (
    <div className="TweetsContainer">
      {Tweets.map((tc, key) => (
        <Tweet TweetContent={tc} Users={Users} />
      ))}
    </div>
  );
};

export default TweetsContainer;
