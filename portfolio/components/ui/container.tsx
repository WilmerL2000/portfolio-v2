type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <div className="mx-auto max-w-[95rem]">{children}</div>;
}
