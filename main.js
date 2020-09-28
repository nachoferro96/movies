
var app = new Vue({
  el: "#app",
  data: {
    accion:[],
    ids:[],
    masinfo:[],
    
    crime:[],
    masinfo2:[],

  },
  methods: {

  }
})




function ids (){
  for( i = 0; i < 60 ; i++){
    app.ids.push(i);
    
  }
}


function iteracion(){
  for ( i = 1; i < 4; i++){
    url = "https://api.themoviedb.org/3/discover/movie?api_key=cc97c00021e56a564e2e442986d94217&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=" + i + "&with_genres=28"
    fetch(url)
    .then(res => res.json())
    .then(data =>{
      
      var loop = function loop(){
        for (i = 0; i < 20; i++){
          if (data.results[i].poster_path ==  null){
          console.log (data.results[i].title);

          }
          else {
            
            var objeto = { 
              title: data.results[i].title, 
              image: "https://image.tmdb.org/t/p/w154" + "" + data.results[i].poster_path + "", 
              image2: "https://image.tmdb.org/t/p/w400" + "" + data.results[i].poster_path + "",
              overview: data.results[i].overview,
              release_date: data.results[i].release_date,
              idioma: data.results[i].original_language,
              id: data.results[i].id,
            }

           app.accion.push(objeto);

           

          } 
          
        }
        function masinfo(){
          for(i = 0 ; i < 59 ; i++){
          var url = "https://api.themoviedb.org/3/movie/" + app.accion[i].id + "?api_key=cc97c00021e56a564e2e442986d94217"
          fetch(url)
          .then(res => res.json())
          .then(data =>{
            

            var objetoinfo = {
              duracion: data.runtime,
              recaudacion: data.revenue,
              titleinfo : data.title,
            }
          
              app.masinfo.push(objetoinfo);

          })
          }

        }
        masinfo()
      }
    loop ();
    })
  }
}

function iteracion2(){
  for ( i = 1; i < 4; i++){
    url = "https://api.themoviedb.org/3/discover/movie?api_key=cc97c00021e56a564e2e442986d94217&language=en-US&sort_by=revenue.desc&include_adult=false&include_video=false&page=" + i + "&with_genres=80"
    fetch(url)
    .then(res => res.json())
    .then(data =>{
      
      var loop = function loop(){
        for (i = 0; i < 20; i++){
          if (data.results[i].poster_path ==  null){
          console.log (data.results[i].title);

          }
          else {
            
            var objeto = { 
              title: data.results[i].title, 
              image: "https://image.tmdb.org/t/p/w154" + "" + data.results[i].poster_path + "", 
              image2: "https://image.tmdb.org/t/p/w400" + "" + data.results[i].poster_path + "",
              overview: data.results[i].overview,
              release_date: data.results[i].release_date,
              idioma: data.results[i].original_language,
              id: data.results[i].id,
            }

           app.crime.push(objeto);

           

          } 
          
        }
        function masinfo(){
          for(i = 0 ; i < 59 ; i++){
          var url = "https://api.themoviedb.org/3/movie/" + app.crime[i].id + "?api_key=cc97c00021e56a564e2e442986d94217"
          fetch(url)
          .then(res => res.json())
          .then(data =>{
            

            var objetoinfo = {
              duracion: data.runtime,
              recaudacion: data.revenue,
              titleinfo : data.title,
            }
          
              app.masinfo2.push(objetoinfo);

          })
          }

        }
        masinfo()
      }
    loop ();
    })
  }
}




 


const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelector('.pelicula');
const flechaizquierda = document.querySelector('.flecha-izquierda');
const flechaderecha = document.querySelector('.flecha-derecha');

const fila2 = document.getElementById("contenedor-carousel2");
const peliculas2 = document.getElementById("pelicula2");
const flechaizquierda2 = document.querySelector('.flecha-izquierda2');
const flechaderecha2 = document.querySelector('.flecha-derecha2');


flechaderecha.addEventListener('click', () => {
  fila.scrollLeft += fila.offsetWidth;
});

flechaizquierda.addEventListener('click', () => {
  fila.scrollLeft -= fila.offsetWidth;
});

flechaderecha2.addEventListener('click', () => {
  fila2.scrollLeft += fila.offsetWidth;
});

flechaizquierda2.addEventListener('click', () => {
  fila2.scrollLeft -= fila.offsetWidth;
});



function mostrar(clicked_id){
  var i = clicked_id / 100;
  var info = document.getElementById("a" +   i )
  info.style.display = "flex"

  var duracion = document.createElement('p')
  duracion.classList = "idioma"
  duracion.innerText = "Duracion:"

  var duracioncontent = document.createElement('p')
  duracioncontent.classList = "letritas"
  duracioncontent.id  = "dura"
  duracioncontent.innerText =  app.masinfo[i].duracion 
  


  var recaudacion = document.createElement('p')
  recaudacion.classList = "idioma2"
  recaudacion.innerText = "Recaudacion:"

  var recaudacontent = document.createElement('p')
  recaudacontent.classList = "letritas"
  recaudacontent.id  = "recauda"
  recaudacontent.innerText = '$' + ' ' + app.masinfo[i].recaudacion



  document.getElementById('letritas' + i).appendChild(duracion)
  document.getElementById('letritas' + i).appendChild(duracioncontent)

  document.getElementById('letritas' + i).appendChild(recaudacion)
  document.getElementById('letritas' + i).appendChild(recaudacontent)

}

