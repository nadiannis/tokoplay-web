import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import Container from '../container';

export default function Navbar() {
  return (
    <header className="py-3.5 sticky top-0 z-50 bg-gray-950 bg-opacity-80 backdrop-filter backdrop-blur-md backdrop-saturate-100 shadow-md">
      <Container>
        <div className="flex items-center gap-2 text-slate-50">
          <a href="https://www.tokopedia.com">
            <IoIosArrowRoundBack className="text-2xl" />
          </a>
          <Link to="/" className="font-bold text-sm">
            Tokoplay
          </Link>
        </div>
      </Container>
    </header>
  );
}
