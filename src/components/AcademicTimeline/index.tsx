
interface AcademicTimelineProps {
  date: string;
  title: string;
}

export default function AcademicTimeline({date, title} : AcademicTimelineProps){
  return(
    <div className="flex flex-row w-full h-56">
      <span className="font-light text-my-gray whitespace-pre text-base">
        {date}
      </span>

      <div className="relative mx-16">
        <div className="absolute w-6 h-6 bg-my-red rounded-full top-0 left-1/2 transform -translate-x-1/2"/>
        <div className="absolute w-2 h-full bg-my-red left-1/2 transform -translate-x-1/2 mt-2"/>
      </div>

      <div className="w-full flex flex-col">
        <span className="text-lg m-0 leading-5">
          {title}
        </span>

        <div className="w-full h-full my-8">
          {/* Academic cards */}
        </div>
      </div>
    </div>
  )
}