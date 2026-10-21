export default function Product(props) {
    
    return (
        <div className="card">
                    <img
                        src={props.thumbnail}
                        className="card-img-top"
                        alt="Pc-portable"
                    />
                    <div className="card-body">
                        <h3 className="card-title" >{props.title}</h3>
                        <p className="card-text">price: {props.price}</p>
                        <a href="#" className="btn btn-primary">More info</a>
                    </div>
                </div>
    );
}