import { Message } from 'primereact/message';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import css from './Notification.module.css';
export default function Notification({ type, text }) {
  return (
    <div className={css.notification}>
      <Message severity={type} text={text} />
    </div>
  );
}
