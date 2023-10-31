import React from "react";
import Typed from "typed.js";

function AutoTyped() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hello, My Name is <span class='text-blue'>Saurav !!!</span>",
        "I'm a <span class='text-blue'>Web Developer.</span>",
        "<span class='text-blue'>psynyt&nbsp;|&nbsp;</span>Saurav Nautiyal.",
      ],
      typeSpeed: 100,
      backSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <React.Fragment>
      <div class="font-serif text-white font-medium text-3xl text-center mx-auto sm:text-5xl">
        <span ref={el} />
      </div>
    </React.Fragment>
  );
}
export default AutoTyped;
