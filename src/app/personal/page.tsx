import GeneralTimeline from '@/components/GeneralTimeline'

export default function Personal() {
  return (
    <div className="flex flex-col py-20 pl-20 font-sans">
      <GeneralTimeline
        startDate={'AGO 2015'}
        endDate={'JAN 2016'}
        title={'Intercâmbio para o Canadá'}
        subtitle={'Ecole Cariboo Hill Secondary School'}
        description={['a', 'b', 'c', 'a', 'b', 'c']}
        color={'bg-my-blue'}
      />
    </div>
  )
}
