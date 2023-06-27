interface GeneralCardProps {
  title: string
  content: string
  borderColor: string
}

export default function GeneralCard({
  title,
  content,
  borderColor,
}: GeneralCardProps) {
  return (
    <div
      className={`inline-block min-h-[150px] w-full overflow-hidden border-l-8 ${borderColor} bg-light-gray px-6 py-5 duration-200 ease-in-out hover:scale-105`}
    >
      <div className="mb-4 font-medium">{title}</div>
      <div className="line-clamp-5 whitespace-normal text-sm font-light leading-5">
        {content}
      </div>
    </div>
  )
}
