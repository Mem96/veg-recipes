const ScrollingButtons = ({handlePreviousPage, handleNextPage, currentPage, maxResults}) => {
    return (
    <div>
        <button onClick={handlePreviousPage} disabled={currentPage===0}>Go to the previous page</button>
        <span>Page {currentPage+1} of {Math.floor(maxResults/10)+1}</span>
        <button onClick={handleNextPage} disabled={currentPage+1 > Math.floor(maxResults/10)}>Go to the next page</button>
    </div>
    )
} 
export default ScrollingButtons