import React, {Fragment, useRef, useState } from 'react';
import Form from '../Form';
import Card from '../Card';
function MainPage(){
    
        const [users, setUsers] = useState([]);
        const [selectedIndex , setSelectedIndex] =  useState(null);

        const userNameRef = useRef(null);
        const sureNameRef = useRef(null);
        const ageRef = useRef(null);
        const salaryRef = useRef(null);
        const jobRef = useRef(null);
        const [radione, setRadione] = useState();
        const [radiotwo,setRadiotwo] = useState();
    console.log(radione);
        const handleSubmit = (evt) => {
            evt.preventDefault();
            const newUser = {
                id: users[users.length -1]?.id + 1 || 1,
                username:userNameRef.current.value.trim(),
                surename : sureNameRef.current.value.trim(),
                age : ageRef.current.value.trim(),
                salary : salaryRef.current.value.trim(),
                job :jobRef.current.value.trim(),
                gender : radiotwo,
                gender1: radione,   
            };
            //    console.log(checkGenderRef.current.value);
            //    console.log(checkGenderRef2.current.value);
            if(selectedIndex !== null){
                users[selectedIndex] = newUser;
                setSelectedIndex(null);
            } else{
                setUsers([...users, newUser]);
            }

            userNameRef.current.value = "";
            sureNameRef.current.value = "";
            ageRef.current.value = "";
            salaryRef.current.value  = "";
            jobRef.current.value = "";
            userNameRef.current.focus();


        };
            console.log(users);

        const handleDelete = (id) =>{
            const filteredUsers = users.filter(
                (user) => user.id !== id);
                setUsers([...filteredUsers]);
        };
    
        const handleEdit  = (index) => {
            setSelectedIndex(index);
           
        };
    
    return(
        <Fragment>
             <div className='container'>
                <div className='row my-5'>
                    <div className='col-3'>
                        <Form 
                          handleSubmit = {handleSubmit}
                          userNameRef = {userNameRef}
                          sureNameRef ={sureNameRef}
                          ageRef ={ageRef}
                          salaryRef = {salaryRef}
                          jobRef = {jobRef}
                          setRadione = {setRadione}
                          setRadiotwo = {setRadiotwo}
                        //   users = {users}
                        //   selectedIndex = {selectedIndex}
                        />
                    </div>
                    <div className='col-9'>
                        {users.length > 0 && users.map((user, index)=>(
                            <Card 
                                 key = {index}
                                 user = {user}
                                 index = {index}
                                 handleDelete = {handleDelete}
                                 handleEdit = {handleEdit}
                            />
                        ))}
                        
                    </div>
                </div>
             </div>
        </Fragment>
    )
}

export default MainPage;