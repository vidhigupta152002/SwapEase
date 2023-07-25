import React, { useEffect,useState } from 'react'
import Navbar2 from './Navbar2'
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
const Swapped = () => {
  // // const [userData, setUserData] = useState({});
  // useEffect(()=>{
  //   fetch("http://localhost:5000/AllUser",{
  //   method:"GET"
  //   })
  // .then((res) => res.json())
  // .then((data) => {
  //   console.log(data, "userData");
  // });
  // },[])
  // const [setUser] = useState([]);

  // const fetchData = async () => {
  //   const response = await fetch("/AllUser");
  //   const data = await response.json();
  //   return setUser(data);
  // }

  // useEffect(() => {
  //   fetchData();
  // },[])

  const [data,setData] = useState([]);

  const getAllUser = () =>{
    fetch("/AllUser", {
      method:"GET",
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userData");
      setData(data.data);
    });
  };

  useEffect(() => {
    getAllUser();
  },[]);

  // const deleteUser = (id,name) => { 
  //   if (window.confirm(`Are you sure you want to delete ${name}`)){

  //     fetch("/deleteUser", {
  //       method:"POST",
  //       headers:{
  //         "Contenet-Type": "application/json",
  //         Accept:"application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify({
  //         userid: id,
  //       }),
  //     })

  //     .then((res) => res.json())
  //     .then((data) => {})
  //     alert(data.data);
  //     getAllUser();
  //   } else {

  //   }
  // }
  return (
    <>
    <Navbar2/>
    {/* <div align='center' >
      <div className='inputhere1'>
        <label for='inputhere1'>Desired&nbsp;&nbsp;</label>
        <input id='inputhere1' placeholder='Search here'/>
      </div>
      <div className='inputhere2'>
        <label for='inputhere2'>Existing&nbsp;&nbsp;</label>
        <input id='inputhere2' placeholder='Search here'/>
      </div>
    </div> */}
    <div className='wrapper9'>
               <h5>
                  <strong>AVAILABLE FOR SWAPPING</strong>
                </h5>
                <h6> </h6>

                <div className="col-md-6">
      <table style={{width: 1100}}>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px'}}><b>Name</b></td>
          <td style={{ border: '1px solid #ddd', padding: '8px'}}><b>Enrollment No.</b></td>
          <td style={{ border: '1px solid #ddd', padding: '8px'}}><b>Desired Subject</b></td>
          <td style={{ border: '1px solid #ddd', padding: '8px'}}><b>Existing Subject</b></td>
          <td style={{ border: '1px solid #ddd', padding: '8px'}}><b>Hide</b></td>
        </tr>
        {data.map(i=>{
          return(
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px'}}>{i.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px'}}>{i.enrollment}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px'}}>{i.dsubject}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px'}}>{i.esubject}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px'}}>
                <FontAwesomeIcon icon={faTrash} 
                // onClick={ () => deleteUser(i._id,i.name)}/>
                onClick={ () => handleDelete(i.name)}/>
              </td>
            </tr>
          )
          })}
      </table>
      </div>
    </div>
    </>
  )
  function handleDelete(name) {
    const newList = data.filter( li=> li.name !== name)
    // setList(newList)
    setData(newList)
  }
}

export default Swapped;