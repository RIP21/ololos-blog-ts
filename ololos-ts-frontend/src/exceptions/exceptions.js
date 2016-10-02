export function Warning(message) {
  this.message = message;
}

export function Error(error, message = error) {
  this.body = error;
  this.message = message;
}
