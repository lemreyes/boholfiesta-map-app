import React, { useCallback, useRef } from "react";
import { toJpeg } from "html-to-image";
import Map from "./Map";
import ".././App.css";

function MapPage() {
  const divRef = useRef(null);

  const fileName = "BoholFiestaMap.jpg";

  const downloadJpg = useCallback(() => {
    if (divRef.current === null) {
      return;
    }
    toJpeg(divRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${fileName}`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [divRef]);

  return (
    <section>
      <section className="Map-container">
        <section className="Map-padding" ref={divRef}>
          <Map />
        </section>
        <section className="save-image-button" onClick={downloadJpg}>
          Save Image
        </section>
        <section className="copyright">
          <p>
            Based on{" "}
            <a
              href="https://www.my-philippines-travel-level.com/"
              target="_blank"
              rel="noreferrer"
            >
              My Philippines Travel Level app
            </a>
          </p>
          <p className="source">
            <a
              href="https://github.com/lemreyes/boholfiesta-map-app"
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          </p>
        </section>
      </section>
    </section>
  );
}

export default MapPage;
