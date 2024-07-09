import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt, ZegoExpressEngine } from '@zegocloud/zego-uikit-prebuilt';

const Roompage = () => {
  const { roomId } = useParams();

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
      onLeaveRoom : {
        turnOnCameraWhenJoining: false
      }
    });
  };

  return (
    <div>
      <div ref={myMeeting}></div>
    </div>
  );
};

export default Roompage;
