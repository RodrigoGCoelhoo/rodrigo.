
import AcademicCard from "../AcademicCard";

interface AcademicTimelineProps {
  date: string;
  title: string;
  subjects: {
    title: string;
    content: string;
  }[]
}

export default function AcademicTimeline({date, title, subjects} : AcademicTimelineProps){
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
        <span className="text-lg leading-5">
          {title}
        </span>

        <div className="w-full my-6 flex flex-row overflow-x-scroll">
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
  )
}