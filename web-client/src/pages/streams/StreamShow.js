import { useRef, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import flv from 'flv.js';
import { StreamState } from '../../contexts/StreamContext';
import { fetchStream } from '../../actions';

const StreamShow = () => {
  const videoRef = useRef();
  const { id } = useParams();
  const [stream, setStream] = useState();
  const { streams, streamDispatch } = StreamState();

  useEffect(() => {
    fetchStream(id)(streamDispatch);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setStream(streams[id]);
    // eslint-disable-next-line
  }, [streams]);

  useEffect(() => {
    if (!stream) {
      return;
    }

    const player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });

    player.attachMediaElement(videoRef.current);
    player.load();

    return () => {
      if (player) {
        player.destroy();
      }
    };

    // eslint-disable-next-line
  }, [stream]);

  if (!stream) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} controls />
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  )
}

export default StreamShow
