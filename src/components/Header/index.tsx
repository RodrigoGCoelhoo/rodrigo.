'use client'

// Libs
import { useGlobalContext } from '@/context/store'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

// Assets
import ptbr from '../../../public/ptbr-flag.png'
import enuk from '../../../public/enuk-flag.png'

export default function Header() {
  const pathname = usePathname()
  const { page, setPage, language, setLanguage } = useGlobalContext()

  const dotColorDict: any = {
    home: 'text-w',
    academic: 'text-my-red',
    professional: 'text-my-green',
    personal: 'text-my-blue',
    certificates: 'text-my-yellow',
    projects: 'text-my-purple',
    contact: 'text-my-orange',
  }

  function handleLanguageChange(language: 'PT' | 'EN') {
    setLanguage(language)
  }

  useEffect(() => {
    setPage(pathname.slice(1))
  }, [pathname, setPage])

  return (
    <header className="flex flex-row items-center justify-between bg-deep-gray px-16 py-12 font-sans text-white">
      <div className="flex text-4xl font-bold">
        <Link
          href="/"
          onClick={() => setPage('home')}
          className="cursor-pointer"
        >
          <h1>Rodrigo</h1>
        </Link>
        <h1 className={dotColorDict[page] + ' duration-200 ease-in-out'}>.</h1>
      </div>

      <div className="text-l flex w-3/6 cursor-pointer justify-between font-thin">
        <div className="flex w-full justify-center">
          <Link
            href="/academic"
            onClick={() => setPage('academic')}
            className={`border-b-2 border-b-deep-gray duration-200 ease-in-out hover:border-b-my-red hover:font-normal ${
              page === 'academic' ? 'border-b-my-red font-normal' : ''
            }`}
          >
            {language === 'PT' ? 'ACADÊMICA' : 'ACADEMIC'}
          </Link>
        </div>
        <div className="flex w-full justify-center">
          <Link
            href="/professional"
            onClick={() => setPage('professional')}
            className={`border-b-2 border-b-deep-gray duration-200 ease-in-out	hover:border-b-my-green hover:font-normal ${
              page === 'professional' ? 'border-b-my-green font-normal' : ''
            }`}
          >
            {language === 'PT' ? 'PROFISSIONAL' : 'PROFESSIONAL'}
          </Link>
        </div>
        <div className="flex w-full justify-center">
          <Link
            href="/personal"
            onClick={() => setPage('personal')}
            className={`border-b-2 border-b-deep-gray duration-200 ease-in-out hover:border-b-my-blue hover:font-normal ${
              page === 'personal' ? 'border-b-my-blue font-normal' : ''
            }`}
          >
            {language === 'PT' ? 'PESSOAL' : 'PERSONAL'}
          </Link>
        </div>
        {/* <div className="flex w-full justify-center">
          <Link
            href="/certificates"
            onClick={() => setPage('certificates')}
            className={`border-b-2 border-b-deep-gray duration-200 ease-in-out hover:border-b-my-yellow hover:font-normal ${
              page === 'certificates' ? 'border-b-my-yellow font-normal' : ''
            }`}
          >
            {language === 'PT' ? 'CERTIFICADOS' : 'CERTIFICATES'}
          </Link>
        </div> */}
        <div className="flex w-full justify-center">
          <Link
            href="/projects"
            onClick={() => setPage('projects')}
            className={`border-b-2 border-b-deep-gray duration-200 ease-in-out hover:border-b-my-purple hover:font-normal ${
              page === 'projects' ? 'border-b-my-purple font-normal' : ''
            }`}
          >
            {language === 'PT' ? 'PROJETOS' : 'PROJECTS'}
          </Link>
        </div>
        <div className="flex w-full justify-center">
          <Link
            href="/contact"
            onClick={() => setPage('contact')}
            className={`border-b-2 border-b-deep-gray duration-200 ease-in-out hover:border-b-my-orange hover:font-normal ${
              page === 'contact' ? 'border-b-my-orange font-normal' : ''
            }`}
          >
            {language === 'PT' ? 'CONTATO' : 'CONTACT'}
          </Link>
        </div>
      </div>

      <div className="flex font-thin">
        <a
          className="m-2 flex cursor-pointer flex-col items-center"
          onClick={() => handleLanguageChange('PT')}
        >
          <Image src={ptbr} alt="Brazillian flag" width={30} />
          <h3
            className={`duration-200 ease-in-out ${
              language === 'PT' ? 'font-normal' : ''
            }`}
          >
            PT
          </h3>
        </a>

        <a
          className="m-2 flex cursor-pointer flex-col items-center"
          onClick={() => handleLanguageChange('EN')}
        >
          <Image src={enuk} alt="United Kingdom flag" width={30} />
          <h3
            className={`duration-200 ease-in-out ${
              language === 'EN' ? 'font-normal' : ''
            }`}
          >
            EN
          </h3>
        </a>
      </div>
    </header>
  )
}
