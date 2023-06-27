'use client'

import GeneralTimeline from '@/components/GeneralTimeline'
import { useGlobalContext } from '@/context/store'

import academicData from '@/data/academic.json'

export default function Academic() {
  const { language } = useGlobalContext()

  return (
    <div className="flex flex-col py-20 pl-20 font-sans">
      {academicData.map((data, key) => {
        const languageData = data[language as keyof typeof data]

        return (
          <GeneralTimeline
            key={key}
            startDate={languageData.startDate}
            endDate={languageData.endDate}
            title={languageData.title}
            subtitle={languageData.subtitle}
            description={languageData.description}
            color={'bg-my-red'}
            continuous={languageData.continuous}
          />
        )
      })}
    </div>
  )
}
