import{r as m,n as p,f as v,h as S,i as b,j as E,k as w,l as C,m as T,p as N,q as j,v as B,w as D}from"./scheduler.Qh0fDJEo.js";let $=!1;function H(){$=!0}function I(){$=!1}function P(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function q(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let l=0;l<t.length;l++){const o=t[l];o.claim_order!==void 0&&s.push(o)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const l=t[s].claim_order,o=(r>0&&t[n[r]].claim_order<=l?r+1:P(1,r,_=>t[n[_]].claim_order,l))-1;i[s]=n[o]+1;const u=o+1;n[u]=s,r=Math.max(u,r)}const f=[],a=[];let c=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(f.push(t[s-1]);c>=s;c--)a.push(t[c]);c--}for(;c>=0;c--)a.push(t[c]);f.reverse(),a.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<a.length;s++){for(;l<f.length&&a[s].claim_order>=f[l].claim_order;)l++;const o=l<f.length?f[l]:null;e.insertBefore(a[s],o)}}function M(e,t){if($){for(q(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function X(e,t,n){$&&!n?M(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function Y(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function R(e){return document.createElement(e)}function y(e){return document.createTextNode(e)}function Z(){return y(" ")}function k(){return y("")}function ee(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function te(e){return e.dataset.svelteH}function z(e){return Array.from(e.childNodes)}function L(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function A(e,t,n,i,r=!1){L(e);const f=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const c=e[a];if(t(c)){const s=n(c);return s===void 0?e.splice(a,1):e[a]=s,r||(e.claim_info.last_index=a),c}}for(let a=e.claim_info.last_index-1;a>=0;a--){const c=e[a];if(t(c)){const s=n(c);return s===void 0?e.splice(a,1):e[a]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,c}}return i()})();return f.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,f}function U(e,t,n,i){return A(e,r=>r.nodeName===t,r=>{const f=[];for(let a=0;a<r.attributes.length;a++){const c=r.attributes[a];n[c.name]||f.push(c.name)}f.forEach(a=>r.removeAttribute(a))},()=>i(t))}function ne(e,t,n){return U(e,t,n,R)}function V(e,t){return A(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>y(t),!0)}function ie(e){return V(e," ")}function re(e,t){t=""+t,e.data!==t&&(e.data=t)}function se(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function le(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const f=r.textContent.trim();f===`HEAD_${e}_END`?(i-=1,n.push(r)):f===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function ae(e,t){return new e(t)}const h=new Set;let d;function fe(){d={r:0,c:[],p:d}}function ce(){d.r||m(d.c),d=d.p}function W(e,t){e&&e.i&&(h.delete(e),e.i(t))}function ue(e,t,n,i){if(e&&e.o){if(h.has(e))return;h.add(e),d.c.push(()=>{h.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function oe(e){e&&e.c()}function de(e,t){e&&e.l(t)}function F(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),w(()=>{const f=e.$$.on_mount.map(j).filter(b);e.$$.on_destroy?e.$$.on_destroy.push(...f):m(f),e.$$.on_mount=[]}),r.forEach(w)}function G(e,t){const n=e.$$;n.fragment!==null&&(C(n.after_update),m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function J(e,t){e.$$.dirty[0]===-1&&(B.push(e),D(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function _e(e,t,n,i,r,f,a=null,c=[-1]){const s=T;N(e);const l=e.$$={fragment:null,ctx:[],props:f,update:p,not_equal:r,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:v(),dirty:c,skip_bound:!1,root:t.target||s.$$.root};a&&a(l.root);let o=!1;if(l.ctx=n?n(e,t.props||{},(u,_,...x)=>{const g=x.length?x[0]:_;return l.ctx&&r(l.ctx[u],l.ctx[u]=g)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](g),o&&J(e,u)),_}):[],l.update(),o=!0,m(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){H();const u=z(t.target);l.fragment&&l.fragment.l(u),u.forEach(O)}else l.fragment&&l.fragment.c();t.intro&&W(e.$$.fragment),F(e,t.target,t.anchor),I(),S()}N(s)}class he{$$=void 0;$$set=void 0;$destroy(){G(this,1),this.$destroy=p}$on(t,n){if(!b(n))return p;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!E(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const K="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(K);export{le as A,he as S,z as a,V as b,ne as c,O as d,R as e,ie as f,X as g,M as h,_e as i,re as j,k,ue as l,ce as m,W as n,ee as o,se as p,fe as q,ae as r,Z as s,y as t,oe as u,de as v,F as w,G as x,te as y,Y as z};
