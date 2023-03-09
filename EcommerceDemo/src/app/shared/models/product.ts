export interface Product{
  id: number,
  title: string,
  price: number,
  image?: string,
  ratinge?: { rate: number, count: number }
}

