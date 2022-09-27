import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Modal from '../../components/Modal';
import { StreamState } from '../../contexts/StreamContext';
import { deleteStream } from '../../actions';

const StreamDelete = () => {

  const { id } = useParams();
  const { streams, streamDispatch } = StreamState();
  const [stream, setStream] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setStream(streams[id]);
    // eslint-disable-next-line
  }, []);

  const renderContent = () => {
    if (!stream) {
      return 'Are you sure you want to delete this stream?';
    }
    return `Are you sure you want to delete the stream with title: ${stream.title}`;
  }

  const renderActions = () => {
    return (
      <>
        <button
          onClick={() => deleteStream(id)(streamDispatch, navigate)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    );
  }

  return (
    <div>
      delete stream
      <Modal
        title="Delete Stream"
        content={renderContent()}
        actions={renderActions()}
        onDismiss={() => navigate('/')}
      />
    </div>
  )
}

export default StreamDelete
