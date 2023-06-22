import AcademicCard from '../AcademicCard'

interface AcademicTimelineProps {
  date: string
  title: string
  subjects: {
    title: string
    content: string
  }[]
}

export default function AcademicTimeline({
  date,
  title,
  subjects,
}: AcademicTimelineProps) {
  return (
    <div className="flex h-56 w-full flex-row">
      <span className="whitespace-pre text-base font-light text-my-gray">
        {date}
      </span>

      <div className="relative mx-16">
        <div className="absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 transform rounded-full bg-my-red" />
        <div className="absolute left-1/2 top-2 h-[101%] w-2 -translate-x-1/2 transform bg-my-red" />
      </div>

      <div className="flex w-full flex-col overflow-y-hidden">
        <span className="text-lg leading-5">{title}</span>

        <div className="relative flex items-center">
          <div className="scroll my-2 overflow-x-scroll scroll-smooth whitespace-nowrap py-4 pl-2">
            {subjects.map((subject) => (
              <AcademicCard
                key={subject.title}
                title={subject.title}
                content={subject.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
