import './style.scss'
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style, data }) => {
    const movie = data[index];
    return (
        <section style={style} key={index}  >

            <article key={index} {...movie} className="charlist">
                <img src={movie.image} alt="test" className='charlist__img' />
                <div>
                    <h2 className='charlist__name'>{movie.name}</h2>
                    <p className='charlist__status'>{movie.status}</p>
                </div>
            </article>
        </section >
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
