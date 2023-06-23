import GeneralCard from '@/components/GeneralCard'

const a = [
  { title: 'A', content: 'B' },
  { title: 'C', content: 'D' },
  { title: 'E', content: 'F' },
  { title: 'G', content: 'H' },
]

export default function Certificates() {
  return (
    <div className="mt-20 flex h-full w-full items-center justify-center font-sans">
      <div className="grid h-full w-[80%] grid-cols-3 gap-6 ">
        {a.map((item, index) => (
          <GeneralCard
            key={index}
            title={item.title}
            content={item.content}
            borderColor={'border-my-yellow'}
          />
        ))}
      </div>
    </div>
  )
}
