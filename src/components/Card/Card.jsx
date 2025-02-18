import { Link } from 'react-router-dom';
import starCalculation from '../../utils/starCalculation.js';
import Button from '../Button/Button';
import EquipmentList from '../EquipmentList/EquipmentList';
import SvgIcon from '../SvgIcon/SvgIcon';
import css from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors.js';
import { toggleIsFavorites } from '../../redux/favorites/slice.js';
import { useEffect, useRef } from 'react';

export default function Card({ camper }) {
  const ref = useRef();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const { id, gallery, description, name, price, rating, reviews, location } =
    camper;
  const isFavorite = favorites.some(camper => camper === id);
  const stars = starCalculation(rating);

  const favoritesToggle = () => {
    dispatch(toggleIsFavorites(id));
  };

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(`${css.show}`);
          } else {
            entry.target.classList.remove(`${css.show}`);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, []);

  return (
    <li className={css.card} ref={ref}>
      <div className={css.card__image}>
        <img src={gallery[0].original} alt={name} className={css.card__img} />
      </div>
      <div className={css.card__text}>
        <div className={css.card__header}>
          <h2 className={css.card__title}>{name}</h2>
          <p className={css.card__price}>&#8364;{price}.00</p>
          <button
            className={`${css.card__add} ${
              isFavorite ? css.card__favorite : ''
            }`}
            onClick={favoritesToggle}>
            <SvgIcon name={'heart'} />
          </button>
        </div>
        <div className={css.card__info}>
          <div className={css.card__rating}>
            <div className={css.card__stars}>
              {stars.map((name, index) => (
                <SvgIcon key={index} name={name} />
              ))}
            </div>
            <p className={css.info__rating}>
              {rating}({reviews ? reviews.length : 0} Reviews)
            </p>
          </div>
          <div className={css.card__location}>
            <SvgIcon name={'map'} />
            <p className={css.info__location}>{location}</p>
          </div>
        </div>
        <div className={css.card__desc}>
          <p className={css.info__desc}>{description}</p>
        </div>
        <div className={css.card__equipment}>
          <EquipmentList equipment={camper} />
        </div>
        <Link to={`/details/${id}`}>
          <Button name={'Show more'} variant={'primary'} type={'button'} />
        </Link>
      </div>
    </li>
  );
}
