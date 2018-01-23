import { livecamSeed, livecamOffset } from "./livecamSeed";
import { calcLocalOffset } from "./utils";

async function liveCamSearch(cb, hour) {
  try {
    const response = await fetch(
      `https://webcamstravel.p.mashape.com/webcams/list/webcam=${
        livecamSeed[hour]
      }?lang=en&show=webcams%3Aimage%2Clocation`,
      {
        headers: {
          "X-Mashape-Key": "7GrfNcOg3gmshkB1n6TPEVEjj6dip1YH8f6jsnWquxtWbig7ZK"
        }
      }
    );
    const json = await response.json();
    const localOffset = calcLocalOffset();
    const livecams = [];
    json.result.webcams.forEach(function(webcam) {
      const livecam = {
        id: webcam.id,
        title: webcam.title,
        time: webcam.image.update + livecamOffset[hour] - localOffset
      };
      livecams.push(livecam);
    });
    cb(livecams);
  } catch (err) {
    console.log(err);
  }
}

async function showCam(success) {
  try {
    const show = await fetch("/show");
    const bool = await show.json();
    console.log(bool);
    success(bool);
  } catch (err) {
    console.log(err);
  }
}

const Client = { liveCamSearch, showCam };
export default Client;
