import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
      <span className={css.loading}></span>
      <span className={css.loading}></span>
      <span className={css.loading}></span>
      <span className={css.loading}></span>
    </div>
  );
}
