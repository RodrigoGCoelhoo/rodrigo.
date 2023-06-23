interface ProfessionalTimelineProps {
  startDate: string
  endDate: string
  company: string
  jobDescription: string
  description: string[]
}

export default function ProfessionalTimeline({
  startDate,
  endDate,
  company,
  jobDescription,
  description,
}: ProfessionalTimelineProps) {
  return (
    <div className="flex h-full w-full flex-row">
      <div className="relative flex flex-col justify-between">
        <span className="whitespace-pre text-base font-light text-my-gray">
          {startDate}
        </span>
        <span className="whitespace-pre text-base font-light text-my-gray">
          {endDate}
        </span>
      </div>

      <div className="relative mx-16 flex flex-col justify-between">
        <div className="absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 transform rounded-full bg-my-green" />
        <div className="absolute left-1/2 top-2 h-[95%] w-2 -translate-x-1/2 transform bg-my-green" />
        <div className="absolute bottom-0 left-1/2 h-6 w-6 -translate-x-1/2 transform rounded-full bg-my-green" />
      </div>

      <div className="flex w-full flex-col overflow-y-hidden">
        <span className="mb-2 text-2xl font-semibold leading-5">{company}</span>
        <span className="mb-4 text-lg font-light leading-5">
          {jobDescription}
        </span>

        <ul className="mb-8 ml-2">
          {description.map((item, index) => (
            <li key={index} className="text-base font-light leading-6">
              - {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
