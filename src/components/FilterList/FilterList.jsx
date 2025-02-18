import { filterList } from '../../constants';
import FilterItem from '../FilterItem/FilterItem';
import css from './FilterList.module.css';

export default function FilterList({
  selectedEquipment,
  setSelectedEquipment,
}) {
  const handleChange = (type, label) => {
    setSelectedEquipment(prev => ({
      ...prev,
      [type]: prev[type] === label ? null : label,
    }));
  };
  return (
    <ul className={css.filter__list}>
      {filterList.map(item => (
        <FilterItem
          key={item.id}
          item={item}
          isSelected={selectedEquipment[item.type] === item.label}
          handleChange={() => handleChange(item.type, item.label)}
        />
      ))}
    </ul>
  );
}
