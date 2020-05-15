const DEFAULT_NAME = "Error";

type Payload = {
  message: string;
  code?: number;
  name?: string;
};

class ExtendedError extends Error {
  protected code?: number;

  constructor(payload: Payload) {
    super(payload.message);

    this.name = payload.name || DEFAULT_NAME;
    this.code = payload.code;
  }
}

export default ExtendedError;
