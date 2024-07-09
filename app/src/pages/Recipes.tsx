import RecipeListLogic from "../entities/recipes/components/RecipeList.logic";

const RecipesPage = () => {
  return (
    <div className="mt-12 w-full">
      <h2 className="text-center text-red-500 font-semibold text-4xl font-mono">
        Explore All Recipes...
      </h2>
      <div className="mt-12 w-full">
        <RecipeListLogic />
      </div>
    </div>
  );
};
export default RecipesPage;
