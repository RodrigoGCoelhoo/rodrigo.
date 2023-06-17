'use client';

import { useGlobalContext } from '@/context/store';
import { useRouter } from 'next/navigation'

interface HeaderProps {
  page: 'home' | 'academic' | 'professional' | 'personal' | 'certificates' | 'projects';
}

export default function Header(){
  
  const router = useRouter()
  const { page, setPage, language, setLanguage } = useGlobalContext();


  const dotColorDict: any = {
    'home': "text-w",
    'academic': "text-my-red",
    'professional': "text-my-green",
    'personal': "text-my-blue",
    'certificates': "text-my-yellow",
    'projects': "text-my-purple"
  }





  function handlePageChange(page: '' | 'academic' | 'professional' | 'personal' | 'certificates' | 'projects'){
    setPage(page);
    router.push(`/${page}`);
  }

  return (
    <header className="flex flex-row bg-deep-gray px-16 py-12 justify-between items-center font-sans text-white">
      <div className="flex font-bold text-5xl">
        <a onClick={() => handlePageChange("")} className='cursor-pointer'>
          <h1>Rodrigo</h1>
        </a>
        <h1 className={dotColorDict[page] + " duration-200 ease-in-out"}>.</h1>
      </div>
      
      <div className="flex w-3/6 justify-between font-thin cursor-pointer text-xl">
        <div className='w-full flex justify-center'>
          <a onClick={() => handlePageChange("academic")} 
             className={`border-b-2 border-b-deep-gray hover:border-b-my-red hover:font-normal duration-200 ease-in-out ${page === "academic" ? 'font-normal border-b-my-red' : ''}`}>
            ACADÊMICA
          </a>
        </div>
        <div className='w-full flex justify-center'>
          <a onClick={() => handlePageChange("professional")} 
             className={`border-b-2 border-b-deep-gray hover:border-b-my-green hover:font-normal	duration-200 ease-in-out ${page === "professional" ? 'font-normal border-b-my-green' : ''}`}>
            PROFISSIONAL
          </a>
        </div>
        <div className='w-full flex justify-center'>
          <a onClick={() => handlePageChange("personal")} 
             className={`border-b-2 border-b-deep-gray hover:border-b-my-blue hover:font-normal duration-200 ease-in-out ${page === "personal" ? 'font-normal border-b-my-blue' : ''}`}>
            PESSOAL
          </a>
        </div>
        <div className='w-full flex justify-center'>
          <a onClick={() => handlePageChange("certificates")} 
             className={`border-b-2 border-b-deep-gray hover:border-b-my-yellow hover:font-normal duration-200 ease-in-out ${page === "certificates" ? 'font-normal border-b-my-yellow' : ''}`}>
            CERTIFICADOS
          </a>
        </div>
        <div className="w-full flex justify-center">
          <a onClick={() => handlePageChange("projects")} 
             className={`border-b-2 border-b-deep-gray hover:border-b-my-purple hover:font-normal duration-200 ease-in-out ${page === "projects" ? 'font-normal border-b-my-purple' : ''}`}>
            PROJETOS
          </a>
        </div>
      </div>

      <div className="flex">
        <h3>PT</h3>
        <h3>EN</h3>
      </div>
    </header>
  )
}