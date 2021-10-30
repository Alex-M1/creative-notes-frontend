export const REQUEST_URLS = {
  baseUrl: process.env.NODE_ENV === 'production' ? 'http://3.144.199.135' : 'http://localhost:3000',
  registration: '/api/registration',
  autorization: '/api/authorization',
  password_change: '/api/change_password',
  update_user_data: '/api/change_user_data',
  get_users: '/api/get_users',
  change_user_role: '/api/change_user_role',
};
