import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../../redux/camper/operations';
import { CatalogList } from '../../components/CatalogList/CatalogList.jsx';
import { SearchForm } from '../../components/SearchForm/SearchForm.jsx';
import css from './CatalogPage.module.css';

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({});

  // Викликаємо fetch при зміні фільтрів
  useEffect(() => {
    dispatch(fetchCampers({ filters, page: 1, itemsPerPage: 4 }));
  }, [dispatch, filters]);

  return (
    <div className={css.wrapper}>
      <SearchForm onResults={setFilters} />
      <CatalogList filters={filters} />
    </div>
  );
};
