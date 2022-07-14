import React from 'react';
import { Title } from './components/Title/Title';
import { ClassComponent } from './components/ClassComponent';
// import { ClassComponent as Test } from './components/ClassComponent';
import { FunctionComponent } from './components/FunctionComponent/FunctionComponent';
import { Modal } from './components/Modal/Modal';
import { Button } from './components/Button/Button';

const App = () => {
  const [open, setOpen] = React.useState(false);

  const title = 'Hello World!!!';

  return (
    <div>
      <Title myTitle={title} />
      {/* <Title myTitle="1" />
      <Title myTitle="2" />
      <Title myTitle="3" />
      <Title myTitle="4" />
      <Title myTitle="5" /> */}

      <ClassComponent />
      <FunctionComponent />

      <Button onClickProp={() => setOpen(true)}>Open Modal</Button>

      <Modal open={open} setOpen={setOpen} />
    </div>
  );
};

export default App;
