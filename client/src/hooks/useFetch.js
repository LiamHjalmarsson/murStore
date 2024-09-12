import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(import.meta.env.VITE_APP_API_URL + url, {
                    headers: { Authorization: 'bearer ' + import.meta.env.VITE_APP_API_TOKEN }
                });

                const recourse = await response.json();

                console.log(recourse);
                if (!response.ok) {
                    throw new Error(recourse);
                }

                
                setData(recourse.data);
            } catch (error) {
                console.log(error);
                setError(error);
            }
            setLoading(false);
        }
        fetchData();
    }, [url]);

    return {
        data,
        loading,
        error,
    }
}