'use client'
import { useState } from 'react'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react'
import { HeaderLogo } from './header-logo'
import { IconMenu2, IconX } from '@tabler/icons-react'

export const HeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = ['HOME', 'ABOUT', 'MUSIC', 'CONTACT']
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} height='' maxWidth='full'>
      <NavbarContent justify='start'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='h-full w-16 text-left'
          icon={isMenuOpen ? <IconX size={48} /> : <IconMenu2 size={48} />}
        />
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarBrand className='justify-end'>
          <HeaderLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenu className='flex flex-col justify-evenly items-center bg-foreground z-50 p-8 top-0 h-full'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          icon={isMenuOpen ? <IconX size={54} /> : <IconMenu2 size={80} />}
          className='text-white h-20 mt-12'
        />

        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === 1 ? 'primary' : 'success'}
              className='w-full  text-2xl hover:text-focus'
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
