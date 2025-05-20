import Toolbar from "./components/Toolbar";
import Gallery from "./components/Gallery";
import { Hello } from "./components/HelloWorld";
import Label from "./components/Label";
import BucketList from "./components/BuckList";
import Signup from "./components/Signup";
import Form from "./components/Form";
import Counter from "./components/Counter";
import MovingDot from "./components/MovingDot";
import List from "./components/List";
import ShapeEditor from "./components/shapeEditor";
import CounterList from "./components/CounterList";


export default function App() {
  return (
    <>
      {/* 
        {/* <Hello />
        <Toolbar 
          onPlayMovie={() => alert('Playing')}
          onUploadImage={() => alert('Uploading')}
        />
        <br />
        <Signup />
        <Gallery />
        <br />
        <Counter />
        <Form /> 
        <MovingDot />
        <ShapeEditor />
        <CounterList />
        <List />
      */}
      <BucketList /> 

    </>
  );
}