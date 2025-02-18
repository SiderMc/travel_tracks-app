import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import css from './Layout.module.css';
import { selectCampersLoading } from '../../redux/campers/selectors';

export default function Layout({ children }) {
  const isLoading = useSelector(selectCampersLoading);
  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      <Header />
      <main>{children}</main>
    </div>
  );
}
