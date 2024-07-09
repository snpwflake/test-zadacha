import { Link } from "react-router-dom";
import { Bean } from "../model/Bean.types";

const BeanProfile = ({ bean }: { bean: Bean }) => {
  return (
    <div className="mx-auto bg-gray-50 rounded-2xl min-h-[400px] p-16 my-12 max-w-[800px] shadow-sm relative pb-8">
      <h2 className="text-center text-red-500 font-semibold text-4xl">
        {bean?.flavorName}
      </h2>
      <p className="text-center text-red-400">{bean?.description}</p>
      <img
        className="mx-auto w-full max-w-[500px]"
        src={bean?.imageUrl}
        alt=""
      />
      <p className="mt-4 text-red-400">Group Name: {bean?.groupName}</p>
      <p className="mt-2 text-red-400">
        Ingredients: {bean?.ingredients.join(", ")}
      </p>
      <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-red-500 mt-12">
        <div>
          <p>Color Group:</p>
          <p>{bean?.colorGroup}</p>
        </div>
        <div>
          <p>Hexadecimal Color:</p>
          <button
            aria-label="Copy color code to clipboard"
            onClick={() =>
              navigator.clipboard.writeText(bean?.backgroundColor as string)
            }
            style={{ backgroundColor: bean?.backgroundColor }}
          >
            {bean?.backgroundColor}
          </button>
        </div>
        <div>
          <p>Gluten Free:</p>
          <p>{bean?.glutenFree ? "Yes" : "No"}</p>
        </div>
        <div>
          <p>Sugar Free:</p>
          <p>{bean?.sugarFree ? "Yes" : "No"}</p>
        </div>
        <div>
          <p>Seasonal:</p>
          <p>{bean?.seasonal ? "Yes" : "No"}</p>
        </div>
        <div>
          <p>Kosher:</p>
          <p>{bean?.kosher ? "Yes" : "No"}</p>
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <Link className="menu_link" to={`/beans`}>
          {" "}
          Back to Beans
        </Link>
      </div>
    </div>
  );
};

export default BeanProfile;
