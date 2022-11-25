import emptyDish from '../assets/images/empty-dish.svg'

const EmptyResults = () => {
    return (
        <>
        <h2>Sorry, there's nothing to eat here!</h2>
        <img src={emptyDish} />
        <p>Try with different search criteria.</p>
        </>

    )

}
export default EmptyResults;