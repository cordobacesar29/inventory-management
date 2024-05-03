import FormHeader from '@/components/dashboard/FormHeader'
import ItemForm from '@/components/dashboard/ItemForm'
import { ROUTES } from '@/constants/routes'
import React from 'react'

export default function NewITem({}) {
  return (
    <div>
      <FormHeader title="New Item" href={ROUTES.inventory} />
      <ItemForm />
    </div>
  )
}
 