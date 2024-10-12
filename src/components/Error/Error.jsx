import css from "./Error.module.css";

export default function Error({ message }) {
  return (
    <div className={css.errorContainer}>
      <p className={css.errorText}>{message || "An error has occurred."}</p>
    </div>
  );
}