export interface ApiResponse {
  success: boolean,
  message: any
}

export interface ClientBirthday {
  clientId: number,
  dday: number,
  dependentId: number,
  dmonth: number,
  filter: number,
  name: string
}

export interface UpcomingOrder {
  id: number,
  price: number,
  description: string,
  deliveryMode: string,
  deliveryDate: string,
  createdAt: string,
  updatedAt: string,
  clientId: number,
  address: object,
  client: object
}

export interface MonthlyIndicators {
  currentMonth: number,
  revenue: number,
  averageTicket: number,
  clients: number,
  orders: number
}

export interface GeneralIndicators {
  revenue: number,
  averageTicket: number,
  clients: number,
  orders: number
}
