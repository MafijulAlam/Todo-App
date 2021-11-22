import React, {useState, useEffect} from 'react'

const getLocalItems = () => {
    let list = localStorage.getItem('items')

    if(list){
        return JSON.parse(localStorage.getItem('items'))
    }
}


export default function Todo() {
    const [inputData, setInputData] = useState('')
     const [items, setitems] = useState(getLocalItems())


    const addItem = () => {
        if(!inputData){
            alert('Please insert a data')
        }else{
            setitems([...items, inputData]);
            setInputData('');
        }
        
    }


    const deleteItem = (id) =>{
        const updateItems = items.filter((elem, ind) => {
            return ind !== id;
        })
        setitems(updateItems)
    }

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    return (
        <>
            <div className='container'>
                <div className='todo'>
                     <h1> React Todo List App</h1>
                    <input type='text' placeholder='Add Items'
                        value = {inputData}
                        onChange={(e) =>setInputData(e.target.value)}
                    />
                    <button type='submit' onClick={addItem} > Add</button>
                </div>
                <div className='showItems'>

                    {
                        items.map( (elem, ind) => {
                            return(
                                <div className='eachItem' key ={ind}>
                                <span> {elem} </span>
                                <button
                                    onClick ={ () => deleteItem(ind)}
                                >Delete</button>
                            </div>
                            )
                        })
                    }

                   
                </div>

                <div>
                    
                </div>
            </div>
        </>
    )
}
