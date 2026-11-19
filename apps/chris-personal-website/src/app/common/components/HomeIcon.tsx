import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { WithTitle } from './WithTitle';

export const HomeIcon = () => {
  return (
    <Link
      to='/'
      aria-label='Home'
      className='inline-flex rounded-md p-2 text-amber transition-colors hover:bg-secondary'
    >
      <WithTitle title='Go to Home'>
        <Home className='size-7' aria-hidden='true' />
      </WithTitle>
    </Link>
  );
};
