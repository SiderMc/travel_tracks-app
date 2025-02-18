import CatalogForm from '../../components/CatalogForm/CatalogForm';
import CatalogList from '../../components/CatalogList/CatalogList';
import { useState } from 'react';
import css from './Catalog.module.css';

export default function Catalog() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleForm = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className={css.catalog}>
      <button
        className={`${isOpen ? css.btn__close : css.btn__open}`}
        onClick={toggleForm}></button>
      <div className="container">
        <div className={css.catalog__content}>
          <CatalogForm isOpen={isOpen} />
          <CatalogList />
        </div>
      </div>
    </section>
  );
}
