import * as Exception from './../exceptions/exceptions';
import toastr from 'toastr';

export default class ToastExceptionsShower {
  static show(exception, overriddenMessage = exception.message) {
    if (exception instanceof Exception.Error) {
      toastr.error(overriddenMessage);
    } else if (exception instanceof Exception.Warning) {
      toastr.warning(overriddenMessage);
    }
  }
}
