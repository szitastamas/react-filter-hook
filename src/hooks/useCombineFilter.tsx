import { useMemo, useState } from 'react';

export function useCombineFilter<T>(initialArray: T[]) {
  type FilterCallback<T> = (array: T[]) => T[];

  type Filter = {
    name: string;
    callback: FilterCallback<T>;
  };

  const [filters, setFilters] = useState<Filter[]>([]);

  function applyFilters() {
    return filters.reduce((acc, filter) => filter.callback(acc), initialArray)
  }

  const filteredData = useMemo(() => {
    return applyFilters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  function isApplied(name: string) {
    return !!filters.find(item => item.name === name)
  }

  function addFilter(name: string, callback: FilterCallback<T>) {
    setFilters([...filters, { name, callback }]);
  }

  function removeFilter(name: string) {
    setFilters(filters.filter((item) => item.name !== name));
  }

  function toggleFilter(name: string, callback: FilterCallback<T>) {
    if (filters.find((item) => item.name === name)) {
      return removeFilter(name);
    }

    addFilter(name, callback);
  }

  function resetFilters() {
    setFilters([]);
  }

  return {
    filteredData,
    isApplied,
    addFilter,
    removeFilter,
    toggleFilter,
    resetFilters,
  };
}
