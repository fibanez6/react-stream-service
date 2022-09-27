import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { StreamState } from '../../contexts/StreamContext';
import { fetchStreams } from '../../actions';

const StreamList = () => {

    const { streams, streamDispatch } = StreamState();
    const [list, setList] = useState([])

    useEffect(() => {
        fetchStreams()(streamDispatch);
    }, [streamDispatch]);

    useEffect(() => {
        setList(Object.values(streams))
    }, [streams]);

    const renderList = () => {
        return list.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">
                            {stream.title}
                        </Link>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        });
    }

    const renderAdmin = (stream) => {
        return (
            <div className="right floated content">
                <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                    Edit
                </Link>
                <Link
                    to={`/streams/delete/${stream.id}`}
                    className="ui button negative"
                >
                    Delete
                </Link>
            </div>
        );
    };

    return (
        <div className="right floated content">
            <h2>Streams</h2>
            <div className="ui celled list">{renderList()}</div>
        </div>
    )
}

export default StreamList
