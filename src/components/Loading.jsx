const Loading = () => {
    return (
        <div style={{margin: 'auto', display:'flex', alignContent:'center', justifyContent:'center', padding:'50px'}}>
            <div style={{width: '200px', height:'200px', borderRadius:'50%', border: '25px dotted green', padding:'20px', animationName: 'loading-spinner', animationIterationCount: 'infinite', animationDuration:'5s', animationDirection: 'alternate'}}></div>
        </div>
    )
}

export default Loading; 