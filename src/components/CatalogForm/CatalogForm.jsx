import { useState } from 'react';
import Button from '../Button/Button';
import FilterList from '../FilterList/FilterList';
import SvgIcon from '../SvgIcon/SvgIcon';
import TypeList from '../TypeList/TypeList';
import css from './CatalogForm.module.css';
import { useDispatch } from 'react-redux';
import { getCampers } from '../../redux/campers/operations';
import { clearFilter } from '../../redux/campers/slice';

export default function CatalogForm({ isOpen }) {
  const [selectedEquipment, setSelectedEquipment] = useState({});
  const [selectedType, setSelectedType] = useState({});
  const dispatch = useDispatch();

  const handleResetFilter = () => {
    setSelectedEquipment({});
    setSelectedType({});
  };

  const handleSubmit = e => {
    e.preventDefault();
    const location = e.target.location.value.trim()
      ? e.target.location.value.trim()
      : null;
    const filter = {
      ...(location ? { location } : {}),
      ...selectedType,
      ...selectedEquipment,
    };
    dispatch(getCampers({ page: 1, filter }));
    dispatch(clearFilter());
  };

  return (
    <div
      className={`${css.catalog__form_content} ${
        isOpen ? css.form__open : ''
      }`}>
      <form
        className={css.catalog__form}
        onSubmit={handleSubmit}
        autoComplete="off">
        <div className={css.catalog__location}>
          <h3 className={css.catalog__subtitle}>Location</h3>
          <label className={css.label__location}>
            <input
              type="text"
              className={css.input__location}
              placeholder="City"
              name="location"
            />
            <SvgIcon name={'map'} />
          </label>
        </div>
        <div className={css.catalog__filters}>
          <h3 className={css.catalog__subtitle_filter}>Filters</h3>
          <h2 className={css.catalog__title}>Vehicle equipment</h2>
          <span className={css.catalog__decor_line}></span>
          <FilterList
            selectedEquipment={selectedEquipment}
            setSelectedEquipment={setSelectedEquipment}
          />
          <h2 className={css.catalog__title}>Vehicle type</h2>
          <span className={css.catalog__decor_line}></span>
          <TypeList
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
        </div>
        <div className={css.catalog__actions}>
          <Button name={'Search'} type="submit" variant={'primary'} />
          <Button
            name={'Reset filters'}
            type="button"
            variant={'secondary'}
            onClick={handleResetFilter}
          />
        </div>
      </form>
    </div>
  );
}
