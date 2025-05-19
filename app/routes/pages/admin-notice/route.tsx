import { useEffect, useState } from 'react';
import { type LoaderFunctionArgs, redirect, useSearchParams } from 'react-router';

import prisma from '~/.server/lib/prisma';
import { getAdminAuthSession } from '~/.server/services/session.service';
import { BreadcrumbItem } from '~/components/ui/breadcrumb';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import type { SortOrder } from '~/generated/prisma/internal/prismaNamespace';

import type { Route } from '../admin-notice/+types/route';
import NoticePagination from './components/notice-pagination';
import { NoticeTable } from './components/notice-table';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const adminAuthSession = await getAdminAuthSession(request);
  const adminAuth = adminAuthSession.getAdminAuth();
  if (!adminAuth) {
    return redirect('/admin/login');
  }

  const url = new URL(request.url);
  const query = Object.fromEntries(url.searchParams);
  let page = parseInt(query.page);
  if (!page) page = 1;
  let sort = query.sort as SortOrder;
  if (!sort) sort = 'desc';

  const keyword = query.keyword as string;

  const [notices, totalCount] = await Promise.all([
    prisma.notice.findMany({
      where: {
        title: {
          contains: keyword,
        },
      },
      take: 10,
      skip: (page - 1) * 10,
      orderBy: {
        createdAt: sort,
      },
    }),
    prisma.notice.count({
      where: {
        title: {
          contains: keyword,
        },
      },
    }),
  ]);

  return { notices, totalCount, page };
};

export const handle = {
  breadcrumb: () => <BreadcrumbItem>공지사항 관리</BreadcrumbItem>,
};

export default function AdminNotice({ loaderData }: Route.ComponentProps) {
  const { notices, totalCount, page } = loaderData;
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => searchParams.get('keyword') ?? '');

  // debug
  useEffect(() => {
    console.log('keyword', keyword);
    setSearchParams((current) => {
      const param = {
        ...Object.fromEntries(current),
      };
      param.keyword = keyword;
      return param;
    });
  }, [keyword]);

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <Input
          className="w-100"
          placeholder="공지사항 제목으로 검색..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button>새 공지사항 등록</Button>
      </div>

      <NoticeTable notices={notices} />
      <div className="mt-8">
        <NoticePagination totalCount={totalCount} page={page} />
      </div>
    </div>
  );
}
