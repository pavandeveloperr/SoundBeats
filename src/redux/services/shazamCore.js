import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
  
  export const shazamCoreApi = createApi ({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '484d0ed8bdmshd04b90a20001392p167a12jsna1ec0b773297')
       
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
    }),
  });

  export const {
    useGetTopChartsQuery,
  } = shazamCoreApi;