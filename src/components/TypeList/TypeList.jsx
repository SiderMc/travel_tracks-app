import { typeList } from '../../constants';
import FilterItem from '../FilterItem/FilterItem';
import css from './TypeList.module.css';

export default function TypeList({ selectedType, setSelectedType }) {
  const handleChange = (type, label) => {
    setSelectedType(prev => ({
      ...prev,
      [type]: prev[type] === label ? null : label,
    }));
  };
  return (
    <ul className={css.type__list}>
      {typeList.map(item => (
        <FilterItem
          key={item.id}
          item={item}
          isSelected={selectedType[item.type] === item.label}
          handleChange={() => handleChange(item.type, item.label)}
        />
      ))}
    </ul>
  );
}
