import { Express, Request, Response } from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { version, description } from "../package.json";

const options: swaggerJsDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: description,
      version: version,
    },
  },
  apis: ["**/*.route.ts", "**/*.dao.ts"],
};

const swaggerSpec = swaggerJsDoc(options);

function swaggerDocs(app: Express, port: Number) {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(`API Docs available at http://localhost:${port}/api/docs`);
  console.log(`API Docs JSON file available at http://localhost:${port}/api/docs.json`);
}

export default swaggerDocs;
