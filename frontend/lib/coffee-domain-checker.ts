// Coffee domain checking utility for client-side validation
const COFFEE_KEYWORDS = [
  'coffee', 'espresso', 'cold brew', 'latte', 'cappuccino', 'americano',
  'brewing', 'extraction', 'grind', 'beans', 'roast', 'brew',
  'pour over', 'french press', 'aeropress', 'moka', 'grinder',
  'crema', 'cafe', 'barista', 'arabica', 'robusta', 'origins',
  'flavor', 'tasting notes', 'acidity', 'body', 'ratio', 'temperature',
  'water', 'filter', 'time', 'equipment', 'preparation', 'recipe'
]

export function isCoffeeRelated(message: string): boolean {
  const lowerMessage = message.toLowerCase()
  const cleanedMessage = lowerMessage.replace(/[^\w\s]/g, ' ')
  
  return COFFEE_KEYWORDS.some(keyword => cleanedMessage.includes(keyword))
}

export function getCoffeeCategory(message: string): string {
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes('cold brew')) return 'Cold Brew'
  if (lowerMessage.includes('espresso')) return 'Espresso'
  if (lowerMessage.includes('pour over') || lowerMessage.includes('v60')) return 'Pour Over'
  if (lowerMessage.includes('french press')) return 'French Press'
  if (lowerMessage.includes('aeropress')) return 'AeroPress'
  if (lowerMessage.includes('grind')) return 'Grinding'
  if (lowerMessage.includes('bean')) return 'Beans'
  if (lowerMessage.includes('roast')) return 'Roasting'
  
  return 'General'
}
