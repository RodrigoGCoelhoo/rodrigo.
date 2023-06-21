import AcademicTimeline from "@/components/AcademicTimeline"

const a = [
  {title: "Cálculo I", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a laoreet mi. Integer interdum turpis vitae aliquet ultricies. Suspendisse potenti."},
  {title: "Cálculo II", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a laoreet mi. Integer interdum turpis vitae aliquet ultricies. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a laoreet mi. Integer interdum turpis vitae aliquet ultricies. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a laoreet mi. Integer interdum turpis vitae aliquet ultricies. Suspendisse potenti."},
  {title: "Cálculo III", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a laoreet mi. Integer interdum turpis vitae aliquet ultricies. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a laoreet mi. Integer interdum turpis vitae aliquet ultricies. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a laoreet mi. Integer interdum turpis vitae aliquet ultricies. Suspendisse potenti."},
  {title: "Cálculo IV", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a laoreet mi. Integer interdum turpis vitae aliquet ultricies. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a laoreet mi. Integer interdum turpis vitae aliquet ultricies. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a laoreet mi. Integer interdum turpis vitae aliquet ultricies. Suspendisse potenti."},

]

export default function Academic() {
  return (
    <div className="pl-20 py-20 font-sans flex flex-col">
      <AcademicTimeline
        date="JAN 2020"
        title="1º Semestre"
        subjects={a}
      />
      <AcademicTimeline
        date="JAN 2020"
        title="1º Semestre"
        subjects={a}
      />
    </div>
  )
}