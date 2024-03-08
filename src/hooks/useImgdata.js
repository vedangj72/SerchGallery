import { useEffect, useState } from "react";
import axios from "axios";

const useImgdata = (url) => {
    const [load, setLoad] = useState(true);
    const [hits, setHits] = useState([]);
    const [data, setData] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchImg = async () => {
            try {
                const response = await axios.get(url);
                setHits(response.data.hits);
                setData(response.data);
                setLoad(false); // Set loading to false after data is fetched
            } catch (error) {
                setError(true);
                setLoad(false); // Set loading to false in case of error
            }
        };

        fetchImg();
    }, [url]);

    return { load, data, hits, error };
};

export default useImgdata;