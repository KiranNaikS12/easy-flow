import { useState } from "react"
import AppLogo from "../Logos/AppLogo"
import { NAV_LINKS } from "../../constants/navlinks"
import { X, ArrowUpRight, Menu } from 'lucide-react'


const LandingHeader = () => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <header className="sticky top-0 z-50 w-full  backdrop-blur-md ">
            <div className="flex items-center justify-between px-14 py-8">

                {/* APP LOGO */}
                <AppLogo />

                <nav className="hidden md:flex items-center gap-9">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-md font-semibold text-slate-600 transition-colors hover:text-theme"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="#explore"
                    className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#1C1F2E] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-theme"
                >
                    Explore
                    <ArrowUpRight className="h-4 w-4" />
                </a>


                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X className="h-6 w-6" /> : <Menu />}
                </button>

            </div>

            {open && (
                <div className="md:hidden border-0 px-6 py-4">
                    <nav className="flex flex-col gap-4">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-md font-medium text-slate-600 hover:text-theme"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#explore"
                            onClick={() => setOpen(false)}
                            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#1C1F2E] px-5 py-2.5 text-sm font-medium text-white"
                        >
                            Explore
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </nav>
                </div>
            )}

            {/* Simple animation below header */}
            <div className="mx-8 relative h-px bg-gray-300 overflow-hidden">
                <span className="absolute inset-y-0 left-0 w-1/4 bg-theme shadow-[0_0_6px_1px_#3EB489] animate-line-flow"
                />
            </div>
        </header>
    )
}

export default LandingHeader
