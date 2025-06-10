export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    personajes: [],
    planetas: [],
    naves: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'perso':

      const callPersonajes = action.payload

      return {
        ...store,
        personajes: callPersonajes
      }
    case 'plane':

      const callPlanetas = action.payload

      return {
        ...store,
        planetas: callPlanetas
      }
    case 'nave':

      const callNave = action.payload

      return {
        ...store,
        naves: callNave
      }
    default:
      throw Error('Unknown action.');
  }    
}
