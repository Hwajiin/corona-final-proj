const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();

const port = process.env.PORT || 5000;
app.listen(port);

const covid_baseURL = "http://openapi.data.go.kr/openapi/service/rest/Covid19";

const getGenAgeData = async (request) => {
  let response;
  try {
    response = await axios({
      method: "get",
      url: `${covid_baseURL}/getCovid19GenAgeCaseInfJson`,
      params: {
        serviceKey: request.query.serviceKey,
        pageNo: request.query.pageNo,
        numOfRows: request.query.numOfRows,
        startCreateDt: request.query.startCreateDt,
        endCreateDt: request.query.endCreateDt,
      },
    });
  } catch (error) {
    console.log(error);
  }

  response = response.data.response.body.items.item;
  return response;
};

const getSidoData = async (request) => {
  let response;
  try {
    response = await axios.get(`${covid_baseURL}/getCovid19SidoInfStateJson`, {
      params: {
        serviceKey: request.query.serviceKey,
        pageNo: request.query.pageNo,
        numOfRows: request.query.numOfRows,
        startCreateDt: request.query.startCreateDt,
        endCreateDt: request.query.endCreateDt,
      },
    });
  } catch (error) {
    console.log(error);
  }
  response = response.data.response.body.items.item;

  return response;
};

app.get("/api/gen-age", (req, res) => {
  getGenAgeData(req).then((response) => {
    return res.json(response);
  });
});

app.get("/api/sido", (req, res) => {
  getSidoData(req).then((response) => {
    return res.json(response);
  });
});

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "client/build/index.html"));
});
