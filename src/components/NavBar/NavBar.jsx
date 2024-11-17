import CartWidget from "./CartWidget"
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom"

const navigation = [
  { name: 'Zapatillas', link: '/category/Zapatillas', current: false },
  { name: 'Ropa', link: '/category/Ropa', current: false },
  { name: 'Accesorios', link: '/category/Accesorios', current: false },
  { name: 'Contacto', link: '/contacto', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
  return (
    <>
    <Disclosure as="nav" className="bg-orange-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link to="/" className="flex flex-shrink-0 items-center">
              <img
                alt="Ecommerce"
                src="/svg/Logo.svg" // Logo
                className="h-10 sm:h-14 w-auto"
              />
            </Link>
            <div className="hidden sm:ml-6 sm:block my-auto">
              <div className="flex space-x-4">
                {
                navigation.map((item) => (
                  <Link key={item.name} to={item.link} aria-current={item.current ? 'page' : undefined} className={classNames( item.current ? 'bg-gray-900 text-white' : 'text-gray-300 transition ease-in-out duration-500 hover:bg-[rgb(190,80,30)] hover:text-white hover:-translate-y-1 hover:scale-110', 'rounded-md px-3 py-2 text-sm font-medium',)}>
                    {item.name}
                  </Link>
                ))
                }
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <CartWidget/>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Link to={item.link} key={item.name}>
                <DisclosureButton
                  key={item.name}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
              </DisclosureButton>
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    </>
  )
}

export default NavBar