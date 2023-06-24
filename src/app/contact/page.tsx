'use client'

import { useState, CSSProperties } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import PuffLoader from 'react-spinners/PuffLoader'
import { useGlobalContext } from '@/context/store'

import phone from '../../../public/phone.png'
import whatsapp from '../../../public/whatsapp.png'
import linkedin from '../../../public/linkedin.png'
import contactAsset from '../../../public/contact_asset.svg'

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
}

export default function Contact() {
  const { register, handleSubmit, reset } = useForm()
  const { language } = useGlobalContext()

  const [isLoading, setIsLoading] = useState(false)
  const [emailReqSent, setEmailReqSent] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  function updateButtonValue() {
    if (emailReqSent && isSuccess) {
      if (language === 'PT') {
        return 'ENVIADO'
      } else {
        return 'SENT'
      }
    } else {
      if (language === 'PT') {
        return 'ENVIAR'
      } else {
        return 'SEND'
      }
    }
  }

  async function sendEmail(data: any) {
    setIsLoading(true)
    setEmailReqSent(true)
    await emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID
          ? process.env.NEXT_PUBLIC_SERVICE_ID
          : '',
        process.env.NEXT_PUBLIC_TEMPLATE_ID
          ? process.env.NEXT_PUBLIC_TEMPLATE_ID
          : '',
        {
          title: data.title,
          name: data.name,
          message: data.message,
          email: data.email,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        reset()
        setIsSuccess(true)
      })
      .catch((err) => {
        console.log('FAILED...', err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      <div className="absolute top-0 -z-10 h-[50vh] w-full bg-deep-gray"></div>
      <div className="relative flex w-full px-20 py-32">
        <div className="flex h-full w-[60%] flex-col items-center">
          <div className="flex flex-col text-white">
            <span className="text-3xl font-extrabold ">
              {language === 'PT'
                ? 'Ficou com alguma dúvida?'
                : 'Did you have any questions?'}
            </span>
            <span className="text-3xl font-extralight">
              {language === 'PT'
                ? 'Me ligue ou mande uma mensagem.'
                : 'Call me or send me a message.'}
            </span>
          </div>

          <div className="mb-24 mt-16 flex w-full max-w-[600px] justify-evenly text-sm font-light text-white">
            <div className="flex items-center">
              <Image src={phone} alt="Telephone" width={25} className="mr-4" />
              <span>+55 (11) 98651-6000</span>
            </div>

            <div className="flex">
              <a
                className="mr-4 flex items-center rounded-md bg-[#EEEEEE] px-4 py-2 text-black duration-200 hover:bg-[#DDDDDD]"
                href="https://wa.me/5511986516000"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={whatsapp}
                  alt="WhatsApp Logo"
                  width={25}
                  className="mr-4"
                />
                <span>WhatsApp</span>
              </a>

              <a
                className="flex items-center rounded-md bg-[#EEEEEE] px-4 py-2 text-black duration-200 hover:bg-[#DDDDDD]"
                href="https://www.linkedin.com/in/rodrigogc2/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={linkedin}
                  alt="LinkedIn Logo"
                  width={25}
                  className="mr-4"
                />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <Image
            src={contactAsset}
            alt="Illustration for contact"
            width={500}
          />
        </div>
        <div className="relative -top-20 h-full w-[40%] bg-light-gray px-14 py-16">
          <form onSubmit={handleSubmit(sendEmail)} className="flex flex-col">
            <span>{language === 'PT' ? 'Nome' : 'Name'}</span>
            <input
              type="text"
              className="mb-4 mt-1 h-8 border-0 p-2 outline-0"
              {...register('name')}
            />
            <span>E-mail</span>
            <input
              type="email"
              className="mb-4 mt-1 h-8 border-0 p-2 outline-0"
              {...register('email')}
            />
            <span>{language === 'PT' ? 'Título' : 'Title'}</span>
            <input
              type="text"
              className="mb-4 mt-1 h-8 border-0 p-2 outline-0"
              {...register('title')}
            />
            <span>{language === 'PT' ? 'Mensagem' : 'Message'}</span>
            <textarea
              cols={40}
              rows={5}
              className="mb-4 mt-1 h-48 overflow-scroll border-0 p-2 outline-0"
              {...register('message')}
            />
            <button
              type="submit"
              className={`mt-8 w-min self-center border-[1px] border-deep-gray px-10 py-2 transition duration-200 ease-in-out hover:bg-[#DDDDDD] ${
                emailReqSent &&
                isSuccess &&
                'cursor-default border-my-green bg-my-green hover:bg-my-green'
              } }`}
              disabled={emailReqSent && isSuccess}
            >
              {updateButtonValue()}
            </button>

            {isLoading && (
              <div className="absolute left-0 top-0 z-40 flex h-full w-full items-center justify-center bg-[#dddddd72] backdrop-blur-[2px] ">
                <PuffLoader
                  color={'#FE950B'}
                  loading={isLoading}
                  cssOverride={override}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  )
}
