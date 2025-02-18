import { Suspense, useEffect } from 'react';
import SvgIcon from '../../components/SvgIcon/SvgIcon';
import starCalculation from '../../utils/starCalculation.js';
import { Carousel } from 'primereact/carousel';
import css from './Details.module.css';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import createActiveLink from '../../utils/activeLink.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCamperById,
  selectCampersLoading,
} from '../../redux/campers/selectors.js';
import { getCamperById } from '../../redux/campers/operations.js';
import Layout from '../../components/Layout/Layout.jsx';
import useResize from '../../hooks/useResize.js';
import Loader from '../../components/Loader/Loader.jsx';
import RentForm from '../../components/RentForm/RentForm.jsx';

export default function Details() {
  const mobile = useResize(768);
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedCamper = useSelector(selectCamperById);
  const isLoading = useSelector(selectCampersLoading);
  const location = useLocation();
  const isFeaturesActive =
    location.pathname === `/details/${id}` ||
    location.pathname === `/details/${id}/features`;

  useEffect(() => {
    dispatch(getCamperById(id));
  }, [id, dispatch]);

  const imageTemplate = item => (
    <img
      src={item.original}
      alt={selectedCamper.name}
      className={css.gallery__img}
    />
  );
  if (isLoading) {
    return <Layout />;
  }
  if (!selectedCamper) {
    return;
  }
  const stars = starCalculation(selectedCamper.rating);
  return (
    <section className={css.details}>
      <div className="container">
        <div className={css.details__camper}>
          <div className={css.details__header}>
            <h2 className={css.details__title}>{selectedCamper.name}</h2>
            <div className={css.details__info}>
              <div className={css.details__rating}>
                <div className={css.details__stars}>
                  {stars.map((name, index) => (
                    <SvgIcon key={index} name={name} />
                  ))}
                </div>
                <p className={css.info__rating}>
                  {selectedCamper.rating} ({selectedCamper.reviews.length}
                  Reviews)
                </p>
              </div>
              <div className={css.details__location}>
                <SvgIcon name={'map'} />
                <p className={css.info__location}>{selectedCamper.location}</p>
              </div>
            </div>
            <h2 className={css.details__title}>{selectedCamper.price}.00</h2>
            {selectedCamper.gallery.length > 0 && (
              <div className={css.details__gallery}>
                {mobile ? (
                  <Carousel
                    value={selectedCamper.gallery}
                    itemTemplate={imageTemplate}
                    numVisible={1}
                    numScroll={1}
                    showIndicators={false}
                    containerClassName={css.details__image}
                  />
                ) : (
                  selectedCamper.gallery.map((image, index) => (
                    <img
                      src={image.original}
                      alt={selectedCamper.name}
                      key={index}
                      className={css.gallery__img}
                    />
                  ))
                )}
              </div>
            )}
            <div className={css.details__desc}>
              <p className={css.info__desc}>{selectedCamper.description}</p>
            </div>
          </div>
          <div className={css.details__pages}>
            <NavLink
              to="features"
              className={`${css.details__btn} ${
                isFeaturesActive ? css.active__link : ''
              }`}>
              Features
            </NavLink>
            <NavLink
              to="reviews"
              className={createActiveLink(css.active__link, [
                css.details__btn,
              ])}>
              Reviews
            </NavLink>
          </div>
          <span className={css.details__decor_line}></span>
          <div className={css.details__content}>
            <div className={css.details__container}>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </div>
            <RentForm/>
          </div>
        </div>
      </div>
    </section>
  );
}
