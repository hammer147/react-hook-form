'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { FormDataSchema } from '@/lib/schema'

type Inputs = z.infer<typeof FormDataSchema>

export default function RhfZod() {
  const [data, setData] = useState<Inputs>()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>({ resolver: zodResolver(FormDataSchema) })

  //   console.log(watch('name'))

  const processForm: SubmitHandler<Inputs> = data => setData(data)

  return (
    <section className='flex gap-6'>
      <form
        onSubmit={handleSubmit(processForm)}
        className='flex flex-1 flex-col gap-4 sm:w-1/2'
      >
        <input
          className='rounded-lg'
          placeholder='name'
          {...register('name')}
        />
        {errors.name?.message && (
          <p className='text-sm text-red-400'>{errors.name.message}</p>
        )}
        <input
          className='rounded-lg'
          placeholder='message'
          {...register('message')}
        />
        {errors.message?.message && (
          <p className='text-sm text-red-400'>{errors.message.message}</p>
        )}
        <button className='rounded-lg bg-black py-2 text-white'>Submit</button>
      </form>
      <div className='flex-1 rounded-lg bg-cyan-600 p-8 text-white'>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  )
}
