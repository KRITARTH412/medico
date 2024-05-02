// VideoChat.js
import React, { useEffect, useRef, useState } from 'react';
import Video from 'twilio-video';

const VideoChat = ({ token, username }) => {
  const localVideoRef = useRef();
  const [room, setRoom] = useState(null);
  const [isMounted, setIsMounted] = useState(true);
  const [voiceStatus, setVoiceStatus] = useState("Mute");
  const [videoStatus, setVideoStatus] = useState("Stop Video");

  useEffect(() => {
    const connectToRoom = async () => {
      try {
        const newRoom = await Video.connect(token, { name: 'your-room-name' });
        setRoom(newRoom);

        // Add local video track to the page
        Video.createLocalVideoTrack().then(track => {
          const localMediaContainer = localVideoRef.current;
          localMediaContainer.appendChild(track.attach());
          track.mediaStreamTrack.enabled = true;
        });

        // Add remote video tracks to the page
        newRoom.on('participantConnected', participant => {
          participant.tracks.forEach(publication => {
            if (publication.isSubscribed) {
              const track = publication.track;
              const remoteMediaContainer = document.getElementById('remote-media-container');
              remoteMediaContainer.appendChild(track.attach());
            }
          });
        });
      } catch (error) {
        console.error('Error connecting to the room:', error);
      }
    };

    if (token && isMounted) {
      connectToRoom();
    }

    // Cleanup function
    return () => {
      setIsMounted(false);
      if (room) {
        room.disconnect();
      }
    };
  }, [token, isMounted, room]);

  const toggleAudio = () => {
    if (room) {
      const audioTrack = Array.from(room.localParticipant.audioTracks.values())[0]?.track;
      if (audioTrack) {
        audioTrack.enable(!audioTrack.isEnabled);
        setVoiceStatus(audioTrack.isEnabled ? 'Mute' : 'Unmute');
      }
    }
  };
  
  const toggleVideo = () => {
    if (room) {
      const localVideoTrack = Array.from(room.localParticipant.videoTracks.values())[0]?.track;
      if (localVideoTrack) {
        if (localVideoTrack.isEnabled) {
          localVideoTrack.stop(); // Stop the local video track to turn off the camera
        } else {
          // Start the local video track to turn on the camera
          Video.createLocalVideoTrack().then(track => {
            room.localParticipant.publishTrack(track);
          });
        }
  
        // Update videoStatus state based on the local video track status
        setVideoStatus(localVideoTrack.isEnabled ? 'Stop Video' : 'Start Video');
      }
    }
  };
  
  
  const muteAudio = () => {
    if (room) {
      room.localParticipant.audioTracks.forEach(track => {
        track.track.disable();
      });
    }
  };

  const stopVideo = () => {
    if (room) {
      room.localParticipant.videoTracks.forEach(track => {
        track.track.disable();
      });
    }
  };

  return (
    <div>
      <div ref={localVideoRef} />
      <div id="remote-media-container" />
      <div>
        <p>Username: {username}</p>
        <button onClick={toggleAudio}>{voiceStatus}</button>
        <button onClick={toggleVideo}>{videoStatus}</button>
        <button onClick={muteAudio}>Mute Audio</button>
        <button onClick={stopVideo}>Stop Video</button>
        <button onClick={() => { if (room) room.disconnect() }}>Cancel Call</button>
      </div>
    </div>
  );
};

export default VideoChat;
