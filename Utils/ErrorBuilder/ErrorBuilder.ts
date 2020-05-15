import ExtendedError from "./ExtendedError";

export class ErrorBuilder {
  protected message: string;
  protected name?: string;
  protected code?: number;

  constructor(message: string) {
    this.message = message;
  }

  public setName = (name: string) => {
    this.name = name;
    return this;
  };

  public setMessage = (message: string) => {
    this.message = message;
    return this;
  };

  public setCode = (code: number) => {
    this.code = code;
    return this;
  };

  public build = () => {
    return new ExtendedError({
      message: this.message,
      name: this.name,
      code: this.code
    });
  };
}

export default ErrorBuilder;
