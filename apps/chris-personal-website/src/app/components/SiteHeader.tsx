import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import {
  Button,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  cn,
} from '@chrismay/ui';

const SECTIONS = [
  { href: '#about', label: 'About' },
  { href: '#personal', label: 'Personal' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
];

const navLink =
  'inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-40 w-full border-b border-border/70 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6'>
        <a
          href='#top'
          className='font-display text-lg font-semibold tracking-tight text-foreground'
        >
          Chris May
          <span className='text-amber'>.</span>
        </a>

        <NavigationMenu className='hidden md:flex'>
          <NavigationMenuList>
            {SECTIONS.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild className={navLink}>
                  <a href={href}>{label}</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className='hidden items-center gap-2 md:flex'>
          <Button asChild variant='ghost'>
            <Link to='/resume'>Resume</Link>
          </Button>
          <Button asChild>
            <a href='#contact'>Contact</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className='md:hidden'
              aria-label='Open menu'
            >
              <Menu className='size-5' />
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className='w-72'>
            <SheetHeader>
              <SheetTitle className='font-display text-left'>
                Chris May
              </SheetTitle>
            </SheetHeader>
            <nav className='mt-2 flex flex-col gap-1 px-4' aria-label='Mobile'>
              {SECTIONS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(navLink, 'h-11 justify-start text-base')}
                >
                  {label}
                </a>
              ))}
              <Link
                to='/resume'
                onClick={() => setOpen(false)}
                className={cn(navLink, 'h-11 justify-start text-base')}
              >
                Resume
              </Link>
              <Button asChild className='mt-3'>
                <a href='#contact' onClick={() => setOpen(false)}>
                  Contact
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
