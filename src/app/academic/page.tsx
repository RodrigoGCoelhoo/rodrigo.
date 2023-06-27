import GeneralTimeline from '@/components/GeneralTimeline'

export default function Academic() {
  return (
    <div className="flex flex-col py-20 pl-20 font-sans">
      <GeneralTimeline
        startDate="JAN 2020"
        endDate="DEC 2024"
        title="Insper"
        subtitle="Engenharia da computação"
        // description={['a', 'b', 'c', 'a', 'b', 'c']}
        color={'bg-my-red'}
        continuous={false}
      />

      <GeneralTimeline
        startDate="JAN 2020"
        endDate="DEC 2024"
        title="Insper"
        subtitle="Engenharia da computação"
        description={['a', 'b', 'c', 'a', 'b', 'c']}
        color={'bg-my-red'}
        continuous={false}
      />
    </div>
  )
}
