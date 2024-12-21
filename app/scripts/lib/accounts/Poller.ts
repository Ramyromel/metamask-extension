export class Poller {
  #interval: number;

  #callback: () => void;

  #handle: NodeJS.Timeout | undefined = undefined;

  constructor(callback: () => void, interval: number) {
    this.#interval = interval;
    this.#callback = callback;
  }

  start() {
    if (this.#handle) {
      return;
    }

    const executeCallback = async () => {
      try {
        await this.#callback();
      } catch (error) {
        console.error('Error executing callback:', error);
      }
    };

    this.#handle = setInterval(executeCallback, this.#interval);
  }

  stop() {
    if (!this.#handle) {
      return;
    }
    clearInterval(this.#handle);
    this.#handle = undefined;
  }
}
