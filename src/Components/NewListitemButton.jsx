
const NewListItemButtom = ({handleButtom}) =>{
  return(
  <button 
  type="button" 
  className="btn btn-outline-primary btn-sm mt-1"
  onClick={handleButtom}>
  <i className="bi bi-plus-circle"></i>
  </button>
  ) 
  }
  
  export default NewListItemButtom