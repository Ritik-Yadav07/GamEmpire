import useData from "./useData";

export interface Genre{
    id:number;
    name:string;
    image_background : string;
}

// selectedGenre :Genre | null

const useGenres = () => useData<Genre>('/genres');

export default useGenres;

