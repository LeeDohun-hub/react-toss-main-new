import { useSearchParams } from 'react-router';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '~/components/ui/pagination';

interface Props {
  totalCount: number;
  page: number;
}

export default function NoticePagination({ totalCount, page }: Props) {
  const [_, setSearchParams] = useSearchParams();
  const totalPage = Math.ceil(totalCount / 10);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => setSearchParams({ page: `${page - 1}` })} />
        </PaginationItem>
        {Array.from({ length: totalPage }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink onClick={() => setSearchParams({ page: `${index + 1}` })}>
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => {
              if (page >= totalPage) return;
              setSearchParams({ page: `${page + 1}` });
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
