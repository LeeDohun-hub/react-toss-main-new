import dayjs from 'dayjs';

import { cn } from '~/lib/utils';

interface Props {
  title: string;
  createdAt: Date;
  isLast?: boolean;
}

export default function NoticeItem({ title, createdAt, isLast }: Props) {
  return (
    <div
      className={cn(
        'flex h-[100px] flex-col justify-center gap-[3px] py-[16px]',
        !isLast && 'border-b-1',
      )}
    >
      <h3 className="text-[18px] leading-[23.4px] font-[700]">{title}</h3>
      <p
        className="text-[14px] leading-[18.2px] font-[400]"
        style={{ color: 'rgb(78, 89, 104)' }}
      >
        {dayjs(createdAt).format('YYYY. MM. DD')}
      </p>
    </div>
  );
}
