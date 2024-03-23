const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const nombre = document.querySelector('.name'); //se agrega ( . s) para la clase, se cambia nombre de constante de $n por name
const blog = document.querySelector('.blog'); //se agrega ( . s) para la clase, se cambia nombre de constante de $b por blog
const location = document.querySelector('.location'); //se cambia nombre de constante de $b por locattion

async function displayUser (username) { //Async para funcion asincrona
  nombre.innerHTML = 'cargando...'; // se cambia nombre  de $n por nombre 
  const response = await fetch(`${usersEndpoint} ${username}`);
  console.log(data);
  nombre.innerHTML = `${data.name}`; // se cambia '' por `` se cambia $n por nombre
  blog.innerHTML = `${data.blog}`; // se cambia '' por `` se cambia $b por blog
  location.innerHTML = `${data.location}`; // se cambia $l por location
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  nombre.innerHTML = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);