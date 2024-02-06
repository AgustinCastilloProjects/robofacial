import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GenderComponent = () => {
  const [dominantEmotion, setDominantEmotion] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    bindEvents();
  }, []);

  function bindEvents(){
    window.addEventListener("CY_FACE_EMOTION_RESULT", (evt) => {
      setDominantEmotion(evt.detail.output.dominantEmotion || "") ;
    });
  }

  useEffect(() => {
    if (dominantEmotion === "Angry") {
      setTimeout(() => {
        navigate("/respBravo");
      }, 3000);
    }
  }, [dominantEmotion, navigate]);

  return (
    <div >
      <p style={{fontSize:"20px"}}>Emoção agora: {dominantEmotion}</p> 
    </div>
  );
};
export default GenderComponent;
