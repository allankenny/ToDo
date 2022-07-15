import { useState, useEffect, Component } from 'react';
import { Item} from './types/item';
import { ListItem } from './components/ListItem';
import { AddItem } from './components/AddItem';
import * as C from './App.styles';

const App = () => {
  const arr = [];
  const [list, setList] = useState<Item[]>(arr);
  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList);
    localStorage.clear();
    localStorage.setItem('list', JSON.stringify(newList));
  }
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
    localStorage.setItem('list', JSON.stringify(newList));
  }

  const deleteItem = (id: number) => {
    let oldList = [...list];
    const newList = oldList.filter((item)=>item.id !== id);
    localStorage.clear();
    localStorage.setItem('list', JSON.stringify(newList));
    setList(newList);
  }

  useEffect(()=>{
    const listLocalStorage = JSON.parse(localStorage.getItem('list'));
    setList(listLocalStorage);
  },[]);
  return(
    <C.Container>
      <C.Content>
        <C.Header>
          <h1 className='gradient-text'>ToDo</h1>
        </C.Header>
        <AddItem  onEnter={handleAddTask} />
        {list && list.map((item, index)=>(
          <ListItem 
            key={index} 
            item={item}
            onChange={handleTaskChange}
            deleteItem={deleteItem}
          />
        ))}
      </C.Content>
    </C.Container>
  );
}

export default App;