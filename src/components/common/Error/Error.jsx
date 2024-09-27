import css from "./Error.module.css";

const Error = () => {
  return (
    <p className={css.error}>
      Oops. Something went wrong. Check out internet connection or try again later
    </p>
  )
}

export default Error
