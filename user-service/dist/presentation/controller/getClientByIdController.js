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
exports.getClientByIdController = void 0;
const getClientByIdController = (dependencies) => {
    const { getClientByIdUseCase } = dependencies.useCases;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { clientId } = req.params;
            if (!clientId) {
                res.status(404).json({ message: "clientId id is required" });
                return;
            }
            const client = yield getClientByIdUseCase(dependencies).execute(clientId);
            if (!client) {
                res.status(404).json({ message: "No client found" });
                return;
            }
            res.status(200).json(client);
        }
        catch (error) {
            console.error("Error getting experience of user:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });
};
exports.getClientByIdController = getClientByIdController;
