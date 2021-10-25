import { REQUEST_URLS } from '@constants/requestsUrls';
import { Socket, io } from 'socket.io-client';
import { cookieMaster } from './authHelpers';

class SocketMaster {
  socket: Socket;

  constructor() {
    this.socket = io(REQUEST_URLS.baseUrl, {
      extraHeaders: {
        Authorization: cookieMaster.getTokenFromCookie(),
      },
    });
  }
}
export default new SocketMaster();
