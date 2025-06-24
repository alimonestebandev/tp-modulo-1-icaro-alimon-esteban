const principal_image = document.getElementById("principal-image");

class image {
  constructor() {
    this.url_image = "";
  }
}

const mini_images_container = document.getElementById("mini-images-container");

const imagesUrl = [
  "assetts/gallery_images/image_1.png",
  "assetts/gallery_images/image_2.png",
  "assetts/gallery_images/image_3.png",
  "assetts/gallery_images/image_4.png",
  "assetts/gallery_images/image_5.png",
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
