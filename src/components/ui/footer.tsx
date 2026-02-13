import Link from 'next/link'

// Import generic icons from lucide-react
import {
    Instagram,
    MessageCircle,
    Mail
} from 'lucide-react'

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
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {/* Using generic icons for social links */}
                    <Link
                        href="https://www.instagram.com/hussaincatterybanglore/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-slate-400 hover:text-pink-600 block transition-colors">
                        <Instagram className="size-6" />
                    </Link>
                    <Link
                        href="https://wa.me/916362693487"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="text-slate-400 hover:text-green-500 block transition-colors">
                        <MessageCircle className="size-6" />
                    </Link>
                    <Link
                        href="mailto:hello@hussaincattery.com"
                        aria-label="Email"
                        className="text-slate-400 hover:text-indigo-600 block transition-colors">
                        <Mail className="size-6" />
                    </Link>
                </div>
                <p className="text-center text-sm font-medium text-slate-500 mb-2">Established 2017 · <span suppressHydrationWarning>{new Date().getFullYear() - 2017}</span>+ Years of Excellence</p>
                <span className="text-slate-400 block text-center text-sm"> © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Hussain Cattery, All rights reserved</span>
            </div>
        </footer>
    )
}
