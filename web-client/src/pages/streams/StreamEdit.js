import React, { useEffect, useState } from 'react'
import _ from "lodash";
import { useNavigate, useParams } from 'react-router';
import { editStream } from '../../actions';
import { StreamState } from '../../contexts/StreamContext';
import StreamForm from './StreamForm';

const StreamEdit = () => {

  const { id } = useParams();
  const { streams, streamDispatch } = StreamState();
  const [stream, setStream] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setStream(streams[id]);
    // eslint-disable-next-line
  }, []);

  const onSubmit = (formValues) => {
    editStream(id, formValues)(streamDispatch, navigate);
  };

  if (!stream) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h3>Edit a Stream</h3>
      <StreamForm
        initialValues={_.pick(stream, "title", "description")}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default StreamEdit;
