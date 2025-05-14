import { Button } from '~/components/ui/button';

interface Props {
  children?: React.ReactNode;
}

export default function AppButton({ children }: Props) {
  return (
    <Button
      variant="plain"
      className="h-[46px] pr-[16px] pl-[14px] text-[17px] leading-[18px] font-[600] text-white"
      style={{ background: 'rgba(0, 12, 30, 0.8)' }}
    >
      {children ?? ''}
    </Button>
  );
}
