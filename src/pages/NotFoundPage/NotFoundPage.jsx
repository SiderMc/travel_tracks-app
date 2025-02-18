import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <section className={css.page}>
      <div className="container">
        <h1 className={css.page__title}>Page Not Found !</h1>
      </div>
    </section>
  );
}
