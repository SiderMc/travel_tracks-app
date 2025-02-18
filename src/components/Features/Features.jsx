import css from './Features.module.css';
import EquipmentList from '../EquipmentList/EquipmentList';
import { useSelector } from 'react-redux';
import { selectCamperById } from '../../redux/campers/selectors';

export default function Features() {
  const camper = useSelector(selectCamperById);
  return (
    <>
      <EquipmentList equipment={camper} />
      <div className={css.futures__text_content}>
        <h2 className={css.futures__title}>Vehicle details</h2>
        <span className={css.futures__decor_line}></span>
        <p className={css.futures__desc}>
          <span className={css.desc}>Form</span>
          <span className={css.desc}>{camper.form}</span>
        </p>
        <p className={css.futures__desc}>
          <span className={css.desc}>Length</span>
          <span className={css.desc}>{camper.length}</span>
        </p>
        <p className={css.futures__desc}>
          <span className={css.desc}>Width</span>
          <span className={css.desc}>{camper.width}</span>
        </p>
        <p className={css.futures__desc}>
          <span className={css.desc}>Height</span>
          <span className={css.desc}>{camper.height}</span>
        </p>
        <p className={css.futures__desc}>
          <span className={css.desc}>Tank</span>
          <span className={css.desc}>{camper.tank}</span>
        </p>
        <p className={css.futures__desc}>
          <span className={css.desc}>Consumption</span>
          <span className={css.desc}>{camper.consumption}</span>
        </p>
      </div>
    </>
  );
}
