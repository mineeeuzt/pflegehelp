import { Category } from '../types/Category'

export const getAllChildCategoryIds = (category: Category): string[] => {
  let ids = [category.id]
  
  if (category.children && category.children.length > 0) {
    category.children.forEach(child => {
      ids = ids.concat(getAllChildCategoryIds(child))
    })
  }
  
  return ids
}

export const findCategoryById = (categories: Category[], id: string): Category | null => {
  for (const category of categories) {
    if (category.id === id) {
      return category
    }
    if (category.children) {
      const found = findCategoryById(category.children, id)
      if (found) return found
    }
  }
  return null
}

export const getCategoryNamesFromIds = (categories: Category[], ids: string[]): string[] => {
  const names: string[] = []
  
  ids.forEach(id => {
    const category = findCategoryById(categories, id)
    if (category) {
      names.push(category.name)
    }
  })
  
  return names
}

export const getAllChildCategoryNames = (category: Category): string[] => {
  let names = [category.name]
  
  if (category.children && category.children.length > 0) {
    category.children.forEach(child => {
      names = names.concat(getAllChildCategoryNames(child))
    })
  }
  
  return names
}