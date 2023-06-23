interface GeneralTimelineProps {
  startDate: string
  endDate: string
  title: string
  subtitle: string
  description: string[]
  color: string
}

export default function GeneralTimeline({
  startDate,
  endDate,
  title,
  subtitle,
  description,
  color,
}: GeneralTimelineProps) {
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
        <div
          className={`absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 transform rounded-full ${color}`}
        />
        <div
          className={`absolute left-1/2 top-2 h-[95%] w-2 -translate-x-1/2 transform ${color}`}
        />
        <div
          className={`absolute bottom-0 left-1/2 h-6 w-6 -translate-x-1/2 transform rounded-full ${color}`}
        />
      </div>

      <div className="flex w-full flex-col overflow-y-hidden">
        <span className="mb-2 text-2xl font-semibold leading-5">{title}</span>
        <span className="mb-4 text-lg font-light leading-5">{subtitle}</span>

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
