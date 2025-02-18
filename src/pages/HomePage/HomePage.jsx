import css from './HomePage.module.css';
import hero1x from '../../images/hero.webp';
import hero2x from '../../images/hero@2x.webp';
import hero3x from '../../images/hero@3x.webp';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className={css.hero}>
      <picture>
        <source
          srcSet={`${hero1x} 1x, ${hero2x} 2x, ${hero3x} 3x`}
          type="image/webp"
        />
        <img
          src={hero1x}
          alt="hero-background"
          className={css.hero__background}
        />
      </picture>
      <div className={`${css.hero__content} container`}>
        <h1 className={css.hero__title}>Campers of your dreams</h1>
        <h2 className={css.hero__subtitle}>
          You can find everything you want in our catalog
        </h2>
        <Link to="/catalog">
          <Button name={'View Now'} variant={'primary'} type="button" />
        </Link>
      </div>
    </section>
  );
}
