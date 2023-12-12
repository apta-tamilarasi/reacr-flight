import React, { useEffect,useState } from "react"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { handlearr } from "./Slice.js"
import './Axios.css'
import { useNavigate } from "react-router-dom"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Axios=()=>{
    let state=useSelector((e)=>e)
    let [array,setarray]=useState([])
    let dispatch=useDispatch()
    let a=useNavigate()
    const [age, setAge] = React.useState(0);
    const [page, setPage] = React.useState(1);
    const [count,setcount]=useState("")
    var [offset,setoff]=useState(0)

  const handlepage = (event, value) => {
    
    setPage(value);
  };
console.log(page)
    const handleChange = (event) => {
      setAge(event.target.value);
      // setarray(state.obj.arr)
      console.log(event.target.value)
      setcount(Math.ceil(array.length/event.target.value))
    }
    console.log(array)
    console.log(count)
    useEffect(()=>{
        axios.get(`https://api.spacexdata.com/v3/launches`).then((e)=>setarray(e.data))
    },[])
    
    useEffect(()=>{
      setoff((page-1)*age)
        axios.get(`https://api.spacexdata.com/v3/launches?limit=${age}&offset=${offset}`).then((e)=>dispatch(handlearr(e.data)))
    },[page,age])

    console.log(state.obj.arr.length)
  

    let goto=(id)=>{
      a(`/details?id=${id}`)

    }
    return <section>
  <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Drop Down</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Drop Down"
        onChange={handleChange}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={75}>75</MenuItem>
        <MenuItem value={100}>100</MenuItem>
      </Select>
    </FormControl>
  </Box>
  <Stack spacing={2}>
      <Typography>page = {page}</Typography>
      <Pagination count={count} page={page} onChange={handlepage} />
    </Stack>

      <div className="card">
      {     state.obj.arr.map((e,i)=>{
                return <div key={i} className="col">
                  <div className="img" >
                    <img src={e.links.flickr_images[0] || e.links.mission_patch} alt=''/>
                </div>
                <div>
                    {e.mission_name}  
                  </div>
                {/* <div>
                    <p>{e.details}</p>
                </div> */}
                <div>
                    <a href={e.links.wikipedia} target="blank">Wikipedia</a>
                </div>
                <div>
                  <button onClick={()=>goto(e.flight_number)}>details</button>
                </div>
                </div>
               
            })
        }

      </div>
    </section>
}
export default Axios