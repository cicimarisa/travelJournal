import location from "./../assets/location.svg"

export default function Card(props){
    return (
        <div className="card">
            <img src={props.imageUrl} alt="" className="card--image"/>
            <div>
                <img src={location} alt="" className="location--icon"/>
                <p className="location">{props.location}</p>
                <a href={props.googleMapsUrl} className="location--link" target="_blank">View on Google Maps</a>
                <h1 className="location--title">{props.title}</h1>
                <p className="location--visit-duration">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}