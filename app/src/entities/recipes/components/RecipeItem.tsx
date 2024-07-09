import { Recipe } from "../model/Recipe.types";
const RecipeItem = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div className="recipe bg-gray-50 rounded-2xl py-4 shadow-sm relative pb-12 h-full">
      <div className="w-full flex items-center justify-center h-16">
        <h2 className="text-center text-red-500 font-semibold text-2xl px-4">
          {recipe?.name}
        </h2>
      </div>

      <img
        className="mx-auto w-full max-w-[500px] object-cover aspect-video my-4"
        src={recipe?.imageUrl}
        alt=""
      />
      <p className="mt-2 text-sm text-red-400 line-clamp-4 px-4">
        Ingredients: {recipe?.ingredients.join(", ")}
      </p>
      <p className="mt-3 text-sm text-red-400 px-4">
        Make: {recipe.makingAmount}
      </p>
      {recipe.totalTime && (
        <p className=" text-sm text-red-400 px-4">Time: {recipe.totalTime}</p>
      )}
      <div className="absolute bottom-4 right-4">
        <a
          className="recipe_link"
          style={{ fontSize: "1rem" }}
          href={`/recipes/${recipe?.recipeId}`}
        >
          check out this recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeItem;
