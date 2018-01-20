import { livecamSeed } from "./livecamSeed";
import { japanOffset } from "./utils";

async function liveCamSearch(cb, hour) {
  try {
    const response = await fetch(
      `https://webcamstravel.p.mashape.com/webcams/list/webcam=${
        livecamSeed[hour][0]
      }?lang=en&show=webcams%3Aimage%2Clocation`,
      {
        headers: {
          "X-Mashape-Key": "7GrfNcOg3gmshkB1n6TPEVEjj6dip1YH8f6jsnWquxtWbig7ZK"
        }
      }
    );
    const json = await response.json();

    const { id, title } = json.result.webcams[0];
    const { latitude, longitude } = json.result.webcams[0].location;
    const { update } = json.result.webcams[0].image;
    console.log(update);

    const timeResponse = await fetch(
      `https://maps.googleapis.com/maps/api/timezone/json?location=${latitude},${longitude}&timestamp=${update}&key=AIzaSyDqGwndV4T8AeEGjD0b0kwi2vjdGlHWu6s`
    );
    const timejson = await timeResponse.json();

    const livecam = {
      id,
      title,
      time: update + timejson.rawOffset - japanOffset
    };
    cb(livecam);
  } catch (err) {
    console.log(err);
  }
}

const Client = { liveCamSearch };
export default Client;
