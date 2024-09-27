import React, { useEffect, useRef, useState } from "react";
import CanvasTemplate from "../models/CanvasTemplate";

function MainContent() {
  const stickyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect();
        const isInView = rect.top <= 0 && rect.bottom >= 0;

        if (isInView) {
          transform(stickyRef.current);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function transform(stickySection) {
    const scrollSection = stickySection.querySelector(".products");
    const stickyTop = stickySection.getBoundingClientRect().top;
    const parentTop = stickySection.parentElement.getBoundingClientRect().top;
    const scrollDistance = Math.abs(stickyTop - parentTop);

    let percentage = (scrollDistance / window.innerHeight) * 100;
    percentage = Math.max(0, Math.min(400, percentage));
    scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
  }

  return (
    <main>
      <div id="intro">
        <div className="detail">
          <h2>About Us</h2>
          <p>
            The Coca-Cola Company is an American multinational corporation
            founded in 1892. It manufactures, sells and markets soft drinks
            including Coca-Cola, other non-alcoholic beverage concentrates and
            syrups, and alcoholic beverages
          </p>
        </div>
      </div>
      <div className="sticky_parent">
        <div
          className="sticky"
          ref={stickyRef}
        >
          <div className="products">
            <div className="product">
              <CanvasTemplate
                model={"./coca-coka_can.glb"}
                position={[0, -1.15, 0]}
                scale={[13, 13, 13]}
                rotation={[0.05, 0, 0.15]}
                orbitRotation={true}
              />
              <div className="detail">
                <h2>Coca-Cola Zero</h2>
                <p>
                  The drink was introduced in 2005 as Coca-Cola Zero as a new
                  no-calorie cola. Coca-Cola Zero was Coca-Cola's largest
                  product launch in 22 years.
                </p>
              </div>
            </div>
            <div className="product">
              <CanvasTemplate
                model={"./diet_coke_can_color_3d_scan.glb"}
                position={[0, -1.15, -110]}
                scale={[1, 1, 1]}
                rotation={[0.05, 0, 0.15]}
                orbitRotation={true}
              />
              <div className="detail">
                <h2>Diet Coke</h2>
                <p>
                  Diet Coke is a sugar-free and low-calorie soft drink. It
                  contains artificial sweeteners instead of sugar. Diet Coke is
                  not based on the Coca-Cola formula, but instead on Tab.
                </p>
              </div>
            </div>
            <div className="product">
              <CanvasTemplate
                model={"./coca-cola_can__can_of_soda1.glb"}
                position={[2, -30, -60]}
                scale={[8, 8, 8]}
                rotation={[0.05, 0, 0.15]}
                orbitRotation={true}
              />
              <div className="detail">
                <h2>Coca-Cola Original</h2>
                <p>
                  The drink has inspired imitators and created a whole
                  classification of soft drink: colas. The name refers to two of
                  its original ingredients: coca leaves and kola nuts (a source
                  of caffeine).
                </p>
              </div>
            </div>
            <div className="product">
              <CanvasTemplate
                model={"./french_coke_light_can.glb"}
                position={[0, -16, -24]}
                scale={[8, 8, 8]}
                rotation={[0.05, 0, 0.15]}
                orbitRotation={true}
              />
              <div className="detail">
                <h2>Coca-Cola Light</h2>
                <p>
                  Diet Coke (also branded as Coca-Cola Light, Coca-Cola Diet or
                  Coca-Cola Light Taste) is a sugar-free and low-calorie soft
                  drink. It contains artificial sweeteners instead of sugar.
                  Diet Coke is not based on the Coca-Cola formula, but instead
                  on Tab.
                </p>
              </div>
            </div>
            <div className="product">
              <CanvasTemplate
                model={"./fanta_can.glb"}
                position={[0, -1, 0]}
                scale={[16.8, 16.8, 16.8]}
                rotation={[0.05, 0, 0.15]}
                orbitRotation={true}
                orbitContro={true}
              />
              <div className="detail">
                <h2>Fanta</h2>
                <p>
                  The head of Coca-Cola Deutschland (Coca-Cola GmbH),
                  decided to create a new product for the German market, using
                  only ingredients available in Germany at the time, including
                  sugar beet, whey (a cheese byproduct), and apple pomace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="brands">
          <h2>Brands</h2>
          <div>
            <span>
              <img src="./brand1.webp" alt="" />
            </span>
            <span>
              <img src="./brand2.webp" alt="" />
            </span>
            <span>
              <img src="./brand3.webp" alt="" />
            </span>
            <span>
              <img src="./brand4.webp" alt="" />
            </span>
            <span>
              <img src="./brand5.webp" alt="" />
            </span>
            <span>
              <img src="./brand6.webp" alt="" />
            </span>
            <span>
              <img src="./brand7.webp" alt="" />
            </span>
            <span>
              <img src="./brand8.webp" alt="" />
            </span>
            <span>
              <img src="./brand9.webp" alt="" />
            </span>
            <span>
              <img src="./brand10.webp" alt="" />
            </span>
            <span>
              <img src="./brand11.webp" alt="" />
            </span>
            <span>
              <img src="./brand12.webp" alt="" />
            </span>
            <span>
              <img src="./brand13.webp" alt="" />
            </span>
            <span>
              <img src="./brand14.webp" alt="" />
            </span>
            <span>
              <img src="./brand15.webp" alt="" />
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
