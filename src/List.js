import React,{useState,useEffect} from 'react'
import './List.css'
import ListItem from './ListItem'
function List(props) {
    const [todoArray, todoArrayChange] = useState([0])
    const deleting=(val)=>{
        todoArrayChange(arr=>arr.filter(ar=>ar!==val))
    }
    useEffect(() => {
       const func=()=>{
           const obj={...props}
           todoArrayChange((arr)=>arr[0]===0?[props.item]:[...arr,obj.item])
           
       }
       func()
    }, [props])
    return (
        <div className="container">
                <div className="messs">
                {todoArray.length>1?todoArray.map((item,idx)=>(
                        <ListItem key={idx} deleting={deleting} item={item}/>
                )):<div className="mess">Add Items to your Todo</div>}
                </div>
        </div>
    )
}

export default List
