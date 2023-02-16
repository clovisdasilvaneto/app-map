import AppMap from "app-map";

AppMap({
  container: "#app-map-container",
  pages: [
    {
      name: "Home",
      description: "some",
      url: "http://google.com",
      keywords: ["home"],
      states: {
        active: true
      }
    },
    {
      name: "About us",
      description: "some",
      url: "http://google.com",
      keywords: ["about", "us"],
      children: [
        {
          name: "What we do",
          description: "some",
          url: "http://google.com",
          keywords: ["what we do", "about the company"]
        },
        {
          name: "Our mission",
          description: "mission of the company",
          url: "http://google.com",
          keywords: ["our mission"]
        }
      ]
    }
  ]
});
