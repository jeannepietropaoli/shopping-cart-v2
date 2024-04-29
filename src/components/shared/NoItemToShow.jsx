import '../../styles/NoItemsToShow.css'

export default function NoItemsToShow() {
    return (
        <div className="error">
            <p className='error__text'>Oops, no items to show for now. </p>
            <p className='error__text'>It looks like the customers have cleaned us out!</p>
            <p className='error__text'>We are working on it, come back later ! 🍇</p>
        </div>
    )
}