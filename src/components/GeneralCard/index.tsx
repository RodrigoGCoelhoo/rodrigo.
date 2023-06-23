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
      className={`inline-block h-[150px] w-full overflow-hidden border-l-8 ${borderColor} bg-light-gray px-5 py-4 duration-200 ease-in-out hover:scale-105`}
    >
      <div className="mb-2 text-sm font-medium">{title}</div>
      <div className="line-clamp-5 whitespace-normal text-sm font-light leading-4">
        {content}
      </div>
    </div>
  )
}
