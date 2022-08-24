import { useEffect, useState } from 'react';

export const useFetch = ( url ) => {

    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        error: null,
    });

    const getFetch = async () => {

        setstate({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setstate({
            data,
            isLoading: false,
            error: null,
        })

        // console.log(data);
    };

    useEffect(() => {
            getFetch();
        }, [url]
    );
    

  return {
    data:       state.data,
    isLoading:  state.isLoading,
    error:      state.error,
  };
}
