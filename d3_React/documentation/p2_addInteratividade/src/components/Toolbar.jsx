import Button from "./Button";
import AlertButton from "./AlertButton";
import UploadButton from "./UploadButton";
import PlayButton from "./PlayButton";

export default function Toolbar(/*{onPlayMovie, onUploadImage}*/){
    return (
        <div className="Toolbar" onClickCapture={(e) => {
            console.log(e);
        }}>
            {/* <Button onSmach={() => alert('playing')}>
                Play Movie 1
            </Button>

            <Button onSmach={() => alert('Uploading')}>
                Upload Image
            </Button> */}
            {/* <Button onSmach={onPlayMovie}>Play Movie</Button>
            <Button onSmach={onUploadImage}>Upload Image</Button> */}
            <button onClick={e => e.stopPropagation()}/>
        </div>
    );
}