interface AcademicCardProps {
  title: string
  content: string
}

export default function AcademicCard({ title, content }: AcademicCardProps) {
  return (
    <div className="mr-8 !w-96 bg-light-gray">
      <div className="px-5 py-4">
        <div className="mb-2 text-sm font-medium">{title}</div>
        <div className="line-clamp-5 overflow-hidden text-sm font-light leading-4">
          {content}
        </div>
      </div>
    </div>
  )
}
