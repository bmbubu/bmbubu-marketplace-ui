import React, { useEffect, useRef, useState } from "react";
import axios from '../axios/axios';

type PostInput = {
  url: string;
  data: unknown;
};

export const usePost = <T extends unknown>() => {
  const initialValues = {
    url: "",
    data: null,
  };

  const [input, setInput] = useState<PostInput>(initialValues);
  useEffect(() => {
    const postData = () => {
      axios
        .post(input.url, input.data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => /*input.callback(res.data)*/ console.log(res))
        .catch((err) => console.error(err));
    };

    if (input.data && input.url /*&& input.callback*/) {
      postData();
    } else {
      console.log("Invalid arguments provided to post method");
    }
  }, [input]);

  const postData = (url: string, payload: T) => {
    setInput({ url, data: payload });
  };

  return postData;
};
