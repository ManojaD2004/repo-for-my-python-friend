import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { storage } from "./firebase.js";

async function getImageUrl() {
  //gs://orcode-20903.appspot.com/IMG_20210214_181505.jpg
  const imageRef = ref(storage, `IMG_20210214_181505.jpg`);
  const getURL = await getDownloadURL(imageRef);
  console.log(getURL);
}

getImageUrl();
