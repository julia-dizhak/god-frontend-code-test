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
  bodyType: string; // todo BodyType;
  modelType: string; // ModelType;
  imageUrl: string;
};