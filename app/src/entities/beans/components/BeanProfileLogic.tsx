import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BeansService from "../api";
import { Bean } from "../model/Bean.types";
import BeanProfile from "./BeanProfile";
import Loading from "../../../features/Loading";

const BeanProfileLogic = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [bean, setBean] = useState<Bean | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await BeansService.get(id as string);
      setBean(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!bean) {
    return (
      <h2 className="text-center mt-12 text-red-500 text-2xl font-bold">
        Bean not found
      </h2>
    );
  }

  return <BeanProfile bean={bean} />;
};

export default BeanProfileLogic;
