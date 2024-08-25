const express = require("express");
const cors = require("cors");
const TradingVolumeHandler = require("./web3/handler");
const db = require("./db/database");
const { contracts } = require("../contracts/addresses");
const FundingRate = require("./db/funding");

const app = express();
const port = 8090;

// JSON 형식의 요청 본문을 파싱하기 위한 미들웨어 설정
app.use(express.json());
app.use(cors());

const fundingRateTable = new FundingRate("BTC_FUNDING_RATE");

// 차트 정보 요청
app.get("/api/history", (req, res) => {
  const { symbol, resolution, from, to } = req.query;

  db.all(
    `SELECT * FROM ${symbol}_PRICE_VOLUME_${resolution} WHERE time BETWEEN ? AND ?`,
    [from * 1000, to * 1000],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    }
  );
});

// 차트 최신 정보 요청
app.get("/api/latest", (req, res) => {
  const { symbol, resolution } = req.query;
  db.all(
    `SELECT * FROM ${symbol}_PRICE_VOLUME_${resolution} WHERE id = (SELECT MAX(id) FROM ${symbol}_PRICE_VOLUME_${resolution}) `,
    (err, row) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(row[0]);
    }
  );
});

// 24시간 거래량, 총 미결제 약정, 24시간 발생 수수료
app.get("/api/getMarket", (req, res) => {
  res.json({
    volume: 123,
    openInterest: 456,
    fee: 789,
  });
});

// 유동성 가치, 24시간 거래량, 24시간 수수료, APR 반환
app.get("/api/getLiquidityPool", (req, res) => {
  res.json({
    volume: 123,
    fee: 456,
  });
});

app.get("/api/getRecentVolume", (req, res) => {
  db.get(
    `
        SELECT SUM(volume) as totalVolume
        FROM (
            SELECT volume
            FROM BTC_PRICE_VOLUME_60
            ORDER BY id DESC
            LIMIT 24
        );
    `,
    (err, row) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        volume: row.totalVolume,
      });
    }
  );
});

// 24H 거래량, 1h Funding (Long), 1h Funding(Short)
app.get("/api/getPerpetualPool", (req, res) => {
  fundingRateTable.selectRecentFundingRate((recentData, nearHourData) => {
    res.json([recentData, nearHourData]);
  });
});

// Volume, TVL, Fees 일별 정보
app.get("/api/getChart", (req, res) => {
  res.json([
    {
      time: 1724307147000,
      volume: 123,
    },
    {
      time: 1724307148000,
      volume: 456,
    },
    {
      time: 1724307149000,
      volume: 789,
    },
  ]);
});

// 풀 이름    포지션크기     가격  현재 풀 가격  수익률    청산 가격    롱숏 여부
app.get("/api/getPositions", (req, res) => {
  const { address } = req.query;
  db.all(
    `SELECT * FROM BTC_POSITIONS WHERE trader = "${address}"`,
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    }
  );
});

// 풀 이름    포지션크기    진입 가격  현재 풀 가격  수익률    청산 가격    롱숏 여부
app.get("/api/getOrders", (req, res) => {});

// 풀 이름     LP토큰 개수    예치된 토큰 가치   파밍된 수수료    청구되지 않은 수수료
app.get("/api/getLiquidityPositions", (req, res) => {
  const { address } = req.query;
  db.all(
    `SELECT * FROM LIQUIDITY_POSITIONS WHERE trader = "${address}"`,
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    }
  );
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  const handler = new TradingVolumeHandler(
    "0xbcd1303b714fa157b151457189f2a1fd22b725df",
    "0x573a8d46b10a9805d2ab8cfa00eb56f3929c67c0",
    "BTC"
  );
  setTimeout(() => {
    handler.subscribe();
  }, 15000);
});

// nohup node src/index.js > index.out 2>&1 &

/*
테이블1: 24시간 거래량, 수수료


테이블2: 1시간 단위 cumulativeLongFundingRates, cumulativeShortFundingRates

테이블3,4: Volume, TVL 일별 정보

테이블5: 포지션 크기
테이블6: 예약주문 목록
테이블7: 사용자별 유동성 목록

*/
