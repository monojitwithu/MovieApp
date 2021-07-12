import { useEffect, useState } from "react";


const Movies=(props)=>{
      console.log(props)
    // const[userdata,setuserdata]=useState();
    const[firstName,setFirstName]=useState();
    const[lastName,setLastName]=useState();

    // useEffect(()=>{ 
    //     getUserData();

    // },[])
    
    
           //Getting the data From db
    // const getUserData=()=>{
    //      const xmlUserData= new XMLHttpRequest();
    //      xmlUserData.open("POST","https://reqres.in/api/users ")
    //      xmlUserData.send();
    //      xmlUserData.addEventListener("readystatechange",function(){
    //          const data=JSON.parse(this.responseText);
    //          setuserdata(data);
            


    //      })

       

    // }

    ///Pushing the data
    const firstNameClickHandler=(event)=>setFirstName(event.target.value);
    const lastNameClickHandler=(event)=>{
       
    
    setLastName(event.target.value)};
    
    const createUser=()=>{
        
        
       
        
        const postObject={

            firstName:firstName,
            lastName:lastName
        }
        const xmlUserData= new XMLHttpRequest();
        xmlUserData.open("POST","https://reqres.in/api/users ")
        xmlUserData.send(JSON.stringify(postObject));
        console.log(postObject)

    }

    

    

    return(
        <div className="Movies">
            Here goes All Movies
            {/* <p>{JSON.stringify(userdata)}</p> */}

            <label >first Name</label>
            <input type="text"  onChange={firstNameClickHandler}/>
            <label >Last Name</label>
            <input type="text" onChange={lastNameClickHandler}/>
            <button onClick={createUser}>Add</button>
            



        </div>
    )
}


