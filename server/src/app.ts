import express, { Application, Request, Response } from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';

const app: Application = express();

const { API_SERVER_DOMAIN, API_KEY } = process.env;

class App {
  public static create(port?: number) {
    const server = new App();
    server.app.get('/', server.registerDefaultRoute());
    server.app.listen(port ?? 5000, () =>
      console.log(`listening on port ${port ?? 5000}`)
    );
  }
  private application: Application;
  private constructor(port?: number) {
    this.application = express();
  }

  public get app() {
    return this.application;
  }

  private async getRestaurants() {
    const response = await fetch(
      `https://api.airtable.com/v0/${API_SERVER_DOMAIN}/restaurants`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    const result = await response.json();
    return result;
  }

  private registerDefaultRoute() {
    return async (req: Request, res: Response) => {
      const result = await this.getRestaurants();
      res
        .header('Access-Control-Allow-Origin', 'http://localhost:3000')
        .json(result);
    };
  }
}

try {
  App.create();
} catch (error) {
  console.error(error);
}
