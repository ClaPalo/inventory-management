'use client'

import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsSidebarCollapsed } from '@/state'
import { Menu } from 'lucide-react'

const Sidebar = () => {
    const dispatch = useAppDispatch()
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
    )

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
    }

    const sidebarClassNames = `fixed flex flex-col ${
        isSidebarCollapsed ? 'w-0 md:w-16' : 'w-72 md:w-64'
    } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`
    return (
        <div className={sidebarClassNames}>
            {/* Top logo */}
            <div
                className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
                    isSidebarCollapsed ? 'px-5' : 'px-8'
                }`}
            >
                <div>logo</div>
                <h1
                    className={`font-extrabold text-2xl ${
                        isSidebarCollapsed ? 'hidden' : 'block'
                    }`}
                >
                    PALOSCOOP
                </h1>

                <button
                    className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
                    onClick={toggleSidebar}
                >
                    <Menu className="w-4 h-4" />
                </button>
            </div>

            {/* Links */}
            <div className="flex-grow mt-8">{/* links here */}</div>

            {/*  Footer */}
            <div>
                <p className="text-center text-xs text-gray-500">
                    &copy; 2024 Paloscia
                </p>
            </div>
        </div>
    )
}

export default Sidebar