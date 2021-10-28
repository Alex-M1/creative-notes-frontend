import { REQUEST_URLS } from '@constants/requestsUrls';
import { connect } from 'react-redux';
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

  connect() {
    this.socket = io(REQUEST_URLS.baseUrl, {
      extraHeaders: {
        Authorization: cookieMaster.getTokenFromCookie(),
      },
    });
    this.socket.connect();
  }
}
export default new SocketMaster();
