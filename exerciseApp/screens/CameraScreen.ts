import { ref, uploadBytesResumable } from "firebase/storage";
import { getStorageRef } from "../firebaseConfig"; // Adjust the path as needed

export const uploadImageToFirebase = async (uri: string) => {
  const fetchResponse = await fetch(uri);
  const blob = await fetchResponse.blob();

  const imagePath = uri.split("/").pop()?.split(".")[0] ?? "anonymtBilde";
  console.log("imagepath", imagePath);

  const uploadPath = `images/${imagePath}`;

  const imageRef = getStorageRef(uploadPath);

  try {
    console.log("Uploading image to", uploadPath);
    await uploadBytesResumable(imageRef, blob);
    return uploadPath;
  } catch (e) {
    console.error("Error uploading image", e);
    return "ERROR";
  }
};