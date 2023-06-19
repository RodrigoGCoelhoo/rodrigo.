'use client';

// Libs
import { useGlobalContext } from '@/context/store';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image'
import { useEffect } from 'react';

// Assets
import ptbr from '../../../public/ptbr-flag.png'
import enuk from '../../../public/enuk-flag.png'

export default function Header(){
  
  const pathname = usePathname()
  const { page, setPage, language, setLanguage } = useGlobalContext();

  const dotColorDict: any = {
    'home': "text-w",
    'academic': "text-my-red",
    'professional': "text-my-green",
    'personal': "text-my-blue",
    'certificates': "text-my-yellow",
    'projects': "text-my-purple",
    'contact': 'text-my-orange'
  }

  function handleLanguageChange(language: 'PT' | 'EN'){
    setLanguage(language);
  }

  useEffect(() => {
    setPage(pathname.slice(1));
  }, [pathname, setPage])

  return (
    <header className="flex flex-row bg-deep-gray px-16 py-12 justify-between items-center font-sans text-white">
      <div className="flex font-bold text-4xl">
        <Link href="/" onClick={() => setPage('home')} className='cursor-pointer'>
          <h1>Rodrigo</h1>
        </Link>
        <h1 className={dotColorDict[page] + " duration-200 ease-in-out"}>.</h1>
      </div>
      
      <div className="flex w-4/6 justify-between font-thin cursor-pointer text-l">
        <div className='w-full flex justify-center'>
          <Link href="/academic" onClick={() => setPage("academic")} 
             className={`border-b-2 border-b-deep-gray hover:border-b-my-red hover:font-normal duration-200 ease-in-out ${page === "academic" ? 'font-normal border-b-my-red' : ''}`}>
            {language === "PT" ? "ACADÊMICA" : "ACADEMIC"}
          </Link>
        </div>
        <div className='w-full flex justify-center'>
          <Link href="/professional" onClick={() => setPage("professional")} 
             className={`border-b-2 border-b-deep-gray hover:border-b-my-green hover:font-normal	duration-200 ease-in-out ${page === "professional" ? 'font-normal border-b-my-green' : ''}`}>
            {language === "PT" ? "PROFISSIONAL" : "PROFESSIONAL"}
          </Link>
        </div>
        <div className='w-full flex justify-center'>
          <Link href="/personal" onClick={() => setPage("personal")} 
             className={`border-b-2 border-b-deep-gray hover:border-b-my-blue hover:font-normal duration-200 ease-in-out ${page === "personal" ? 'font-normal border-b-my-blue' : ''}`}>
            {language === "PT" ? "PESSOAL" : "PERSONAL"}
          </Link>
        </div>
        <div className='w-full flex justify-center'>
          <Link href="/certificates" onClick={() => setPage("certificates")} 
             className={`border-b-2 border-b-deep-gray hover:border-b-my-yellow hover:font-normal duration-200 ease-in-out ${page === "certificates" ? 'font-normal border-b-my-yellow' : ''}`}>
            {language === "PT" ? "CERTIFICADOS" : "CERTIFICATES"}
          </Link>
        </div>
        <div className="w-full flex justify-center">
          <Link href="/projects" onClick={() => setPage("projects")} 
             className={`border-b-2 border-b-deep-gray hover:border-b-my-purple hover:font-normal duration-200 ease-in-out ${page === "projects" ? 'font-normal border-b-my-purple' : ''}`}>
            {language === "PT" ? "PROJETOS" : "PROJECTS"}
          </Link>
        </div>
        <div className="w-full flex justify-center">
          <Link href="/contact" onClick={() => setPage("contact")} 
             className={`border-b-2 border-b-deep-gray hover:border-b-my-orange hover:font-normal duration-200 ease-in-out ${page === "contact" ? 'font-normal border-b-my-orange' : ''}`}>
            {language === "PT" ? "CONTATO" : "CONTACT"}
          </Link>
        </div>
      </div>

      <div className="flex font-thin">
        <a 
          className='flex flex-col m-2 items-center cursor-pointer'
          onClick={() => handleLanguageChange("PT")}
        >
          <Image
            src={ptbr}
            alt='Brazillian flag'
            width={30}
          />
          <h3 className={`duration-200 ease-in-out ${language === "PT" ? 'font-normal' : ''}`}>PT</h3>
        </a>

        <a 
          className='flex flex-col m-2 items-center cursor-pointer'
          onClick={() => handleLanguageChange("EN")}
        >
          <Image
            src={enuk}
            alt='United Kingdom flag'
            width={30}
          />
          <h3 className={`duration-200 ease-in-out ${language === "EN" ? 'font-normal' : ''}`}>EN</h3>
        </a>
        
      </div>
    </header>
  )
}