const UserAvatar = ({ User }) => {
  return (
    <div className="UserAvatar">
      <img src={User.Avatar} alt={User.FullName} width={64} />
    </div>
  );
};

export default UserAvatar;
