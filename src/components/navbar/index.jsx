import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { MdHome, MdSearch } from 'react-icons/md';
import { useRouteMatch } from '../../hooks';
import Container from '../container';

export default function Navbar() {
  const routes = ['/', '/videos/:videoId', '/search'];
  const routeMatch = useRouteMatch(routes);
  const currentRoute = routeMatch.pattern.path;

  return (
    <header className="py-3.5 sticky top-0 z-50 bg-gray-950 bg-opacity-80 backdrop-filter backdrop-blur-md backdrop-saturate-100 shadow-md border-b border-gray-900">
      <Container className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-slate-50">
          {currentRoute === routes[0] ? (
            <a href="https://www.tokopedia.com">
              <IoIosArrowRoundBack className="text-2xl" />
            </a>
          ) : (
            <Link to="/">
              <MdHome className="text-2xl" />
            </Link>
          )}
          <Link to="/" className="font-bold text-sm">
            Tokoplay
          </Link>
        </div>
        <Link to="/search" className="font-bold text-sm">
          <MdSearch className="text-2xl" />
        </Link>
      </Container>
    </header>
  );
}
