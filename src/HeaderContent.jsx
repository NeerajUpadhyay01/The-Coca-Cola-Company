import React from "react";
import CanvasTemplate from "../models/CanvasTemplate";

function HeaderContent() {
  return (
    <header>
      <nav>
        <span>
          The <h2>Coca-Cola</h2> Company
        </span>
        <div>
          <a href="">Home</a>
          <a href="">Order</a>
          <a href="">Login</a>
          <a href="">Signup</a>
        </div>
      </nav>
      <div>
        <span>Coca</span>
        <CanvasTemplate
          model={"./coca-cola_can__can_of_soda.glb"}
          position={[0, -30, -60]}
          scale={[8, 8, 8]}
          rotation={[0.05, 0, 0.15]}
          orbitRotation={true}
        />
        <span>Cola</span>
      </div>
      <div class="container_mouse">
        <span class="mouse-btn">
          <span class="mouse-scroll"></span>
        </span>
      </div>
    </header>
  );
}

export default HeaderContent;
