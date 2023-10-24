import { Snippet } from '@nextui-org/react';

type Props = {
  value: string;
};

export default function UserSnippet({ value }: Props) {
  return (
    <Snippet
      variant="solid"
      size="lg"
      className="bg-[#0070f0] w-full text-[#ededed]"
      hideSymbol
    >
      {value}
    </Snippet>
  );
}
