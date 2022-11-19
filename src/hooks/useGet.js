import {useEffect, useState} from "react";

export const useGet = (getCall, dependencies) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getCall()
            .then((result) => {
                setData(result);
                setIsLoading(false);
            })
            .catch(() => setError("There was an error. Try again."));
    }, dependencies);

    return { data, error, isLoading };
}