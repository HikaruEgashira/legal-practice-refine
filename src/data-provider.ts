import { DataProvider } from "@refinedev/core";

import api from "api/$api";
import axios, { AxiosInstance } from "axios";
import aspida from "@aspida/axios";

//import { striginfy } from "query-stiring";

const axiosConfig = { timeout: 3000, baseURL: "https://api.lawapi-prototype-test-elaws.e-gov.go.jp/api/2" };
const client = api(aspida(axios as AxiosInstance, axiosConfig));

export const dataProvider = (): Omit<
    Required<DataProvider>,
    "createMany" | "updateMany" | "deleteMany" | "getMany" | "create" | "update" | "delete" | "custom" | "deleteOne" | "getApiUrl"
> => ({
    getList: async ({ resource, pagination, filters, sorters, meta }) => {
        const res = await client.laws.get()

        const data = res.body.laws?.map(law => ({
            id: law.law_info?.law_id,
            ...law
        })) ?? [];
        const total = res.body.total_count ?? 0;

        return {
            data: data as any,
            total
        }
    },

    getOne: async ({ resource, id, meta }) => {
        const res = await client.laws.get({ query: { law_id: id.toString() } })
        const data = res.body.laws?.find(law => law.law_info?.law_id === id)
        return {
            data: {
                id: data?.law_info?.law_id,
                ...data
            } as any
        };
    },
});
