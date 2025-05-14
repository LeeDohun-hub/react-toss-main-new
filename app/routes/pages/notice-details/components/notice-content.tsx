interface Props {
  content: string;
}

// TODO: content를 HTML로 변환하는 로직 추가
export default function NoticeContent({ content }: Props) {
  return (
    <p className="pt-[40px] text-[16px] leading-[25.6px] font-[400]">
      {content.split('\n').map((line, index) => (
        <span key={index} className="block pb-[10px]">
          {line}
        </span>
      ))}
    </p>
  );
}
