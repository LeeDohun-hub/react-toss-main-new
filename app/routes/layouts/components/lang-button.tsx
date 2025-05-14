import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

interface Props {
  language: string;
  setLanguage: (language: string) => void;
  value: string;
  children?: React.ReactNode;
}

export default function LangButton({ language, setLanguage, value, children }: Props) {
  return (
    <Button
      variant="ghost"
      className={cn(
        'px-[10px] text-[15px] leading-[1.5] font-[500] text-[#d1d6db]',
        language === value ? 'text-[rgb(78, 89, 104)]' : '',
      )}
      onClick={() => setLanguage(value)}
    >
      {children ?? ''}
    </Button>
  );
}
