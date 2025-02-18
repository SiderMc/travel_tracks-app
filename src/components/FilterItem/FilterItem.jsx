import Badge from '../Badge/Badge ';
import css from './FilterItem.module.css';

export default function FilterItem({ item, isSelected, handleChange }) {
  return (
    <li className={css.filter__item_filter}>
      <input
        type="checkbox"
        id={item.label}
        name={item.type}
        value={item.label}
        className={css.filter__input}
        onChange={handleChange}
        checked={isSelected}
      />
      <label htmlFor={item.label} className={css.filter__label}>
        <Badge name={item.icon} label={item.label} />
      </label>
    </li>
  );
}
