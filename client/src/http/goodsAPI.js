import { $host } from "./index";

export const fetchGoods = async () => {
    const {data} = $host.get('api/goods');
    return data
}