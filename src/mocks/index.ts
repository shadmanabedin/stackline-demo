import data from "./stackline_frontend_assessment_data_2021.json";

export const mock = data[0];
export type ProductInformation = typeof mock;
export type SalesRow = typeof mock.sales[0];