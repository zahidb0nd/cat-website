import Link from 'next/link'

import { ExperienceBadge } from './experience-badge'

const links = [
    {
        title: 'Home',
        href: '#home',
    },
    {
        title: 'Our Breeds',
        href: '#breed-gallery',
    },
    {
        title: 'Features',
        href: '#features',
    },
    {
        title: 'Contact',
        href: '#contact',
    },
]

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-24 border-t border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block size-fit flex flex-col items-center">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                        Hussain Cattery
                    </span>
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm font-medium">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-slate-500 hover:text-indigo-600 block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="flex justify-center mb-2">
                    <ExperienceBadge className="bg-slate-100 border-slate-200 text-slate-500" />
                </div>
                <span className="text-slate-400 block text-center text-sm"> © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Hussain Cattery, All rights reserved</span>
            </div>
        </footer>
    )
}
