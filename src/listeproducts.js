import img1 from './imag/HP16D0195NF.jpeg';
import img2 from './imag/HP14424U3EA.jpeg';
import img3 from './imag/NXATHEF002.jpeg';
import img4 from './imag/HUA6901443442959.jpeg';
import Product from './product.js';
const products = [ 
      { 
        id: 1,
        title: 'PC Portable Gamer HP VICTUS',     
        price: '7490 DH',     
        thumbnail : img1
    },
    {     
        id: 2,     
        title: 'PC Portable Gamer HP VICTUS',     
        price: '2190 DH',     
        thumbnail : img2
    },   
    {    
        id: 3,
        title: 'Pc Portable Chromebook Acer',     
        price: '3640 DH',     
        thumbnail: img3   
    },   
    {     
        id: 4,  
        title: 'PC Portable - HUAWEI',     
        price: '1270 DH',     
        thumbnail: img4   
    }, 
]; 
export default function Products() {
    return (
        <div className="container">
            <div className="row" style={{
                    display: 'flex',
                    flexWrap: 'nowrap'
                }}>
                {products.map((product) => (
                    <div className="col-md-3" key={product.id}   style={{
                            width: '25%',
                            padding: '10px'
                        }}>
                        <Product 
                            title={product.title} 
                            price={product.price} 
                            thumbnail={product.thumbnail} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}