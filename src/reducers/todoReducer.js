const initialData={
    list:[]
}

const todoReducer = (state=initialData,action) => {
  switch(action.type){
    case "ADD_TODO":
        const{id,data}=action.payload

        return{
            ...state,//previous state
            
            list:[
                ...state.list,
                {
                    id:id,
                    data:data
                }

            ]
        }
        case "DELETE_TODO":
           const newList=state.list.filter((ele)=>ele.id!==action.id)
    
            return{
                ...state,//previous state
                list:newList
            }

            case "REMOVE_TODO":
        

         
                 return{
                     ...state,//previous state
                     list:[]
                 }
        default:return state
  }
}

export default todoReducer