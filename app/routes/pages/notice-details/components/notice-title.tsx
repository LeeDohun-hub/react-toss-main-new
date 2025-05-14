import dayjs from 'dayjs';

interface Props {
  title: string;
  createdAt: Date;
}

export default function NoticeTitle({ title, createdAt }: Props) {
  return (
    <div className="flex h-[116px] flex-col justify-center gap-[3px] border-b-1 py-[16px]">
      <h3 className="text-[24px] leading-[38.4px] font-[700]">{title}</h3>
      <p
        className="text-[14px] leading-[22.4px] font-[500]"
        style={{ color: 'rgb(78, 89, 104)' }}
      >
        {dayjs(createdAt).format('YYYY. MM. DD')}
      </p>
    </div>
  );
}
