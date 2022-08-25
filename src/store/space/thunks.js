import { apiUrl } from "../../config/constants";
import axios from "axios";

import { appLoading, appDoneLoading, setMessage } from "../appState/slice";

import { useParams } from "react-router-dom";
import { getSpace, getSpaceDetails } from "./slice";

//Fetch All Spaces
export const fetchSpace = () => async (dispatch, getState) => {
  //   const userId = useParams();
  dispatch(appLoading());
  try {
    const response = await axios.get(`${apiUrl}/spaces`);
    // console.log("Fetch Space: ", response.data);
    dispatch(getSpace(response.data));
  } catch (e) {
    console.log(e.message);
  }
  dispatch(appDoneLoading());
};

//Fetch Space Details
export const fetchSpaceDetail = (spaceId) => async (dispatch, getState) => {
  //   const { userId } = useParams();
  dispatch(appLoading());
  try {
    const response = await axios.get(`${apiUrl}/spaces/${spaceId}`);
    console.log("Fetch My Space Detail: ", response.data);
    dispatch(getSpaceDetails(response.data));
  } catch (e) {
    console.log(e.message);
  }
  dispatch(appDoneLoading());
};
