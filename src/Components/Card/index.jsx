

function Card({user,index,  handleDelete, handleEdit}){
    return (
        <div className="cards ">
             <div className="card ">
                 <div className="card-header">
                     <h2>{user.username}</h2>
                 </div>
                 <div className="card-body">
                    <p><b>Surename</b>  {user.surename}</p>
                     <p> <b>Age</b>  {user.age}</p>
                     <p><b>Salary</b>  {user.salary}</p>
                     <p><b>Job</b>  {user.job}</p>
                     <p><b>Gender</b>  {user.gender}</p>
                 </div>  
                 <div className="card-footer d-flex justify-content-between mx-0">
                     <button  className="btn btn-primary " onClick={() => handleEdit(index)}>edit</button>
                     <button className="btn btn-danger " onClick={() => handleDelete(user.id)}>delete</button>
                 </div>
             </div>
        </div>
    )
}
export default Card;