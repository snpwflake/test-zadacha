export interface Recipe {
  name: string;
  description: string;
  imageUrl: string;
  ingredients: string[];
  makingAmount: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  directions: string[];
  tips: string[];
  category: string;
  recipeId: number;
}
