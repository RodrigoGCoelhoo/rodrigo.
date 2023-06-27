'use client'

import GeneralCard from '@/components/GeneralCard'
import { useGlobalContext } from '@/context/store'

import projectsData from '@/data/projects.json'

export default function Projects() {
  const { language } = useGlobalContext()

  return (
    <div className="mt-20 flex h-full w-full items-center justify-center font-sans">
      <div className="grid h-full w-[90%] grid-cols-3 gap-10 ">
        {projectsData.map((data, index) => {
          const languageData = data[language as keyof typeof data]

          return (
            <GeneralCard
              key={index}
              title={languageData.title}
              content={languageData.shortDescription}
              borderColor={'border-my-purple'}
            />
          )
        })}
      </div>
    </div>
  )
}
