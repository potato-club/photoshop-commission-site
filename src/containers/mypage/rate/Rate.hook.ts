import { usePagination } from '../post/hooks/usePagination';
import { useQueryGetGradeApi } from './hooks/useQueryGetGradeApi';
import { useQueryGetRate } from './hooks/useQueryGetRate';

export const useRate = () => {
  const { grade } = useQueryGetGradeApi();
  const { page, offset, handleChangePage } = usePagination();
  const { isError, isLoading, list } = useQueryGetRate(page);

  return { isError, isLoading, grade, page, offset, list, handleChangePage };
};
