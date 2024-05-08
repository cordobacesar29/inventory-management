export interface ItemType {
  title: string
  description: string
  category: string
  sku: number
  barcode: number
  quantity: number
  unit: string
  unitPrice: number
  sallingPrice: number
  itemSuppier: string
  reOrderPoint: number
  warehouse: string
  weight: number
  brand: string
  dimensions: string
  rate: number
  imageUrl: string
}

export interface IAdjustmentForm {
  transferStockQuantity: number;
  notes: string;
  recivingBranchId: string;
}