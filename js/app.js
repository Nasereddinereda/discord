var morphing = anime({
  targets: ".st0",
  d: [
    {
      value: `M1290.6,1c0,0-55,110.2-190.8,251.4c-60.5,62.4-199.9,211-161.4,278.8c90.9,154.8,97.2,310-137.6,245.8
	c-119.2-47.7-183.4-45.8-211.8,36c-41.1,86.5-71.2,128.5-128,163c-117.1,70.9-150,105-150,105H0V1H1290.6z`
    },

    {
      value: `M1065,1c0,0,128.5,83.5-15,235c-70,71-38.1,103.7-23,124c16.9,22.6,134,189-121,296
	c-90.5,43.5-101.5,85.3-66,157c28.6,57.8,35.5,114.5-128,163c-126.5,46.5-150,105-150,105H0V1H1065z`
    }
  ],

  duration: 30000,
  loop: true,
  autoplay: false,

  easing: "linear"
});

morphing.play();

var morphing_click = anime({
  targets: ".st0",
  d: [
    {
      value: `M1920,1c0,0,0,284.4,0.8,521.1c2.4,123.4,1.6,438.7-0.8,562.4c-36.9-4.5-180,2.6-491.8-3.5
	c-90.5,43.5-188.9,19.9-321-1c-104.6,0-147.2,20.9-328.4,0c-126.5,46.5-216.8,1-216.8,1H0V1H1920z`
    }
  ],

  duration: 400,
  loop: false,
  autoplay: false,

  easing: "linear"
});

document.getElementById("button").addEventListener("click", e => {
  e.preventDefault();

  morphing.pause();
  morphing_click.play();
});
