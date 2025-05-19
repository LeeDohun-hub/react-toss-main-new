import dayjs from 'dayjs';
import { useNavigate } from 'react-router';

import prisma from '~/.server/lib/prisma';
import { BreadcrumbItem } from '~/components/ui/breadcrumb';
import { Button } from '~/components/ui/button';
import { Separator } from '~/components/ui/separator';

import type { Route } from '../admin-notice-details/+types/route';

export const loader = async ({ params }) => {
  const { id } = params;
  const notice = await prisma.notice.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!notice) {
    throw new Error('Notice not found');
  }

  return {
    notice,
  };
};

export const handle = {
  breadcrumb: () => <BreadcrumbItem>공지사항 관리 / 상세</BreadcrumbItem>,
};

export default function AdminNoticeDetails({ loaderData }: Route.ComponentProps) {
  const { notice } = loaderData;
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="leading-1.4 text-2xl font-bold">{notice.title}</h1>
      <div className="flex justify-between py-4 text-foreground/40">
        <p>{dayjs(notice.createdAt).format('YYYY-MM-DD HH:mm:ss')}</p>
        <p>{dayjs(notice.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</p>
      </div>
      <Separator />
      <div className="pt-[40px] text-[16px] leading-[25.6px] font-[400]">
        {notice.content.split('\n').map((line, index) => (
          <p key={index} className="block pb-[10px]">
            {line}
          </p>
        ))}
      </div>
      <div className="mt-8 flex justify-between">
        <Button onClick={() => navigate(-1)} variant="secondary">
          목록 보기
        </Button>
        <Button>수정</Button>
      </div>
    </div>
  );
}
