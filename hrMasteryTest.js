const execute = async () => {
  fetch("https://api.hrmastery.net/api/time-attendance/clock-in", {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9,it;q=0.8",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjI4LCJlbWFpbCI6InNoYWhmYXlhekBzb2Z0YnVpbGRlcnMuYWUiLCJyb2xlIjoiTWFuYWdlciIsInNjb3BlIjoiY29tcGFueSIsImNvbXBhbnlJZCI6MSwiYnJhbmNoSWQiOjEsInByb2plY3RJZCI6IjAiLCJpYXQiOjE3NjM2NDkxNzgsImV4cCI6MTc2NDI1Mzk3OH0.yJfns6314A6eTJtMCdXUMlqpAhbcT1lQEP7ic9i-TcY",
      "content-type": "application/json",
      "sec-ch-ua":
        '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      Referer: "https://client.hrmastery.net/",
    },
    body: '{"lat":25.185858574249924,"long":55.259958808424784}',
    method: "POST",
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};

const checkIn = async () => {
  for (var i = 0; i < 5; i++) {
    execute();
  }
};

checkIn();
