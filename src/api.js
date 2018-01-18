async function liveCamSearch(cb) {
  try {
    const response = await fetch(
      `https://webcamstravel.p.mashape.com/webcams/list/country=IT/category=beach/orderby=popularity/limit=20`,
      {
        headers: {
          "X-Mashape-Key": "7GrfNcOg3gmshkB1n6TPEVEjj6dip1YH8f6jsnWquxtWbig7ZK"
        }
      }
    );
    const json = await response.json();
    const ids = json.result.webcams.map(cam => cam.id);
    cb(ids);
  } catch (err) {
    console.log(err);
  }
}

const Client = { liveCamSearch };
export default Client;
