// src/infrastructure/dependencies.ts
import * as repositories from "../infrastructure/database/mongoDB/repository";
import * as useCases from "../application/useCases";
import { IDependencies } from "../application/interfaces/IDependencies";

export const dependencies: IDependencies = {
  useCases,
  repositories,
};
