import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Roompage = () => {
  const { roomId } = useParams();
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const myMeeting = async (element) => {
      const appID = 1315064312;
      const serverSecret = '5756d41a9307443a6b70505b44857fb8';
      const token = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        'Kritarth'
      );

      const zp = ZegoUIKitPrebuilt.create(token);
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url: `${window.location.origin}${window.location.pathname}?roomID=${roomId}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: true,
        showTextChat: true,
        onLeaveRoom: {
          turnOnCameraWhenJoining: false,
        },
      });
    };

    if (videoContainerRef.current) {
      myMeeting(videoContainerRef.current);
    }
  }, [roomId]);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div ref={videoContainerRef} style={{ width: '100%', height: '100%', overflow: 'hidden' }}></div>
    </div>
  );
};

export default Roompage;
