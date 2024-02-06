import { useEffect, useRef } from "react";
import { useExternalScript } from "./helpers/ai-sdk/externalScriptsLoader";
import { getAiSdkControls } from "./helpers/ai-sdk/loader";

import './Api.css';

import DominantEmotionComponent from "./components/DominantEmotionComponent";
import FaceTrackerComponent from "./components/FaceTrackerComponent";

function Emocoes() {

  const mphToolsState = useExternalScript("https://sdk.morphcast.com/mphtools/v1.0/mphtools.js");
  const aiSdkState = useExternalScript("https://ai-sdk.morphcast.com/v1.16/ai-sdk.js");
  const videoEl = useRef(undefined)

  useEffect(() => {
    videoEl.current = document.getElementById("videoEl");
    async function getAiSdk (){
      if(aiSdkState === "ready" && mphToolsState === "ready"){
        const { source, start } = await getAiSdkControls();
      await source.useCamera({
        toVideoElement: document.getElementById("videoEl"),
      });
        await start();

      }

    }
    getAiSdk();
  }, [aiSdkState, mphToolsState]);

  return (
    <div>
      {/* <video id="videoEl" style={{visibility: 'hidden', height: '0px', width: '0px'}}></video> */}
      {/* <FaceTrackerComponent videoEl={videoEl}></FaceTrackerComponent> */}
      <DominantEmotionComponent></DominantEmotionComponent>
      {/* <header className="App-header">
        <div style={{display:"flex", flexDirection: "column", alignItems:"center"}}>
        </div>
      </header> */}
    </div>
  );
}

export default Emocoes;
