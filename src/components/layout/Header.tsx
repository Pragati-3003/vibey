import clsxm from '@/lib/clsxm';
import { SettingsContext } from '@/lib/context/settings';

import { Auth } from '@/components/Auth/Auth';
import IconLink from '@/components/links/IconLink';
import NavLink from '@/components/links/NavLink';
import Logo from '@/components/Logo';

import React from 'react';
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';

export const navigation = [
  { label: 'Events', href: '/events' },
  { label: 'CFPs', href: '/cfps' },
  { label: 'Hackathons', href: '/hackathons' },
];

export default function Header() {
  const [modal, setModal] = React.useState<null | 'auth' | 'menu'>(null);
  const [style, setMenuStyle] = React.useState('');
  const [menuStyle, setStyle] = React.useState('');
  const { theme } = React.useContext(SettingsContext);

  const menuhandler = () => {
    setModal((p) => (p === 'menu' ? null : 'menu'));
    setMenuStyle((p) => (p.trim().length > 0 ? '' : 'scale-menu'));
    setStyle((p) => (p.length > 0 ? '' : 'translate-x-0 opacity-100'));
  };
  const moveToSectionHandler = () => {
    setModal((p) => (p === 'menu' ? null : 'menu'));
    setMenuStyle((p) => (p.length > 0 ? '' : 'scale-menu'));
    setStyle((p) =>
      p === 'translate-x-0 opacity-100' ? '' : 'translate-x-0 opacity-100'
    );
  };
  return (
    <>
      <header
        className={clsxm(
          'top-0 z-[60] flex w-screen items-center justify-between text-base-content',
          'transition-[background-color] duration-300 ease-in-out',
          'h-20',
          'fixed',
          'bg-black/[0.7] backdrop-saturate-[180%] supports-[backdrop-filter]:bg-black/60 supports-[backdrop-filter]:backdrop-blur-[20px]'
        )}
      >
        <div className="layout mx-auto flex h-full flex-wrap items-center justify-between gap-4 sm:flex md:flex-row">
          {/* logo */}

          <Logo
            href="/"
            className={`absolute z-50 mr-auto text-white sm:mr-0 md:relative ${
              theme === 'light' && modal === 'menu' && 'text-color-pink'
            }`}
          >
            {}
          </Logo>

          {/* navigation links */}
          <nav className="text-content-clr/70 hidden flex-wrap items-center justify-center gap-[2vw] pl-4 tracking-wide text-white md:flex">
            {navigation.map((link, index) => (
              <NavLink key={index} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* github icons */}
          <IconLink
            href="https://github.com/UniKonf/vibey"
            type="submit"
            aria-label="Visit us on Github"
            title="Github (External Link)"
            className="ml-auto hidden gap-2 rounded-full md:flex"
            icon={AiOutlineGithub}
          />

          {/* get started button */}
          <div className="ml-auto hidden sm:flex md:ml-0">
            <Auth modal={modal} setModal={setModal} />
          </div>

          {/* menu open and close button */}
          <button
            className="h1 text-content-clr/50 focus-visible:border-content-clr group absolute right-0 z-50 flex aspect-square h-12 flex-col items-center justify-center rounded-full text-white focus:outline-none sm:relative md:hidden"
            onClick={menuhandler}
          >
            <span className="sr-only">Menu</span>

            <div className="relative flex flex-col gap-1.5">
              <div
                className={`w-8 rounded-xl border-2 transition-all duration-300 ease-in-out ${
                  modal === 'menu' && 'absolute rotate-45'
                } ${
                  theme === 'light' && modal === 'menu'
                    ? 'border-neutral-900'
                    : 'border-neutral-300'
                }`}
              ></div>
              <div
                className={`w-8 rounded-xl border-2 border-neutral-300 transition-all duration-300 ease-in-out ${
                  modal === 'menu' && '-translate-x-6 opacity-0'
                }`}
              ></div>
              <div
                className={`w-8 rounded-xl border-2 transition-all duration-300 ease-in-out ${
                  modal === 'menu' && 'absolute -rotate-45'
                } ${
                  theme === 'light' && modal === 'menu'
                    ? 'border-neutral-900'
                    : 'border-neutral-300'
                }`}
              ></div>
            </div>
          </button>
          <div
            className={` ${
              theme === 'light' ? 'bg-neutral-100' : 'bg-zinc-900'
            } absolute right-4 top-8 h-4 w-4 rounded-full transition-all duration-1000 md:hidden ${
              style.length > 0 ? style : 'scale-0 delay-200'
            }`}
          ></div>
          <div
            className={`absolute top-32 flex w-full flex-col justify-between transition-all duration-700 ease-in-out md:hidden ${
              modal === 'auth' && '-translate-x-500 opacity-0'
            }`}
          >
            <div
              className={`flex flex-col gap-5 transition-all delay-150 duration-500 ${
                menuStyle.length > 0
                  ? menuStyle
                  : '-translate-x-6 text-transparent opacity-0'
              }}`}
            >
              {navigation.map((option, index) => (
                <NavLink
                  key={index}
                  className="flex w-full items-center text-3xl"
                  href={option.href}
                  onClick={moveToSectionHandler}
                >
                  {option.label}
                </NavLink>
              ))}
            </div>
            <div
              className={`mt-7 transition-all delay-200 duration-500 ${
                menuStyle.length > 0
                  ? menuStyle
                  : '-translate-x-6 text-transparent opacity-0'
              }`}
            >
              <Auth
                modal={modal}
                setStyle={setStyle}
                setMenuStyle={setMenuStyle}
                setModal={setModal}
                buttonClass={`text-xl ${theme === 'light' && 'text-black'}`}
              />
            </div>
            <div
              className={`mt-32 transition-all delay-300 duration-500 ${
                menuStyle.length > 0
                  ? menuStyle
                  : '-translate-x-6 text-transparent opacity-0'
              }`}
            >
              <h1 className="text-3xl">Connect with us</h1>
              <hr className="mt-2 border-neutral-700"></hr>
              <div className="mt-4 flex gap-2">
                <IconLink
                  href="https://github.com/UniKonf/vibey"
                  type="submit"
                  aria-label="Visit us on Github"
                  title="Github (External Link)"
                  className="gap-2 rounded-full "
                  icon={AiOutlineGithub}
                />
                <IconLink
                  href="https://twitter.com/vibeydotlive"
                  type="submit"
                  aria-label="Visit us on Twitter"
                  title="Twitter (External Link)"
                  className="gap-2 rounded-full "
                  icon={AiOutlineTwitter}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
