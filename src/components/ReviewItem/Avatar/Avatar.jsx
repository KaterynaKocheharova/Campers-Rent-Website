import css from "./Avatar.module.css";

const Avatar = ({ name }) => {
  return <p className={css.avatar}>{name[0]}</p>;
};

export default Avatar;
