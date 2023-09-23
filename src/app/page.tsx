import Rhf from './components/rhf'
import RhfZod from './components/rhf-zod'
import RhfZodServerAction from './components/rhf-zod-server-action'
import SimpleForm from './components/simple-form'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='mb-16 text-2xl font-medium'>React Hook Forms</h1>
        {/* <SimpleForm /> */}
        {/* <Rhf /> */}
        {/* <RhfZod /> */}
        <RhfZodServerAction />
      </div>
    </section>
  )
}
