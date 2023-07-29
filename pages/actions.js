import Link from "../components/Link";
import QuickActions from "../components/QuickActions";
import Lights from "@/components/Lights";

export default function Actions({ lights, setLights }) {
  function handleAllOn() {
    // Toggle all lights on
    const updatedLights = lights.map((light) => ({ ...light, isOn: true }));
    setLights(updatedLights);
  }

  function handleAllOff() {
    const updatedLights = lights.map((light) => ({
      ...light,
      isOn: false,
    }));
    setLights(updatedLights);
  }
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        handleAllOn={handleAllOn}
        handleAllOff={handleAllOff}
        lights={lights}
      />
    </>
  );
}
