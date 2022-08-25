import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSpaceDetails } from "../store/space/selectors";

import { fetchSpaceDetail } from "../store/space/thunks";
import { Button, List, Title } from "../styled";
import { Link, useParams } from "react-router-dom";

export const SpaceDetails = () => {
  const dispatch = useDispatch();
  const spaceDetails = useSelector(selectSpaceDetails);
  const params = useParams();

  useEffect(() => {
    dispatch(fetchSpaceDetail(params.spaceId));
  }, []);

  console.log("My Spaces:", spaceDetails);
  return (
    <div>
      <h1>Space Details</h1>
      {!spaceDetails ? (
        "Loading"
      ) : (
        <div>
          {spaceDetails.title} {spaceDetails.description} {}
        </div>
      )}
    </div>
  );
};
