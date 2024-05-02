import { Button } from '@mui/material';
import React,{useState,useEffect} from 'react'

function Pagination() {
      const [response, setResponse] = useState([]);
      const [currentPage,setCurrentPage] = useState(1);
      const [itemsPerPage,setItemsPerPage] = useState(10);

        useEffect(() => {
            try{
               fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(data => {
                    setResponse(data.products);
                })
            }
            catch(err){
                console.log(err);
            }
        })
    
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = response.slice(indexOfFirstItem,indexOfLastItem);
        const totalPages = Math.ceil(response.length / itemsPerPage);
  return (
    <div>
       <h1>Products</h1>
        <div>
            {
                currentItems.map((item,index) => {
                    return(
                        <div key={index}>
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                            <p>{item.description}</p>
                        </div>
                    )
                })
            }
            <div>
            <Button onClick={() => setCurrentPage(currentPage-1)} variant="contained" color="primary">Prev</Button>
                <ul style={{display:'flex', justifyContent:"space-around"}}>
                    {
                        Array.from({length: totalPages}, (_,index) => {
                            return(
                                <li key={index} >
                                    <Button onClick={() => setCurrentPage(index + 1)} variant="contained" color="primary">
                                     {index + 1}
                                    </Button>
                                </li>
                            )
                        })
                    }
                </ul>
            <Button onClick={() => setCurrentPage(currentPage+1)} variant="contained" color="primary">Next</Button>
            </div>
        </div>      
    </div>
  )
}

export default Pagination
