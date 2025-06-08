// Super-einfaches Caching ohne komplexe Hash-Funktionen
class SuperSimpleCache {
  private cache = new Map<string, { response: string; timestamp: number }>()
  private readonly TTL = 60 * 60 * 1000 // 1 Stunde
  private readonly MAX_SIZE = 20 // Nur 20 Einträge
  
  // Einfachster Key: erste 50 Zeichen von Input
  private makeKey(userInput: string): string {
    return userInput.slice(0, 50).toLowerCase().replace(/\s+/g, '')
  }
  
  get(userInput: string): string | null {
    const key = this.makeKey(userInput)
    const cached = this.cache.get(key)
    
    if (cached && Date.now() - cached.timestamp < this.TTL) {
      console.log(`Simple cache HIT`)
      return cached.response
    }
    
    if (cached) {
      this.cache.delete(key)
    }
    
    return null
  }
  
  set(userInput: string, response: string): void {
    const key = this.makeKey(userInput)
    
    // Einfache Größenbegrenzung
    if (this.cache.size >= this.MAX_SIZE) {
      const firstKey = this.cache.keys().next().value
      this.cache.delete(firstKey)
    }
    
    this.cache.set(key, {
      response,
      timestamp: Date.now()
    })
    
    console.log(`Simple cache STORE (${this.cache.size}/${this.MAX_SIZE})`)
  }
}

export const simpleCache = new SuperSimpleCache()