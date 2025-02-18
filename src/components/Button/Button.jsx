import css from './Button.module.css';

export default function Button({variant, name, type = 'link', href = '#', onClick }) {
  return type !== 'link' ? (
    <button type={type} className={`${css[variant]}`} onClick={onClick}>
      {name}
    </button>
  ) : (
    <a href={href} className={`${css[variant]}`} >
      {name}
    </a>
  );
}
