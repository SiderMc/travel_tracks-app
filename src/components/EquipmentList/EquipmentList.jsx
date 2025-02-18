import { useEffect, useState } from 'react';
import css from './EquipmentList.module.css';
import { filterList } from '../../constants';
import Badge from '../Badge/Badge ';

const normalizeEquipmentKeys = equipment => {
  const entries = Object.entries(equipment).map(([key, value]) => [
    key.toLowerCase(),
    value,
  ]);
  return Object.fromEntries(entries);
};

export default function EquipmentList({ equipment }) {
  const [combinedList, setCombinedList] = useState([]);
  useEffect(() => {
    if (equipment) {
      const normalizedEquipment = normalizeEquipmentKeys(equipment);
      const updatedList = filterList
        .map(item => {
          const value = normalizedEquipment[item.label.toLowerCase()];
          return value ? { ...item, value } : null;
        })
        .filter(Boolean);
      setCombinedList(updatedList);
    }
  }, [equipment]);

  return (
    <ul className={css.equipment__list}>
      {combinedList.map(item => (
        <li className={css.equipment__item} key={item.id}>
          <Badge name={item.icon} label={item.label} />
        </li>
      ))}
    </ul>
  );
}
