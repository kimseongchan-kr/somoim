interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="flex h-[60px] w-full items-center border-b border-[#0000001A] bg-white px-2.5">
      {children}
    </header>
  );
}
