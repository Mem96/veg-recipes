const ScrollingButtons = ({
  handlePreviousPage,
  handleNextPage,
  currentPage,
  maxResults,
}) => {
  return (
    <div>
      <p>There are {maxResults} results</p>
      <button onClick={handlePreviousPage} disabled={currentPage === 0}>
        Go to the previous page
      </button>
      <span>
        Page {currentPage + 1} of {Math.ceil(maxResults / 10)}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage >= Math.ceil(maxResults / 10) - 1}
      >
        Go to the next page
      </button>
    </div>
  );
};
export default ScrollingButtons;
