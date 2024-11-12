import Header from '@/app/search/components/Header/Header';

interface SearchLayoutProps {
  children: React.ReactNode;
}

export default function SearchLayout({ children }: SearchLayoutProps) {
  return (
    <>
      <Header>필터</Header>
      {children}
    </>
  );
}
