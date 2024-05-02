import FormHeader from '@/components/dashboard/FormHeader'
import WarehouseForm from '@/components/dashboard/WarehouseForm'
import { ROUTES } from '@/constants/routes'
import React from 'react'

export default function NewWarehouse() {
  return (
    <div>
      <FormHeader href={ROUTES.inventory} title='New Warehouse'/>
      <WarehouseForm/>
    </div>
  )
}
