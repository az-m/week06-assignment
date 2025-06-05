import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

const url = process.env.API_ROOT;

const arrImages = [
  {
    id: 0,
    src: url + "/images/Gashadokuro.png",
    title: "Gashadokuro",
    alt: "An image of a Gashadokuro, the 'starving skeleton' yokai.",
  },
  {
    id: 1,
    src: url + "/images/Joroogumo.png",
    title: "Joroogumo",
    alt: "An image of a Joroogumo, a spider-woman yokai.",
  },
  {
    id: 2,
    src: url + "/images/Jubokko.png",
    title: "Jubokko",
    alt: "An image of a Jubokko, a possessed tree yokai.",
  },
  {
    id: 3,
    src: url + "/images/Kappa.png",
    title: "Kappa",
    alt: "An image of a man being startled by a Kappa, a tortoise yokai.",
  },
  {
    id: 4,
    src: url + "/images/Shuten_Dooji.png",
    title: "Shuten Dooji",
    alt: "An image of Shuten Dooji, the wine-drinking demon yokai.",
  },
  {
    id: 5,
    src: url + "/images/Tamamo-no-Mae.png",
    title: "Tamamo-no-Mae",
    alt: "An image of Tamamo-no-Mae, the nine-tailed fox yokai.",
  },
  {
    id: 6,
    src: url + "/images/Yamauba.png",
    title: "Yamauba",
    alt: "An image of a Yamauba, a mountain crone yokai.",
  },
  {
    id: 7,
    src: url + "/images/Yuki_Onna.png",
    title: "Yuki Onna",
    alt: "An image of a Yuki Onna, a snow-woman yokai.",
  },
];

app.listen(8080, function () {
  console.log("Server is alive and listening on 8080");
});

app.get("/", function (request, response) {
  response.json({ message: "This is the root route of the API." });
});

app.get("/getImages", async (request, response) => {
  response.send(arrImages);
});
