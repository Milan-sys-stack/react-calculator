export const Form =({value, onSubmitValue, handleChange}) => {
    

    return (<>


<form onSubmit={onSubmitValue}>
    <input type='text' value={value} onChange={handleChange} />
    <button type='Submit'>Submit</button>
</form>
</>


    )
}
    
