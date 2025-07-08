import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  useGSAP(() => {
    gsap.from(".card", {
      scale: 0,
      ease: "elastic.out(1,1)",
      stagger: 0.06,
    });
  });

  return (
    <main>
      <div className="wrapper">
        <img className="card card-1" src="/images/img1.jpg" />
        <img className="card card-2" src="/images/img2.jpg" />
        <img className="card card-3" src="/images/img3.jpg" />
        <img className="card card-4" src="/images/img4.jpg" />
        <img className="card card-5" src="/images/img5.jpg" />
      </div>
    </main>
  );
};

export default App;
