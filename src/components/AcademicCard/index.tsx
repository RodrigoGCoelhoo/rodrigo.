interface AcademicCardProps {
  title: string
  content: string
}

export default function AcademicCard({ title, content }: AcademicCardProps) {
  return (
    <div className="mr-8 inline-block h-[150px] w-96 overflow-hidden bg-light-gray px-5 py-4 duration-200 ease-in-out hover:scale-105">
      <div className="mb-2 text-sm font-medium">{title}</div>
      <div className="line-clamp-5 whitespace-normal text-sm font-light leading-4">
        {content}
      </div>
    </div>
  )
}
