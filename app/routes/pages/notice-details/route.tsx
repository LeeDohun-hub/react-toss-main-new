import { Link } from 'react-router';

import prisma from '~/.server/lib/prisma';
import { Button } from '~/components/ui/button';

import NoticeContent from './components/notice-content';
import NoticeTitle from './components/notice-title';

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

export default function NoticeDetails({ loaderData }) {
  const { notice } = loaderData;

  return (
    <section>
      <div className="container">
        <h1 className="pt-[168px] pb-[25px] text-[44px] leading-[66px] font-[700]">
          공지사항
        </h1>
        <div>
          <NoticeTitle title={notice.title} createdAt={notice.createdAt} />
        </div>
        <div>
          <NoticeContent content={notice.content} />
          <Link to="/notice">
            <Button variant="secondary" className="my-[100px]">
              목록으로 돌아가기
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
