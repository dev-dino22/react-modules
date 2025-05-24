import "./App.css";
import MobileLayout from "./MobileLayout";
import TriggerButton from "./TriggerButton";

function App() {
  return (
    <MobileLayout>
      <TriggerButton
        modalPosition="bottom"
        closeType="top"
        titleText="카드 선택"
      />
    </MobileLayout>
  );
}

export default App;
