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
exports.updatePaymentStatusRepository = void 0;
const paymentModel_1 = require("../model/paymentModel");
const updatePaymentStatusRepository = (paymentId, status) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(paymentId, status, "consoling the payment id and status from the repository");
        const updatedPayment = yield paymentModel_1.PaymentModel.findByIdAndUpdate(paymentId, { status }, { new: true, lean: true });
        console.log(updatedPayment, "consoling the updated payment from repository");
        return updatedPayment;
    }
    catch (error) {
        console.error("Error in updating payment status:", error);
        throw error;
    }
});
exports.updatePaymentStatusRepository = updatePaymentStatusRepository;
