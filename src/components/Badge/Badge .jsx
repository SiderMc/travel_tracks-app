import SvgIcon from '../SvgIcon/SvgIcon';
import css from './Badge.module.css';

export default function Badge({ name, label }) {
  return (
    <>
      <SvgIcon name={name} />
      <p className={css.badge__label_name}>{label}</p>
    </>
  );
}
