export interface Beer {
  id: number
  name: string
  tagline: string
  first_brewed: string
  image_url?: string
  description: string
  food_pairing: string[]
  brewers_tips: string
  ingredients: {
    malt: Malt[]
    hops: Hop[]
    yeast: string
  }
}

export interface Malt {
  name: string
  amount: Amount
}

export interface Hop {
  name: string
  amount: Amount
  add: string
  attribute: string
}

interface Amount {
  value: number
  unit: string
}
