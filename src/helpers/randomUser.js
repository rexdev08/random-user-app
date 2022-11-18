
const randomUser = async (func)=>{
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
  
   func({
    gender: data.results[0].gender,
    title: data.results[0].name.title,
    first: data.results[0].name.first,
    last: data.results[0].name.last,
    picture: data.results[0].picture.large,
    email: data.results[0].email,
    phone: data.results[0].cell,
    age:  `Tengo ${data.results[0].dob.age} anos`
   })
  }
  

export default randomUser