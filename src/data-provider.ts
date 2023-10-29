import { DataProvider } from "@refinedev/core";
import { IconLayoutRows } from "@tabler/icons";

import api from "api/$api";
import axios, { Axios, AxiosInstance } from "axios";
import aspida from "@aspida/axios";

//import { striginfy } from "query-stiring";

const axiosConfig = { timeout: 3000, baseURL: "https://example.com/api" };
const client = api(aspida(axios as AxiosInstance, axiosConfig));

export const dataProvider = (apiUrl: String) => ({
    getList: async ({ resource }:any) => {
        // const url = `${apiUrl}/${resource}`;
        // if(resource === 'laws'){
        //一覧取得

        const laws = await client.laws.get();

        console.log(laws.body.count);
        // }
        // const { data, headers } = await axiosInstance.get(url);

        // const total = +headers["x-total-count"];

        return {
            data: (laws.body.laws ??[]).map(datas=>({id:datas.law_info?.law_id??"" as string})),
            total: laws.body.count

        };
    },
    getOne: async ({ resource,id }:any) =>{
        const laws = await client.laws.get({query:{law_id:id.toString()}})

        return {
            data: laws as any
            

        };
    
    }

});