function mostrar2(clicked_id){
  var i = clicked_id;
  var nuevoi = i.replace("crimen", "");
  var info = document.getElementById("cri" +  nuevoi )
  info.style.display = "flex"

  var duracion2 = document.createElement('p')
  duracion2.classList = "idioma"
  duracion2.innerText = "Duracion:"

  var duracioncontent = document.createElement('p')
  duracioncontent.classList = "letritas"
  duracioncontent.id  = "dura2"
  duracioncontent.innerText = app.masinfo2[nuevoi].duracion 


  var recaudacion = document.createElement('p')
  recaudacion.classList = "idioma2"
  recaudacion.innerText = "Recaudacion:"

  var recaudacontent = document.createElement('p')
  recaudacontent.classList = "letritas"
  recaudacontent.id  = "recauda2"
  recaudacontent.innerText = '$' + ' ' + app.masinfo2[nuevoi].recaudacion



  document.getElementById("letritasa" + nuevoi).appendChild(duracion2)
  document.getElementById("letritasa" + nuevoi).appendChild(duracioncontent)

   document.getElementById("letritasa" + nuevoi).appendChild(recaudacion)
   document.getElementById("letritasa" + nuevoi).appendChild(recaudacontent)

  
}


function buscar(){
  var barra = document.getElementById('barradebusqueda');
  
  barra.style.display = "flex";
  

}                                                


function ocultar (clicked_id){
  var i = clicked_id ;
  var nuevocontenedor = i.replace("cruz" , "a");
  
  var contenedor = document.getElementById(nuevocontenedor);
  
  contenedor.style.display = "none"

}

function ocultar2 (clicked_id){
  var i = clicked_id ; 
  var nuevocontenedor = i.replace("cruz2", "cri")
  var contenedor = document.getElementById(nuevocontenedor)

  contenedor.style.display = "none"
}







function buscarpeli(){
  var nombrepelicula = document.getElementById("placeholder").value;
  var contenedor = document.getElementById("peliculabuscada")
  var seccion = document.getElementById("contenedor-home")

  contenedor.style.display = "flex"
  seccion.style.display = "none"
 
  var baseurl = "https://api.themoviedb.org/3/"


  var url = baseurl + "search/movie?api_key=cc97c00021e56a564e2e442986d94217&query=" + nombrepelicula; 
  fetch(url)
  .then(res => res.json())
  .then(data =>{

    console.log(data.results[0])

    var overview = document.createElement("p")
    var titulo = document.createElement("h4")
    var image = document.createElement("img")
    var lenguaje = document.createElement("p")
    var fecha = document.createElement("p")


    overview.classList = "parrafobusqueda"
    lenguaje.classList = "lenguajebusqueda"
    fecha.classList = "fechabusqueda"
    image.src = "https://image.tmdb.org/t/p/w400" + "" + data.results[0].poster_path
    overview.innerText = data.results[0].overview
    titulo.innerText = data.results[0].title
    lenguaje.innerText = data.results[0].original_language
    fecha.innerText = data.results[0].release_date


    overview.id = "overviewbusqueda"
    titulo.id = "titulobusqueda"
    image.id = "imagebusqueda"
    lenguaje.id = "lenguajebuqueda"
    fecha.id = "fechabusqueda"


    document.getElementById("peliculabuscada").appendChild(image)
    document.getElementById("peliculabuscada").appendChild(titulo)
    document.getElementById("peliculabuscada").appendChild(overview)
    document.getElementById("peliculabuscada").appendChild(lenguaje)
    document.getElementById("peliculabuscada").appendChild(fecha)
    
  })



}

document.getElementById("buscar").onclick = function(){
  buscarpeli()
}

function ocultarbusqueda(){
  var contenedor = document.getElementById("peliculabuscada")
  var seccion = document.getElementById("contenedor-home")
  contenedor.style.display = "none"
  seccion.style.display = "block"

  var  overview = document.getElementById("overviewbusqueda")
  var  titulo = document.getElementById("titulobusqueda")
  var  image = document.getElementById("imagebusqueda")
  var  lenguaje = document.getElementById("lenguajebuqueda")
  var  fecha = document.getElementById("fechabusqueda")



  contenedor.removeChild(overview)
  contenedor.removeChild(titulo)
  contenedor.removeChild(image)
  contenedor.removeChild(lenguaje)
  contenedor.removeChild(fecha)


}

document.addEventListener("DOMContentLoaded", iteracion(), iteracion2(), ids(), 
);


