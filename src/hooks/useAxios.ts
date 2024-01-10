import axios from "axios";
import {useState, useEffect} from "react";
import {ApiResponse, Category} from "../types/types";

interface IUseAxiosProps {
    url: string;
}

axios.defaults.baseURL = "https://opentdb.com";

const useAxios = ({ url }: IUseAxiosProps) => {
    const [response, setResponse] = useState<ApiResponse | null>(null);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = () => {
            axios
                .get(url)
                .then((res) => setResponse(res.data))
                .catch((err) => setError(err))
                .finally(() => setLoading(false));
        };
        fetchData();
    }, [url])

    return { response, error, loading };
}

export default useAxios;