const principal_image = document.getElementById("principal-image");

const mini_images_container = document.getElementById("mini-images-container");

var index = 0;

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

const next_image = () => {
  if (index < imagesUrl.length) {
    index++;
  } else {
    index = 0;
  }
  principal_image.src = imagesUrl[index];
};

const prev_image = () => {
  if (index > 0) {
    index--;
  } else {
    index = imagesUrl.length - 1;
  }
  principal_image.src = imagesUrl[index];
};

function select_image(e) {
  index = imagesUrl.indexOf(e);
  principal_image.src = e;
}

window.onload = () => {
  principal_image.src = imagesUrl[index];
  prev_image();
  imagesUrl.map((e) => {
    images += `
    <div onclick='select_image("${e}")' class='overflow-hidden '>
      <img draggable='false' class='mini-image' id='' src='${e}' alt='' />
    </div>`;
  });
  mini_images_container.innerHTML = images;
};
