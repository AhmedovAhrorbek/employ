
import './index.css';
function Form({
    handleSubmit,
    userNameRef,
     sureNameRef,
     ageRef,
     salaryRef,
      jobRef,
      setRadione,
      setRadiotwo,
    //   users,
    //   selectedIndex
}){


    return (
        <div className="card">
           <div className="card-header">
               <h3 className="text-center">Employ App</h3>
           </div>
           <div className="card-body">
              <form  onSubmit={(evt) => handleSubmit(evt)}>
                  
                        <input className="form-control mb-3"  type="text" ref={userNameRef} name="username" placeholder="Username" autoComplete="off"   />
                        <input className="form-control mb-3 " type="text" ref={sureNameRef} name="surename" placeholder="Surename" autoComplete="off" />
                        <input className="form-control mb-3 " type="number" ref={ageRef} name="age" placeholder="Age" autoComplete="off" />
                        <input className="form-control mb-3" type="text" ref={salaryRef} name="salary" placeholder="Salary" autoComplete="off" />
                        <select className="form-select mb-3"   name="job" ref={jobRef} >
                            <option value="Web developer">Web developer</option>
                            <option value="Software engineer">Software engineer</option>
                            <option value="IT technician">IT technician</option>
                            <option value="Data scientist">Data scientist</option>
                            <option value="Systems administrator">Systems administrator</option>
                            <option value="Product manager">Product manager</option>
                            <option value="Cybersecurity analyst">Cybersecurity analyst.</option>
                            <option value="UI/UX designer">UI/UX designer</option>
                        </select>
                        <label className='d-flex justify-content-between text-center'>
                               <div>
                                    <input onChange={e => setRadione(e.target.value)} type="radio" value="MALE"  name="gender"/> Male
                                    <input onChange={e => setRadiotwo(e.target.value)} type="radio" value="FEMALE"  name="gender"/> Female
                                </div>
                        </label>
                         <div className="card-footer mt-3">
                           <button type = "submit" className="btn btn-success w-100"> Add user</button>
                         </div>
              </form>
           </div>
          
        </div>
    )
}

export default Form;


// <form action="//www.html.am/html-codes/forms/html-form-tag-action.cfm" target="result" method="get">
// <p>What is your gender?</p>
// <input type="radio" name="gender" value="male"> Male
// <input type="radio" name="gender" value="female"> Female
// <p><input type="submit" value="Submit"></p>
// </form>
// <h3>Result:</h3>
// <iframe name="result" style="height:100px;width:200px;"></iframe>
