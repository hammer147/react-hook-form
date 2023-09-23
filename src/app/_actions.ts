'use server'

import { z } from 'zod'
import { FormDataSchema } from '@/lib/schema'

type Inputs = z.infer<typeof FormDataSchema>

export async function addEntry(data: Inputs) {

  // In this example, we're just validating and returning the data
  // In a real app, you'd probably want to do something like:
  // talking to a database, sending an email, redirecting, etc.

  const result = FormDataSchema.safeParse(data)

  if (result.success) {
    return { success: true, data: result.data }
  }

  if (result.error) {
    return { success: false, error: result.error.format() }
  }
}
