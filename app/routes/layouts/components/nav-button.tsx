import { Button } from '~/components/ui/button';

interface Props {
  children?: React.ReactNode;
}

export default function NavButton({ children }: Props) {
  return (
    <Button
      variant="ghost"
      className="text-[rgb(78, 89, 104)] cursor-pointer px-[10px] text-[15px] leading-[1.5] font-[500] hover:text-[#3182f6]"
    >
      {children ?? ''}
    </Button>
  );
}
