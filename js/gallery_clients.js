const principal_image = document.getElementById("principal-image");

class image {
  constructor() {
    this.url_image = "";
  }
}

const mini_images_container = document.getElementById("mini-images-container");

const imagesUrl = [
  "https://media.istockphoto.com/id/1323140489/es/foto/joven-florista-asi%C3%A1tico-confiado-propietario-de-una-peque%C3%B1a-tienda-de-flores-sosteniendo-la.jpg?s=612x612&w=0&k=20&c=Pu4GaLaOZDMHIwCWL_Y7SjgnWD4aoXlDeLdtz5aK6fk=",
  "https://www.infomed.hlg.sld.cu/wp-content/uploads/2023/06/plantas-2.jpg",
  "https://www.consumer.es/app/uploads/2004/03/Plantas-reaccionan-a-la-voz-1.jpg",
  "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/imj/vivirsalud/S/Sabias-que-hacer-jardineria-mejora-tu-salud-2.jpg",
];

var images = "";

const setPrincipalImage = () => {
  // main_image.src = url;
  console.log("asd");
};

function select_image(e) {
  principal_image.src = e;
}

imagesUrl.map((e) => {
  images += `
  <div onclick='select_image("${e}")' class='overflow-hidden '>
    <img draggable='false' class='mini-image' id='' src='${e}' alt='' />
  </div>`;
});
mini_images_container.innerHTML = images;
