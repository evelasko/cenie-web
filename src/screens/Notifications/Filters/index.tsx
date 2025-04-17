import cn from 'classnames';
import styles from './Filters.module.sass';
import Checkbox from '@/components/Checkbox';
import { SetStateAction } from 'react';
import { Dispatch } from 'react';

const Filters = ({
  className,
  filters,
  selectedFilters,
  setSelectedFilters,
}: {
  className: string;
  filters: string[];
  selectedFilters: string[];
  setSelectedFilters: Dispatch<SetStateAction<string[]>>;
}) => {
  const handleChange = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(x => x !== filter));
    } else {
      setSelectedFilters(selectedFilters => [...selectedFilters, filter]);
    }
  };

  return (
    <div className={cn(styles.filters, className)}>
      <div className={styles.info}>Filters</div>
      <div className={styles.group}>
        {filters.map((x, index) => (
          <Checkbox
            className={styles.checkbox}
            content={x}
            value={selectedFilters.includes(x)}
            onChange={() => handleChange(x)}
            key={index}
          />
        ))}
      </div>
      <div className={styles.btns}>
        <button className={cn('button-stroke button-small', styles.button)}>Select all</button>
        <button className={cn('button-stroke button-small', styles.button)}>Unslect all</button>
      </div>
    </div>
  );
};

export default Filters;
