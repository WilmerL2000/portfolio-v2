type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <div className="mx-auto max-w-[85rem] pb-14">{children}</div>;
}
