import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HistoryState {
  positions: Position[];
  orders: Order[];
  history: History[];
  liquiditys: Liquidity[];
}

export const initialState: HistoryState = {
  positions: [],
  orders: [],
  history: [],
  liquiditys: [],
};

export const historySlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setPositions: (state, action: PayloadAction<Position[]>) => {
      state.positions = action.payload;
    },
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
    setHistory: (state, action: PayloadAction<History[]>) => {
      state.history = action.payload;
    },
    setLiquiditys: (state, action: PayloadAction<Liquidity[]>) => {
      state.liquiditys = action.payload;
    },
  },
});

export const { setPositions, setOrders, setHistory, setLiquiditys } =
  historySlice.actions;

export default historySlice.reducer;
