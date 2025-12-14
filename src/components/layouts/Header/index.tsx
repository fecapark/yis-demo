import { clsx } from 'clsx';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isDemo = location.pathname.startsWith('/demo');
  const isComponents = location.pathname.startsWith('/components');

  return (
    <header className="border-grey100 bg-background fixed top-0 right-0 left-0 z-50 flex h-14 items-center border-b px-6">
      <Link
        className="flex cursor-pointer items-center gap-2 text-lg font-bold transition-opacity hover:opacity-80"
        to="/"
      >
        <img alt="logo" className="h-4.5" src="/Logo.png" />
      </Link>
      <nav className="text-15 absolute right-6 flex items-center gap-10 lg:right-auto lg:left-1/2 lg:-translate-x-1/2">
        <Link
          className={clsx(
            'font-medium no-underline transition-colors',
            isHome ? 'text-white' : 'text-neutralMuted hover:text-white',
          )}
          to="/"
        >
          홈
        </Link>
        <Link
          className={clsx(
            'font-medium no-underline transition-colors',
            isComponents ? 'text-white' : 'text-neutralMuted hover:text-white',
          )}
          to="/components"
        >
          컴포넌트
        </Link>
        <Link
          className={clsx(
            'font-medium no-underline transition-colors',
            isDemo ? 'text-white' : 'text-neutralMuted hover:text-white',
          )}
          to="/demo"
        >
          데모
        </Link>
      </nav>
    </header>
  );
};
