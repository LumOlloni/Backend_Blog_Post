const swaggerConfig = {
  exposeRoute: true,
  routePrefix: "/",
  swagger: {
    info: {
      title: "Blog Post Docs",
      description: "Testing Blog Post API",
      version: "1.0.0",
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
  },
};

export default swaggerConfig;
