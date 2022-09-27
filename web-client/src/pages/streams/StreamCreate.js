import React from 'react'
import { useNavigate } from 'react-router-dom';
import { createStream } from '../../actions';
import { StreamState } from '../../contexts/StreamContext';
import StreamForm from './StreamForm';

const StreamCreate = () => {

  const { streamDispatch } = StreamState();
  const navigate = useNavigate();

  const onSubmit = (formValues) => {
    createStream(formValues)(streamDispatch, navigate);
  };

  return (
    <div>
      <h3>Create a Stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </div>
  )
}

export default StreamCreate;
