import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipesService from "../entities/recipes/api";
import { Recipe } from "../entities/recipes/model/Recipe.types";
import Loading from "../features/Loading";
import Error from "../features/Error";
const RecipeById = () => {
  const { id } = useParams();
  const [data, setData] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await RecipesService.get(id as string);
        setData(response.data);
      } catch (error) {
        setError("Failed to fetch data");
      }
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="mx-auto bg-gray-50 rounded-2xl min-h-[400px] p-16 my-12 max-w-[800px] shadow-sm relative">
      <h2 className="text-center text-red-500 font-semibold text-4xl">
        {data?.name}
      </h2>
      <p className="text-center text-red-400">{data?.description}</p>
      <img
        className="mx-auto w-full max-w-[500px] rounded-lg mt-4"
        src={data?.imageUrl}
        alt=""
      />
      <ul className="mt-4 text-red-400 text-sm">
        <li className="text-red-500 font-semibold">Ingredients:</li>
        {data?.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <p className="mt-4 text-red-400">
        <span className="text-red-500 font-semibold">Directions:</span>{" "}
        {data?.directions.join(" ")}
      </p>
      <p className="mt-4 text-red-400">
        <span className="text-red-500 font-semibold">Tips:</span> {data?.tips}
      </p>
      <p className="mt-4 text-red-400">
        <span className="text-red-500 font-semibold">Total Time:</span>{" "}
        {data?.totalTime}
      </p>
      <p className="text-red-400">
        <span className="text-red-500 font-semibold">Making Amount:</span>{" "}
        {data?.makingAmount}
      </p>
      <p className="mt-4 text-red-400">Recipe ID: {data?.recipeId}</p>
      <div className="absolute bottom-4 right-4">
        <a className="menu_link" href="/recipes">
          Back to recipes
        </a>
      </div>
    </div>
  );
};

export default RecipeById;
