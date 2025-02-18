import { useSelector } from 'react-redux';
import starCalculation from '../../utils/starCalculation';
import SvgIcon from '../SvgIcon/SvgIcon';
import css from './Reviews.module.css';
import { selectCamperById } from '../../redux/campers/selectors';

export default function Reviews() {
  const selectedCamper = useSelector(selectCamperById);

  return (
    <div className={css.reviews}>
      <ul className={css.reviews__list}>
        {selectedCamper.reviews.map((review, index) => {
          const { reviewer_name, reviewer_rating, comment } = review;
          const stars = starCalculation(reviewer_rating);
          return (
            <li className={css.reviews__item} key={index}>
              <span className={css.review__logo}>{reviewer_name[0]}</span>
              <h2 className={css.review__name}>{reviewer_name}</h2>
              <div className={css.review__stars}>
                {stars.map((star, index) => (
                  <SvgIcon key={index} name={star} />
                ))}
              </div>
              <p className={css.review__comment}>{comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
