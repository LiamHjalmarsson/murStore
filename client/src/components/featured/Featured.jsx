import { useFetch } from '../../hooks/useFetch';
import Card from '../card/Card';
import Loading from '../loading/Loading';

const Featured = ({ type }) => {
    const { data, loading, error } = useFetch(`products?populate=*&[filters][type][$eq]=${type}`);

    console.log(data);
    
    return (
        <section className='mx-auto px-10 my-24 max-w-5xl'>
            <h2 className='text-3xl font-semibold text-slate-800 mb-12'>
                {type}
            </h2>

            <div className='flex justify-center gap-12 items-center mx-auto max-w-4xl'>
                {data?.map(product => (
                    <Card
                        key={product.id}
                        product={product}
                    />
                ))}

                {loading && <Loading />}
            </div>
        </section>
    );
}

export default Featured;
