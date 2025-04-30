import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
// tailwind

const DropdownExample = () => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-black px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-xs ring-1 ring-gray-300 ring-inset">
                    Options
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                </MenuButton>
            </div>

            <MenuItems
                anchor="bottom start"
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-black shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                <div className="py-1">
                    <MenuItem>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 data-focus:bg-gray-100 dark:data-focus:bg-gray-800 data-focus:text-gray-900 dark:data-focus:text-gray-200 data-focus:outline-hidden"
                        >
                            Account settings
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 data-focus:bg-gray-100 dark:data-focus:bg-gray-800 data-focus:text-gray-900 dark:data-focus:text-gray-200 data-focus:outline-hidden"
                        >
                            Support
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 data-focus:bg-gray-100 dark:data-focus:bg-gray-800 data-focus:text-gray-900 dark:data-focus:text-gray-200 data-focus:outline-hidden"
                        >
                            License
                        </a>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    );
};

export default DropdownExample;
