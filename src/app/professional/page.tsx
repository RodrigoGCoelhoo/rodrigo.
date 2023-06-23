import GeneralTimeline from '@/components/GeneralTimeline'

export default function Professional() {
  return (
    <div className="flex flex-col py-20 pl-20 font-sans">
      <GeneralTimeline
        startDate={'FEV 2021'}
        endDate={'AGO 2021'}
        title={'Iris8'}
        subtitle={'Estagiário de Desenvolvimento de Software'}
        description={['a', 'b', 'c', 'a', 'b', 'c']}
        color={'bg-my-green'}
      />
    </div>
  )
}
