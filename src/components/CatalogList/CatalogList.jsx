import { useDispatch, useSelector } from 'react-redux';
import { getCampers } from '../../redux/campers/operations';
import {
  selectCampers,
  selectCampersError,
  selectCurrentPage,
  selectFilterCampers,
  selectLastPage,
} from '../../redux/campers/selectors';
import css from './CatalogList.module.css';
import { useEffect } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import Notification from '../Notification/Notification';

export default function CatalogList() {
  const dispatch = useDispatch();
  const items = useSelector(selectCampers);
  const isLastPage = useSelector(selectLastPage);
  const currentPage = useSelector(selectCurrentPage);
  const filter = useSelector(selectFilterCampers);
  const isError = useSelector(selectCampersError)
  useEffect(() => {
    dispatch(getCampers({ page: 1, filter: {} }));
  }, [dispatch]);
  const handleMore = () => {
    dispatch(getCampers({ page: currentPage + 1, filter }));
  };
  if (!items) return null;

 return (
    <div className={css.catalog__content}>
      {items.length === 0  || isError ? (
        <div className={css.catalog__empty}><Notification type={"error"} text={"Campers not found"}/></div>
      ) : (
        <>
          <ul className={css.catalog__list}>
            {items.map(camper => (
              <Card key={camper.id} camper={camper} />
            ))}
          </ul>
          {!isLastPage && (
            <Button
              name="Load More"
              variant="secondary"
              type="button"
              onClick={handleMore}
            />
          )}
        </>
      )}
    </div>
  );
}
