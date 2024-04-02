const Films = ({ films }) => {
    return (
        <>
        <ul>
            {films && films.data.map((film) => {
                return (
                    <li key={film.id}>
                        <p>{film.attributes.title}</p>
                        <p>{film.attributes.director}</p>
                        <p>{film.attributes.released}</p>
                    </li>
                )
            })}
            <li>
            </li>
        </ul>
        </>
    ); 
};
export default Films;