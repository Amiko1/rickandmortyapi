import './style.scss'
import { FixedSizeList as List } from 'react-window';
import { Link } from "react-router-dom";

const Row = ({ index, style, data }) => {
    const movie = data[index];
    return (
        <Link key={movie.id} style={{ color: "black" }} to={`/profile/${movie.id}`} >
            <section style={style} key={index}  >

                <article key={index} {...movie} className="charlist">
                    <img src={movie.image} alt="test" className='charlist__img' />
                    <div>
                        <h2 className='charlist__name'>{movie.name}</h2>
                        <p className='charlist__status'>{movie.status}</p>
                    </div>
                </article>
            </section >
        </Link>

    );
};


const RenderList = ({ data }) => {
    return (
        <>

            <List
                className="List"
                height={700}
                itemCount={data.length}
                itemSize={180}
                itemData={data}
            >
                {Row}
            </List>
        </>
    );
}

export default RenderList;
