import { Recipe } from "../model/Recipe.types";
import RecipeItem from "./RecipeItem";

const RecipeList = ({ recipes }: { recipes: Recipe[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {recipes?.map((recipe: Recipe) => (
        <a href={`/recipes/${recipe.recipeId}`} className="h-full">
          <RecipeItem key={recipe?.recipeId} recipe={recipe} />
        </a>
      ))}
    </div>
  );
};

export default RecipeList;
