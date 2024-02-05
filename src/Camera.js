import React, { useState , useRef } from 'react';
import Webcam from 'react-webcam';


function Camera(props) {
const [preImage, setPreImage] = useState();
const file = (e)=>{
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload=(e)=>{
        setPreImage(e.target.result)
    }
}


const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

const webcam = useRef();
const [webcamImg,setWebcamImg] = useState();

const capture =()=>{
    const imgSrc = webcam.current.getScreenshot();
    setWebcamImg(imgSrc);
}


return (
    <div>
      {/* <form method='post' encType='multipart/form-data'></form> */}
    <img src={preImage} />
    <input type="file" name="photo" onChange={file} multiple />


    <Webcam
        ref={webcam}
        audio={false}
        screenshotFormat="image/jpeg"
        width="100%"
        height="auto"
        // environment 후면 / user 전면(셀카)
        videoConstraints = {{facingMode:'environment'}}
    />
    <button onClick={capture}> Capture photo  </button>
    {
        <img src ={webcamImg} width="300" />
    }

    </div>
);
}

export default Camera;