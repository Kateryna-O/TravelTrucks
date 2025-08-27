import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectError,
  selectIsLoading,
} from '../../redux/camper/selectors';
import { useEffect, useState } from 'react';
import { fetchCampers } from '../../redux/camper/operations';
import { Card } from '../Card/Card';
import css from './CatalogList.module.css';
import { Loader } from '../Loader/Loader';

export const CatalogList = ({ filters }) => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers) || [];
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(4);

  // Завантажуємо нові дані при зміні фільтрів
  useEffect(() => {
    setPage(1);
    dispatch(fetchCampers({ filters, page: 1, itemsPerPage }));
  }, [dispatch, filters, itemsPerPage]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(fetchCampers({ filters, page: nextPage, itemsPerPage }));
  };

  if (isLoading && campers.length === 0) {
    return <Loader />;
  }

  if (error) {
    return <p>Nothing found</p>;
  }

  if (!isLoading && campers.length === 0) {
    return <p className={css.noResults}>Nothing found</p>;
  }

  return (
    <div>
      <ul>
        {campers.map(camper => (
          <li key={camper.id}>
            <Card camper={camper} />
          </li>
        ))}
      </ul>
      {campers.length >= itemsPerPage * page && (
        <button type="button" className={css.buttonLoad} onClick={loadMore}>
          Load more
        </button>
      )}
      {isLoading && campers.length > 0 && <Loader />}
    </div>
  );
};
