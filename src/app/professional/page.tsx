import ProfessionalTimeline from '@/components/ProfessionalTimeline'

export default function Professional() {
  return (
    <div className="flex flex-col py-20 pl-20 font-sans">
      <ProfessionalTimeline
        startDate={'FEV 2021'}
        endDate={'AGO 2021'}
        company={'Iris8'}
        jobDescription={'Estagiário de Desenvolvimento de Software'}
        description={['a', 'b', 'c', 'a', 'b', 'c']}
      />
    </div>
  )
}
