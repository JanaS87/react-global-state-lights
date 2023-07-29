import Link from "../components/Link";
import React from "react";
import Lights from "@/components/Lights";

export default function HomePage({ lights }) {
  const turnedOnLights = lights.filter((light) => light.isOn).length;
  return (
    <div>
      <h1>Home</h1>
      <p>{turnedOnLights} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
