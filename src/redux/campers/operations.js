import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const campers = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

const getIsLastPage = (data, limit, page) => {
  const totalPages = Math.ceil(data.total / limit);
  const isLastPage = page >= totalPages;
  return isLastPage;
};

const filteredData = (filter)=>{
  const updatedFilter = {...filter};
  filter.AC ? (updatedFilter.AC = true) : false;
  filter.TV ? (updatedFilter.TV = true) : false;
  filter.bathroom ? (updatedFilter.bathroom = true) : false;
  filter.gas ? (updatedFilter.gas = true) : false;
  filter.kitchen ? (updatedFilter.kitchen = true) : false;
  filter.microwave ? (updatedFilter.microwave = true) : false;
  filter.radio ? (updatedFilter.radio = true) : false;
  filter.water ? (updatedFilter.water = true) : false;
  filter.refrigerator ? (updatedFilter.refrigerator = true) : false;
  filter.form ==="Van" ? (updatedFilter.form = "panelTruck") : undefined;
  filter.form ==="Fully Integrated" ? (updatedFilter.form = "FullyIntegrated") : undefined;
  return updatedFilter
}

export const getCampers = createAsyncThunk(
  'campers/getAll',
  async ({ page = 1, filter = {} }, thunkAPI) => {
    try {
      const limit = 4;
      const filters = filteredData(filter)
      const params = { page, limit, ...filters };
      const { data } = await campers.get('/campers', { params });
      const isLastPage = getIsLastPage(data, limit, page);
      return { data, page, isLastPage,filters };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  'campers/getOne',
  async (id, thunkAPI) => {
    try {
      const { data } = await campers.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
