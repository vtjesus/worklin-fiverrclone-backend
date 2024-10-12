"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCategoryForDropDownController = void 0;
const getAllCategoryForDropDownController = (dependencies) => {
    const { useCases: { getAllCategoryForDropDownUseCase }, } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Call the use case to get all categories without pagination
            const categories = yield getAllCategoryForDropDownUseCase(dependencies).execute();
            // Respond with the fetched categories
            res.status(200).json({
                message: "All categories retrieved successfully!",
                categories,
            });
        }
        catch (error) {
            console.error("Error in getAllCategories controller:", error);
            res
                .status(500)
                .json({ message: error.message || "Internal Server Error" });
        }
    });
};
exports.getAllCategoryForDropDownController = getAllCategoryForDropDownController;
