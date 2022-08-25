import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllSpaces, selectSpaceDetails } from "../store/space/selectors";

import { fetchSpace, fetchSpaceDetail } from "../store/space/thunks";
import { Button, List, Title } from "../styled";
import { Link } from "react-router-dom";

export const Space = () => {
  const dispatch = useDispatch();
  const spaces = useSelector(selectAllSpaces);
  // const spaceDetails = useSelector(selectSpaceDetails);

  useEffect(() => {
    dispatch(fetchSpace());
    // dispatch(fetchSpaceDetail());
  }, []);

  // console.log("Spaces:", spaces);
  return (
    <div>
      <h1 style={{ backgroundColor: "#f3f3f3", color: "black", padding: 20 }}>
        Spaces
      </h1>
      <List>
        {spaces
          ? spaces.map((s) => {
              return (
                <li key={s.id}>
                  <h1>{s.title}</h1>
                  {s.description}
                  <br></br>
                  <Link to={`/spaces/${s.id}`}>
                    {" "}
                    <Button primary>Visit Space</Button>
                  </Link>
                </li>
              );
            })
          : "Loading"}
      </List>
    </div>
  );
};
