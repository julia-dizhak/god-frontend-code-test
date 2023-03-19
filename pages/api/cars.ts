import { NextApiResponse, NextApiRequest } from "next";
import cars from "../../public/api/cars.json";

export enum ModelType {
  plugInHybrid = "plug-in hybrid",
  pureElectric = "pure electric",
}

export enum BodyType {
  suv = "suv",
  estate = "estate",
  sedan = "sedan",
}

export type Car = {
  id: string;
  modelName: string;
  bodyType: string; // BodyType;
  modelType: string; // ModelType;
  imageUrl: string;
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Car[]>
) {
  return res.status(200).json(cars);
}
