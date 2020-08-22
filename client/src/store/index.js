import { createStore } from 'vuex';
import Auth from './Auth';
import Alert from './Alert';

export default createStore({
  modules: { auth: Auth, alert: Alert },
});
