import Image from 'next/image';
import Link from 'next/link';


const NavBar = () => {
    return (
        <header>
            <nav className="border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <Link href="/">
                        <Image src="/logo.svg" width={160} height={49} alt="Logo"/>
                    </Link>
                        <ul className="flex justify-evenly w-8/12 font-bold text-blue-10">
                            <li>
                                <Link href="/centros" aria-current="page">CENTROS</Link>
                            </li>
                            <li>
                                <Link href="/especialistas" aria-current="page">ESPECIALISTAS</Link>
                            </li>
                            <li>
                                <Link href="/terapias" aria-current="page">TERAPIAS</Link>
                            </li>
                            <li>
                                <Link href="/addicciones" aria-current="page">ADICCIONES</Link>
                            </li>
                            <li>
                                <Link href="/tratamientos" aria-current="page">TRATAMIENTOS</Link>
                            </li>
                            <li>
                                <Link href="/cuminidad" aria-current="page">COMUNIDAD</Link>
                            </li>
                        </ul>
                    <div className="flex font-bold text-blue-10">
                        <Link href="/">
                            BLOG
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default  NavBar;