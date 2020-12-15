const url = "https://jsonplaceholder.typicode.com/users/1/todos";
const mainurl = "https://jsonplaceholder.typicode.com/todos/" ;
export const FetchList = async () =>{
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export const fetchwithID = async (id) =>{
   const res = await fetch( url + `?id=`+ id);
   const data = await res.json();
   return data;
}

export const updateCompletetask =  async (id ,status) =>{
  const res = await fetch(mainurl+id, {
    method: 'PATCH',
    body: JSON.stringify({
      completed: status,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const json = await res.json();
  return json;
}

export const deleteTodo =  async (id) =>{

   const res = await fetch(mainurl+id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
}

export const AddTodoApi =  async (userId,id,title,completed) =>{
  fetch(mainurl, {
    method: 'POST',
    body: JSON.stringify({
      userId: userId,
      id: id,
      title: title,
      completed: completed
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export const updateTodoApi = async (id, title) =>{
  const res = await fetch(mainurl+id, {
    method: 'PATCH',
    body: JSON.stringify({
      title: title
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const json = await res.json();
  return json;
}