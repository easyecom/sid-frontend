import Router from 'next/router';
import actions from '../redux/actions';
import { getCookie } from './cookie';

export default function(ctx) {
  if(ctx.isServer) {
    ctx.store.dispatch(actions.reauthenticate(getCookie("token", ctx.req)));
  } else if(ctx.store) {
    const token = ctx.store.getState().auth.token;
    if(!token && (
        ctx.pathname.includes("/customer-area/request") ||
        ctx.pathname.includes("/customer-area/data") ||
        ctx.pathname.includes("/customer-area/change-password") 
    )) Router.push("/customer-area");
  }
}