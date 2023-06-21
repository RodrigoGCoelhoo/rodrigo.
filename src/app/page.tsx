'use client'

// Libs
import Image from 'next/image'
import { useGlobalContext } from '@/context/store'

// Assets
import python from '../../public/python.png'
import nodejs from '../../public/nodejs.png'
import react from '../../public/react.png'
import figma from '../../public/figma.png'
import aws from '../../public/aws.png'
import js from '../../public/js.png'
import html from '../../public/html.png'
import css from '../../public/css.png'
import typescript from '../../public/typescript.png'
import github from '../../public/github.png'

export default function Home() {
  const { language } = useGlobalContext()

  return (
    <div className="flex flex-row items-center justify-between px-32 py-20 font-sans">
      <div>
        <h1 className="mb-4 text-8xl font-extralight">
          {language === 'PT' ? 'Olá! Eu sou o' : 'Hello! I am'}
        </h1>
        <h1 className="mb-8 text-8xl font-normal">Rodrigo Coelho</h1>

        <h4 className="ml-1 text-xl font-light">
          {language === 'PT'
            ? 'Desenvolvedor de software e apaixonado por tecnologia.'
            : 'Software developer and passionate about technology.'}
        </h4>

        <div className="mt-16">
          <div className="mb-6 flex flex-row items-center justify-between">
            <Image src={python} alt="Python logo" width={80} />
            <Image src={nodejs} alt="NodeJs logo" width={80} />
            <Image src={react} alt="React logo" width={80} />
            <Image src={figma} alt="Figma logo" width={80} />
            <Image src={aws} alt="AWS logo" width={80} />
          </div>

          <div className="flex flex-row items-center justify-between">
            <Image src={js} alt="Javascript logo" width={80} />
            <Image src={html} alt="HTML logo" width={80} />
            <Image src={css} alt="CSS logo" width={80} height={80} />
            <Image src={typescript} alt="Typescript logo" width={80} />
            <Image src={github} alt="GitHub logo" width={80} />
          </div>
        </div>
      </div>

      {/* This div will be replaced by an Image */}
      <div
        style={{ width: '500px', height: '60vh', backgroundColor: '#121212' }}
      ></div>
    </div>
  )
}
