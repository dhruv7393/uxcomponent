import SwitchCreator from "../component/SwitchCreator";

const SwitchCreatorDoc = () => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return <SwitchCreator checked={true} onChange={onChange} />;
};

export default SwitchCreatorDoc;
