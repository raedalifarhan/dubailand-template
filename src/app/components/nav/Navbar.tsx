"use client"
import Link from 'next/link';
import { useState } from 'react';
import { GrLanguage } from 'react-icons/gr';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('الصفحة الرئيسية');

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    return (
        <header className="flex flex-col gap-3 my-5">
            <div className="flex justify-between flex-wrap">
                <a href="#">
                    <img src="images/logo-land_department.svg" width="200" alt="dubai gov" />
                </a>
                <a href="#">
                    <img src="images/logo-GovDubaiLogoNew.png" width="200" alt="internal portal" />
                </a>
            </div>

            <nav className="flex flex-wrap items-center justify-between rounded-md text-lg py-5 text-slate-50 border-2 px-2 bg-slate-800">
                <div className="w-full md:w-auto">
                    <ul className="flex flex-wrap items-center gap-3 md:gap-5 text-sm md:text-base">
                        <li>
                            <Link
                                href={`/`}
                                className={`p-3 rounded-md font-semibold ${activeLink === 'الصفحة الرئيسية' ? 'text-yellow-700' : 'hover:text-yellow-500 hover:font-semibold'}`}
                                onClick={() => handleLinkClick('الصفحة الرئيسية')}
                            >
                                الصفحة الرئيسية
                            </Link>
                        </li>
                        <li>
                            <Link
                                 href={`/orders`}
                                className={`p-3 rounded-md font-semibold ${activeLink === 'الاجتماعات والضيافة' ? 'text-yellow-700' : 'hover:text-yellow-500 hover:font-semibold'}`}
                                onClick={() => handleLinkClick('الاجتماعات والضيافة')}
                            >
                                الاجتماعات والضيافة
                            </Link>
                        </li>
                        <li>
                            <Link
                                 href={`/orders`}
                                className={`p-3 rounded-md font-semibold ${activeLink === 'المركبات' ? 'text-yellow-700' : 'hover:text-yellow-500 hover:font-semibold'}`}
                                onClick={() => handleLinkClick('المركبات')}
                            >
                                المركبات
                            </Link>
                        </li>
                        <li>
                            <Link
                                 href={`/orders`}
                                className={`p-3 rounded-md font-semibold ${activeLink === 'المواقف' ? 'text-yellow-700' : 'hover:text-yellow-500 hover:font-semibold'}`}
                                onClick={() => handleLinkClick('المواقف')}
                            >
                                المواقف
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`p-3 rounded-md font-semibold ${activeLink === 'الصيانة' ? 'text-yellow-700' : 'hover:text-yellow-500 hover:font-semibold'}`}
                                onClick={() => handleLinkClick('الصيانة')}
                            >
                                الصيانة
                            </a>
                        </li>
                        <li>
                            <Link
                                 href={`/orders`}
                                className={`p-3 rounded-md font-semibold ${activeLink === 'العقود' ? 'text-yellow-700' : 'hover:text-yellow-500 hover:font-semibold'}`}
                                onClick={() => handleLinkClick('العقود')}
                            >
                                العقود
                            </Link>
                        </li>
                        <li>
                            <Link
                                 href={`/orders`}
                                className={`p-3 rounded-md font-semibold ${activeLink === 'خدمات اخرى' ? 'text-yellow-700' : 'hover:text-yellow-500 hover:font-semibold'}`}
                                onClick={() => handleLinkClick('خدمات اخرى')}
                            >
                                خدمات اخرى
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link
                    href={`/`} className="flex items-center gap-2 p-3 hover:text-yellow-500 hover:font-semibold rounded-md">
                    <span className='text-sm'>Ar</span>
                    <GrLanguage size={24} title='arabic' />
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;
