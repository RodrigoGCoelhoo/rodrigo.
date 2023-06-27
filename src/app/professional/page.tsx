'use client'

import GeneralTimeline from '@/components/GeneralTimeline'
import { useGlobalContext } from '@/context/store'

import professionalData from '@/data/professional.json'

export default function Professional() {
  const { language } = useGlobalContext()

  return (
    <div className="flex flex-col py-20 pl-20 font-sans">
      {professionalData.map((data, key) => {
        const languageData = data[language as keyof typeof data]

        return (
          <GeneralTimeline
            key={key}
            startDate={languageData.startDate}
            endDate={languageData.endDate}
            title={languageData.title}
            subtitle={languageData.subtitle}
            description={languageData.description}
            color={'bg-my-green'}
            continuous={languageData.continuous}
          />
        )
      })}
    </div>
  )
}
