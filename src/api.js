import { livecamSeed } from "./livecamSeed";

async function liveCamSearch(cb, id) {
  try {
    const response = await fetch(
      `https://webcamstravel.p.mashape.com/webcams/list/webcam=${
        livecamSeed[id][0]
      }?lang=en&show=webcams%3Aimage%2Clocation`,
      {
        headers: {
          "X-Mashape-Key": "7GrfNcOg3gmshkB1n6TPEVEjj6dip1YH8f6jsnWquxtWbig7ZK"
        }
      }
    );
    const json = await response.json();
    console.log(json);
    const livecam = {
      id: json.result.webcams[0].id,
      title: json.result.webcams[0].title,
      time: json.result.webcams[0].image.update
    };
    cb(livecam);
  } catch (err) {
    console.log(err);
  }
}

const Client = { liveCamSearch };
export default Client;
