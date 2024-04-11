import { CATEGORY_FILTER } from "./consts"

export interface Service {
  id: number,
  name: string,
  description: string,
  category: string
}

export type DateSlots = {
  date: string,
  serviceId: number,
  availableTimeslots:[]
}

export type Services = Service[]

export type typeCategories = {[key:string]: Services}

export type FilterCategory = typeof  CATEGORY_FILTER[keyof typeof CATEGORY_FILTER]