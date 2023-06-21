
interface AcademicCardProps {
    title: string;
    content: string;
  }
  
  export default function AcademicCard({title, content} : AcademicCardProps){
    return(
      <div className="bg-light-gray !w-96 mr-8">
        <div className="px-5 py-4">
          <div className="font-medium text-sm mb-2">
            {title}
          </div>
          <div className="font-light text-sm leading-4 overflow-hidden line-clamp-5">
            {content}
          </div>
        </div>
      </div>
    )
  }