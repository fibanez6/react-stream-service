import streams from "../apis/streams";
import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
} from "./types";

export const createStream = (formValues) => async (streamDispatch, navigate) => {
    const userId = "bla@bla.com"
    const { data } = await streams.post("/streams", { ...formValues, userId });

    streamDispatch({
        type: CREATE_STREAM,
        payload: data
    })

    navigate('/');
};

export const fetchStreams = () => async (streamDispatch) => {
    const { data } = await streams.get("/streams");

    streamDispatch({
        type: FETCH_STREAMS,
        payload: data
    });
}

export const fetchStream = (id) => async (streamDispatch) => {
    const { data } = await streams.get(`/streams/${id}`);
  
    streamDispatch({ 
        type: FETCH_STREAM, 
        payload: data 
    });
  };

export const editStream = (id, formValues) => async (streamDispatch, navigate) => {
    const { data } = await streams.patch(`/streams/${id}`, formValues);

    streamDispatch({
        type: EDIT_STREAM,
        payload: data
    });

    navigate('/');
};

export const deleteStream = (id) => async (streamDispatch, navigate) => {
    
    await streams.delete(`/streams/${id}`);

    streamDispatch({
        type: DELETE_STREAM,
        payload: id
    });

    navigate('/');
};