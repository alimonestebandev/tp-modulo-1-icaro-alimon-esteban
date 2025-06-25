/* Imagen principal*/
const principal_image = document.getElementById("principal-image");
/* Contenedor de las imagenes en miniatura*/
const mini_images_container = document.getElementById("mini-images-container");

/*Botones */
const button_prev = document.getElementById("button-prev");
const button_next = document.getElementById("button-next");

const imagesUrl = [
  "assetts/gallery_images/image_1.png",
  "assetts/gallery_images/image_2.png",
  "assetts/gallery_images/image_3.png",
  "assetts/gallery_images/image_4.png",
  "assetts/gallery_images/image_5.png",
];

var index = 0;

const next_image = () => {
  console.log("se clickeo next image");
  if (index < imagesUrl.length - 1) {
    index++;
  } else {
    index = 0;
  }
  principal_image.src = imagesUrl[index];
  update_state_opacity();
};

const prev_image = () => {
  console.log("se clickeo prev image");
  if (index > 0) {
    index--;
  } else {
    index = imagesUrl.length - 1;
  }
  principal_image.src = imagesUrl[index];
  update_state_opacity();
};

button_next.addEventListener("click", next_image);
button_prev.addEventListener("click", prev_image);

function select_image(e) {
  index = imagesUrl.indexOf(e);
  principal_image.src = e;
  update_state_opacity();
}

const update_state_opacity = () => {
  imagesUrl.map((images) => {
    document.getElementById(images).className = "mini-image";
  });
  document.getElementById(imagesUrl[index]).className = "mini-image-selected";
};

window.onload = () => {
  principal_image.src = imagesUrl[index];
  var images = "";
  imagesUrl.map((e) => {
    images += `
    <div onclick='select_image("${e}")' class='overflow-hidden '>
    <img draggable='false' class='mini-image' id=${e} src='${e}' alt='' />
    </div>`;
  });
  mini_images_container.innerHTML = images;
  update_state_opacity();
};
