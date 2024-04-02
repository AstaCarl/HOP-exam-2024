import Films from "@/components/Films";
import { fetcher } from "../../lib/api";

const FilmsList = ( {films} ) => {
    return(
        <div>
            <h1 className="">
                <span>
                    Films
                </span>
            </h1>
            <Films films={films}/> 
        </div>
    );
};
console.log("hej")

export default FilmsList;

// export async function getServerSideProps() {

// }

export async function getStaticProps() {
    const filmsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/films`);
    console.log("filmsresponse", filmsResponse);
    return {
        props:{
            films: filmsResponse
        }
    }

}