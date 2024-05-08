import AdjustmentForm from '@/components/dashboard/AdjustmentForm'
import FormHeader from '@/components/dashboard/FormHeader'
import { ROUTES } from '@/constants/routes'
import React from 'react'

export default function NewAdjustment() {
  return (
    <div>
      <FormHeader href={ROUTES.inventory} title='New Adjustment'/>
      <AdjustmentForm />
    </div>
  )
}
