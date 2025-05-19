import dayjs from 'dayjs';
import { ArrowUpDown } from 'lucide-react';
import { Link, useSearchParams } from 'react-router';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';
import type { Notice } from '~/generated/prisma';

interface Props {
  notices: Notice[];
}

export const NoticeTable = ({ notices }: Props) => {
  const [_, setSearchParams] = useSearchParams();
  const handleSort = () => {
    setSearchParams((current) => {
      const params = {
        ...Object.fromEntries(current),
      };
      params.sort = params.sort === 'asc' ? 'desc' : 'asc';
      return params;
    });
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>제목</TableHead>
            <TableHead onClick={handleSort}>
              <div className="flex cursor-pointer items-center gap-2">
                <span>생성시간</span>
                <ArrowUpDown size={16} />
              </div>
            </TableHead>
            <TableHead>수정시간</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notices.map((notice) => (
            <TableRow key={notice.id}>
              <TableCell>{notice.id}</TableCell>
              <TableCell>
                <Link to={`/admin/notice/${notice.id}`} className="hover: underline">
                  {notice.title}
                </Link>
              </TableCell>
              <TableCell>
                {dayjs(notice.createdAt).format('YYYY.MM.DD HH:mm:ss')}
              </TableCell>
              <TableCell>
                {dayjs(notice.updatedAt).format('YYYY.MM.DD HH:mm:ss')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
