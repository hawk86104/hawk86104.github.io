import{A as n,m as t}from"./d3-array.E5C1cfJ61722409645193.js";var r=1e-6,i=1e-12,e=Math.PI,o=e/2,u=e/4,l=2*e,f=180/e,a=e/180,c=Math.abs,p=Math.atan,h=Math.atan2,s=Math.cos,v=Math.exp,g=Math.log,d=Math.sin,E=Math.sign||function(n){return n>0?1:n<0?-1:0},S=Math.sqrt,y=Math.tan;function m(n){return n>1?o:n<-1?-o:Math.asin(n)}function M(){}function x(n,t){n&&w.hasOwnProperty(n.type)&&w[n.type](n,t)}var N={Feature:function(n,t){x(n.geometry,t)},FeatureCollection:function(n,t){for(var r=n.features,i=-1,e=r.length;++i<e;)x(r[i].geometry,t)}},w={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var r=n.coordinates,i=-1,e=r.length;++i<e;)n=r[i],t.point(n[0],n[1],n[2])},LineString:function(n,t){P(n.coordinates,t,0)},MultiLineString:function(n,t){for(var r=n.coordinates,i=-1,e=r.length;++i<e;)P(r[i],t,0)},Polygon:function(n,t){z(n.coordinates,t)},MultiPolygon:function(n,t){for(var r=n.coordinates,i=-1,e=r.length;++i<e;)z(r[i],t)},GeometryCollection:function(n,t){for(var r=n.geometries,i=-1,e=r.length;++i<e;)x(r[i],t)}};function P(n,t,r){var i,e=-1,o=n.length-r;for(t.lineStart();++e<o;)i=n[e],t.point(i[0],i[1],i[2]);t.lineEnd()}function z(n,t){var r=-1,i=n.length;for(t.polygonStart();++r<i;)P(n[r],t,1);t.polygonEnd()}function j(n){return[h(n[1],n[0]),m(n[2])]}function A(n){var t=n[0],r=n[1],i=s(r);return[i*s(t),i*d(t),d(r)]}function C(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function F(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function L(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function O(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function b(n){var t=S(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function q(n,t){function r(r,i){return r=n(r,i),t(r[0],r[1])}return n.invert&&t.invert&&(r.invert=function(r,i){return(r=t.invert(r,i))&&n.invert(r[0],r[1])}),r}function G(n,t){return c(n)>e&&(n-=Math.round(n/l)*l),[n,t]}function H(n,t,r){return(n%=l)?t||r?q(W(n),X(t,r)):W(n):t||r?X(t,r):G}function I(n){return function(t,r){return c(t+=n)>e&&(t-=Math.round(t/l)*l),[t,r]}}function W(n){var t=I(n);return t.invert=I(-n),t}function X(n,t){var r=s(n),i=d(n),e=s(t),o=d(t);function u(n,t){var u=s(t),l=s(n)*u,f=d(n)*u,a=d(t),c=a*r+l*i;return[h(f*e-c*o,l*r-a*i),m(c*e+f*o)]}return u.invert=function(n,t){var u=s(t),l=s(n)*u,f=d(n)*u,a=d(t),c=a*e-f*o;return[h(f*e+a*o,l*r+c*i),m(c*r-l*i)]},u}function Y(n,t){(t=A(t))[0]-=n,b(t);var i,o=(i=-t[1])>1?0:i<-1?e:Math.acos(i);return((-t[2]<0?-o:o)+l-r)%l}function k(){var n,t=[];return{point:function(t,r,i){n.push([t,r,i])},lineStart:function(){t.push(n=[])},lineEnd:M,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var r=t;return t=[],n=null,r}}}function B(n,t){return c(n[0]-t[0])<r&&c(n[1]-t[1])<r}function D(n,t,r,i){this.x=n,this.z=t,this.o=r,this.e=i,this.v=!1,this.n=this.p=null}function J(n,t,i,e,o){var u,l,f=[],a=[];if(n.forEach((function(n){if(!((t=n.length-1)<=0)){var t,i,e=n[0],l=n[t];if(B(e,l)){if(!e[2]&&!l[2]){for(o.lineStart(),u=0;u<t;++u)o.point((e=n[u])[0],e[1]);return void o.lineEnd()}l[0]+=2*r}f.push(i=new D(e,n,null,!0)),a.push(i.o=new D(e,null,i,!1)),f.push(i=new D(l,n,null,!1)),a.push(i.o=new D(l,null,i,!0))}})),f.length){for(a.sort(t),K(f),K(a),u=0,l=a.length;u<l;++u)a[u].e=i=!i;for(var c,p,h=f[0];;){for(var s=h,v=!0;s.v;)if((s=s.n)===h)return;c=s.z,o.lineStart();do{if(s.v=s.o.v=!0,s.e){if(v)for(u=0,l=c.length;u<l;++u)o.point((p=c[u])[0],p[1]);else e(s.x,s.n.x,1,o);s=s.n}else{if(v)for(c=s.p.z,u=c.length-1;u>=0;--u)o.point((p=c[u])[0],p[1]);else e(s.x,s.p.x,-1,o);s=s.p}c=(s=s.o).z,v=!v}while(!s.v);o.lineEnd()}}}function K(n){if(t=n.length){for(var t,r,i=0,e=n[0];++i<t;)e.n=r=n[i],r.p=e,e=r;e.n=r=n[0],r.p=e}}function Q(n){return c(n[0])<=e?n[0]:E(n[0])*((c(n[0])+e)%l-e)}function R(f,a,c,p){return function(v){var g,E,S,y=a(v),M=k(),x=a(M),N=!1,w={point:P,lineStart:j,lineEnd:C,polygonStart:function(){w.point=L,w.lineStart=O,w.lineEnd=q,E=[],g=[]},polygonEnd:function(){w.point=P,w.lineStart=j,w.lineEnd=C,E=t(E);var f=function(t,f){var a=Q(f),c=f[1],p=d(c),v=[d(a),-s(a),0],g=0,E=0,S=new n;1===p?c=o+r:-1===p&&(c=-o-r);for(var y=0,M=t.length;y<M;++y)if(N=(x=t[y]).length)for(var x,N,w=x[N-1],P=Q(w),z=w[1]/2+u,j=d(z),C=s(z),L=0;L<N;++L,P=q,j=H,C=I,w=O){var O=x[L],q=Q(O),G=O[1]/2+u,H=d(G),I=s(G),W=q-P,X=W>=0?1:-1,Y=X*W,k=Y>e,B=j*H;if(S.add(h(B*X*d(Y),C*I+B*s(Y))),g+=k?W+X*l:W,k^P>=a^q>=a){var D=F(A(w),A(O));b(D);var J=F(v,D);b(J);var K=(k^W>=0?-1:1)*m(J[2]);(c>K||c===K&&(D[0]||D[1]))&&(E+=k^W>=0?1:-1)}}return(g<-r||g<r&&S<-i)^1&E}(g,p);E.length?(N||(v.polygonStart(),N=!0),J(E,U,f,c,v)):f&&(N||(v.polygonStart(),N=!0),v.lineStart(),c(null,null,1,v),v.lineEnd()),N&&(v.polygonEnd(),N=!1),E=g=null},sphere:function(){v.polygonStart(),v.lineStart(),c(null,null,1,v),v.lineEnd(),v.polygonEnd()}};function P(n,t){f(n,t)&&v.point(n,t)}function z(n,t){y.point(n,t)}function j(){w.point=z,y.lineStart()}function C(){w.point=P,y.lineEnd()}function L(n,t){S.push([n,t]),x.point(n,t)}function O(){x.lineStart(),S=[]}function q(){L(S[0][0],S[0][1]),x.lineEnd();var n,t,r,i,e=x.clean(),o=M.result(),u=o.length;if(S.pop(),g.push(S),S=null,u)if(1&e){if((t=(r=o[0]).length-1)>0){for(N||(v.polygonStart(),N=!0),v.lineStart(),n=0;n<t;++n)v.point((i=r[n])[0],i[1]);v.lineEnd()}}else u>1&&2&e&&o.push(o.pop().concat(o.shift())),E.push(o.filter(T))}return w}}function T(n){return n.length>1}function U(n,t){return((n=n.x)[0]<0?n[1]-o-r:o-n[1])-((t=t.x)[0]<0?t[1]-o-r:o-t[1])}G.invert=G;const V=R((function(){return!0}),(function(n){var t,i=NaN,u=NaN,l=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(f,a){var h=f>0?e:-e,v=c(f-i);c(v-e)<r?(n.point(i,u=(u+a)/2>0?o:-o),n.point(l,u),n.lineEnd(),n.lineStart(),n.point(h,u),n.point(f,u),t=0):l!==h&&v>=e&&(c(i-l)<r&&(i-=l*r),c(f-h)<r&&(f-=h*r),u=function(n,t,i,e){var o,u,l=d(n-i);return c(l)>r?p((d(t)*(u=s(e))*d(i)-d(e)*(o=s(t))*d(n))/(o*u*l)):(t+e)/2}(i,u,f,a),n.point(l,u),n.lineEnd(),n.lineStart(),n.point(h,u),t=0),n.point(i=f,u=a),l=h},lineEnd:function(){n.lineEnd(),i=u=NaN},clean:function(){return 2-t}}}),(function(n,t,i,u){var l;if(null==n)l=i*o,u.point(-e,l),u.point(0,l),u.point(e,l),u.point(e,0),u.point(e,-l),u.point(0,-l),u.point(-e,-l),u.point(-e,0),u.point(-e,l);else if(c(n[0]-t[0])>r){var f=n[0]<t[0]?e:-e;l=i*f/2,u.point(-f,l),u.point(0,l),u.point(f,l)}else u.point(t[0],t[1])}),[-e,-o]);function Z(n){var t=s(n),i=2*a,o=t>0,u=c(t)>r;function f(n,r){return s(n)*s(r)>t}function p(n,i,o){var u=[1,0,0],l=F(A(n),A(i)),f=C(l,l),a=l[0],p=f-a*a;if(!p)return!o&&n;var h=t*f/p,s=-t*a/p,v=F(u,l),g=O(u,h);L(g,O(l,s));var d=v,E=C(g,d),y=C(d,d),m=E*E-y*(C(g,g)-1);if(!(m<0)){var M=S(m),x=O(d,(-E-M)/y);if(L(x,g),x=j(x),!o)return x;var N,w=n[0],P=i[0],z=n[1],b=i[1];P<w&&(N=w,w=P,P=N);var q=P-w,G=c(q-e)<r;if(!G&&b<z&&(N=z,z=b,b=N),G||q<r?G?z+b>0^x[1]<(c(x[0]-w)<r?z:b):z<=x[1]&&x[1]<=b:q>e^(w<=x[0]&&x[0]<=P)){var H=O(d,(-E+M)/y);return L(H,g),[x,j(H)]}}}function h(t,r){var i=o?n:e-n,u=0;return t<-i?u|=1:t>i&&(u|=2),r<-i?u|=4:r>i&&(u|=8),u}return R(f,(function(n){var t,r,i,l,a;return{lineStart:function(){l=i=!1,a=1},point:function(c,s){var v,g=[c,s],d=f(c,s),E=o?d?0:h(c,s):d?h(c+(c<0?e:-e),s):0;if(!t&&(l=i=d)&&n.lineStart(),d!==i&&(!(v=p(t,g))||B(t,v)||B(g,v))&&(g[2]=1),d!==i)a=0,d?(n.lineStart(),v=p(g,t),n.point(v[0],v[1])):(v=p(t,g),n.point(v[0],v[1],2),n.lineEnd()),t=v;else if(u&&t&&o^d){var S;E&r||!(S=p(g,t,!0))||(a=0,o?(n.lineStart(),n.point(S[0][0],S[0][1]),n.point(S[1][0],S[1][1]),n.lineEnd()):(n.point(S[1][0],S[1][1]),n.lineEnd(),n.lineStart(),n.point(S[0][0],S[0][1],3)))}!d||t&&B(t,g)||n.point(g[0],g[1]),t=g,i=d,r=E},lineEnd:function(){i&&n.lineEnd(),t=null},clean:function(){return a|(l&&i)<<1}}}),(function(t,r,e,o){!function(n,t,r,i,e,o){if(r){var u=s(t),f=d(t),a=i*r;null==e?(e=t+i*l,o=t-a/2):(e=Y(u,e),o=Y(u,o),(i>0?e<o:e>o)&&(e+=i*l));for(var c,p=e;i>0?p>o:p<o;p-=a)c=j([u,-f*s(p),-f*d(p)]),n.point(c[0],c[1])}}(o,n,i,e,t,r)}),o?[0,-n]:[-e,n-e])}var $=1e9,_=-$;function nn(n,i,e,o){function u(t,r){return n<=t&&t<=e&&i<=r&&r<=o}function l(t,r,u,l){var a=0,c=0;if(null==t||(a=f(t,u))!==(c=f(r,u))||p(t,r)<0^u>0)do{l.point(0===a||3===a?n:e,a>1?o:i)}while((a=(a+u+4)%4)!==c);else l.point(r[0],r[1])}function f(t,o){return c(t[0]-n)<r?o>0?0:3:c(t[0]-e)<r?o>0?2:1:c(t[1]-i)<r?o>0?1:0:o>0?3:2}function a(n,t){return p(n.x,t.x)}function p(n,t){var r=f(n,1),i=f(t,1);return r!==i?r-i:0===r?t[1]-n[1]:1===r?n[0]-t[0]:2===r?n[1]-t[1]:t[0]-n[0]}return function(r){var f,c,p,h,s,v,g,d,E,S,y,m=r,M=k(),x={point:N,lineStart:function(){x.point=w,c&&c.push(p=[]);S=!0,E=!1,g=d=NaN},lineEnd:function(){f&&(w(h,s),v&&E&&M.rejoin(),f.push(M.result()));x.point=N,E&&m.lineEnd()},polygonStart:function(){m=M,f=[],c=[],y=!0},polygonEnd:function(){var i=function(){for(var t=0,r=0,i=c.length;r<i;++r)for(var e,u,l=c[r],f=1,a=l.length,p=l[0],h=p[0],s=p[1];f<a;++f)e=h,u=s,h=(p=l[f])[0],s=p[1],u<=o?s>o&&(h-e)*(o-u)>(s-u)*(n-e)&&++t:s<=o&&(h-e)*(o-u)<(s-u)*(n-e)&&--t;return t}(),e=y&&i,u=(f=t(f)).length;(e||u)&&(r.polygonStart(),e&&(r.lineStart(),l(null,null,1,r),r.lineEnd()),u&&J(f,a,i,l,r),r.polygonEnd());m=r,f=c=p=null}};function N(n,t){u(n,t)&&m.point(n,t)}function w(t,r){var l=u(t,r);if(c&&p.push([t,r]),S)h=t,s=r,v=l,S=!1,l&&(m.lineStart(),m.point(t,r));else if(l&&E)m.point(t,r);else{var f=[g=Math.max(_,Math.min($,g)),d=Math.max(_,Math.min($,d))],a=[t=Math.max(_,Math.min($,t)),r=Math.max(_,Math.min($,r))];!function(n,t,r,i,e,o){var u,l=n[0],f=n[1],a=0,c=1,p=t[0]-l,h=t[1]-f;if(u=r-l,p||!(u>0)){if(u/=p,p<0){if(u<a)return;u<c&&(c=u)}else if(p>0){if(u>c)return;u>a&&(a=u)}if(u=e-l,p||!(u<0)){if(u/=p,p<0){if(u>c)return;u>a&&(a=u)}else if(p>0){if(u<a)return;u<c&&(c=u)}if(u=i-f,h||!(u>0)){if(u/=h,h<0){if(u<a)return;u<c&&(c=u)}else if(h>0){if(u>c)return;u>a&&(a=u)}if(u=o-f,h||!(u<0)){if(u/=h,h<0){if(u>c)return;u>a&&(a=u)}else if(h>0){if(u<a)return;u<c&&(c=u)}return a>0&&(n[0]=l+a*p,n[1]=f+a*h),c<1&&(t[0]=l+c*p,t[1]=f+c*h),!0}}}}}(f,a,n,i,e,o)?l&&(m.lineStart(),m.point(t,r),y=!1):(E||(m.lineStart(),m.point(f[0],f[1])),m.point(a[0],a[1]),l||m.lineEnd(),y=!1)}g=t,d=r,E=l}return x}}const tn=n=>n;var rn=1/0,en=rn,on=-rn,un=on;const ln={point:function(n,t){n<rn&&(rn=n);n>on&&(on=n);t<en&&(en=t);t>un&&(un=t)},lineStart:M,lineEnd:M,polygonStart:M,polygonEnd:M,result:function(){var n=[[rn,en],[on,un]];return on=un=-(en=rn=1/0),n}};function fn(n){return function(t){var r=new an;for(var i in n)r[i]=n[i];return r.stream=t,r}}function an(){}function cn(n,t,r){var i=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),null!=i&&n.clipExtent(null),function(n,t){n&&N.hasOwnProperty(n.type)?N[n.type](n,t):x(n,t)}(r,n.stream(ln)),t(ln.result()),null!=i&&n.clipExtent(i),n}function pn(n,t,r){return cn(n,(function(r){var i=t[1][0]-t[0][0],e=t[1][1]-t[0][1],o=Math.min(i/(r[1][0]-r[0][0]),e/(r[1][1]-r[0][1])),u=+t[0][0]+(i-o*(r[1][0]+r[0][0]))/2,l=+t[0][1]+(e-o*(r[1][1]+r[0][1]))/2;n.scale(150*o).translate([u,l])}),r)}an.prototype={constructor:an,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var hn=16,sn=s(30*a);function vn(n,t){return+t?function(n,t){function i(e,o,u,l,f,a,p,s,v,g,d,E,y,M){var x=p-e,N=s-o,w=x*x+N*N;if(w>4*t&&y--){var P=l+g,z=f+d,j=a+E,A=S(P*P+z*z+j*j),C=m(j/=A),F=c(c(j)-1)<r||c(u-v)<r?(u+v)/2:h(z,P),L=n(F,C),O=L[0],b=L[1],q=O-e,G=b-o,H=N*q-x*G;(H*H/w>t||c((x*q+N*G)/w-.5)>.3||l*g+f*d+a*E<sn)&&(i(e,o,u,l,f,a,O,b,F,P/=A,z/=A,j,y,M),M.point(O,b),i(O,b,F,P,z,j,p,s,v,g,d,E,y,M))}}return function(t){var r,e,o,u,l,f,a,c,p,h,s,v,g={point:d,lineStart:E,lineEnd:y,polygonStart:function(){t.polygonStart(),g.lineStart=m},polygonEnd:function(){t.polygonEnd(),g.lineStart=E}};function d(r,i){r=n(r,i),t.point(r[0],r[1])}function E(){c=NaN,g.point=S,t.lineStart()}function S(r,e){var o=A([r,e]),u=n(r,e);i(c,p,a,h,s,v,c=u[0],p=u[1],a=r,h=o[0],s=o[1],v=o[2],hn,t),t.point(c,p)}function y(){g.point=d,t.lineEnd()}function m(){E(),g.point=M,g.lineEnd=x}function M(n,t){S(r=n,t),e=c,o=p,u=h,l=s,f=v,g.point=S}function x(){i(c,p,a,h,s,v,e,o,r,u,l,f,hn,t),g.lineEnd=y,y()}return g}}(n,t):function(n){return fn({point:function(t,r){t=n(t,r),this.stream.point(t[0],t[1])}})}(n)}var gn=fn({point:function(n,t){this.stream.point(n*a,t*a)}});function dn(n,t,r,i,e,o){if(!o)return function(n,t,r,i,e){function o(o,u){return[t+n*(o*=i),r-n*(u*=e)]}return o.invert=function(o,u){return[(o-t)/n*i,(r-u)/n*e]},o}(n,t,r,i,e);var u=s(o),l=d(o),f=u*n,a=l*n,c=u/n,p=l/n,h=(l*r-u*t)/n,v=(l*t+u*r)/n;function g(n,o){return[f*(n*=i)-a*(o*=e)+t,r-a*n-f*o]}return g.invert=function(n,t){return[i*(c*n-p*t+h),e*(v-p*n-c*t)]},g}function En(n){return function(n){var t,r,i,e,o,u,l,c,p,h,s=150,v=480,g=250,d=0,E=0,y=0,m=0,M=0,x=0,N=1,w=1,P=null,z=V,j=null,A=tn,C=.5;function F(n){return c(n[0]*a,n[1]*a)}function L(n){return(n=c.invert(n[0],n[1]))&&[n[0]*f,n[1]*f]}function O(){var n=dn(s,0,0,N,w,x).apply(null,t(d,E)),i=dn(s,v-n[0],g-n[1],N,w,x);return r=H(y,m,M),l=q(t,i),c=q(r,l),u=vn(l,C),b()}function b(){return p=h=null,F}return F.stream=function(n){return p&&h===n?p:p=gn(function(n){return fn({point:function(t,r){var i=n(t,r);return this.stream.point(i[0],i[1])}})}(r)(z(u(A(h=n)))))},F.preclip=function(n){return arguments.length?(z=n,P=void 0,b()):z},F.postclip=function(n){return arguments.length?(A=n,j=i=e=o=null,b()):A},F.clipAngle=function(n){return arguments.length?(z=+n?Z(P=n*a):(P=null,V),b()):P*f},F.clipExtent=function(n){return arguments.length?(A=null==n?(j=i=e=o=null,tn):nn(j=+n[0][0],i=+n[0][1],e=+n[1][0],o=+n[1][1]),b()):null==j?null:[[j,i],[e,o]]},F.scale=function(n){return arguments.length?(s=+n,O()):s},F.translate=function(n){return arguments.length?(v=+n[0],g=+n[1],O()):[v,g]},F.center=function(n){return arguments.length?(d=n[0]%360*a,E=n[1]%360*a,O()):[d*f,E*f]},F.rotate=function(n){return arguments.length?(y=n[0]%360*a,m=n[1]%360*a,M=n.length>2?n[2]%360*a:0,O()):[y*f,m*f,M*f]},F.angle=function(n){return arguments.length?(x=n%360*a,O()):x*f},F.reflectX=function(n){return arguments.length?(N=n?-1:1,O()):N<0},F.reflectY=function(n){return arguments.length?(w=n?-1:1,O()):w<0},F.precision=function(n){return arguments.length?(u=vn(l,C=n*n),b()):S(C)},F.fitExtent=function(n,t){return pn(F,n,t)},F.fitSize=function(n,t){return function(n,t,r){return pn(n,[[0,0],t],r)}(F,n,t)},F.fitWidth=function(n,t){return function(n,t,r){return cn(n,(function(r){var i=+t,e=i/(r[1][0]-r[0][0]),o=(i-e*(r[1][0]+r[0][0]))/2,u=-e*r[0][1];n.scale(150*e).translate([o,u])}),r)}(F,n,t)},F.fitHeight=function(n,t){return function(n,t,r){return cn(n,(function(r){var i=+t,e=i/(r[1][1]-r[0][1]),o=-e*r[0][0],u=(i-e*(r[1][1]+r[0][1]))/2;n.scale(150*e).translate([o,u])}),r)}(F,n,t)},function(){return t=n.apply(this,arguments),F.invert=t.invert&&L,O()}}((function(){return n}))()}function Sn(n,t){return[n,g(y((o+t)/2))]}function yn(){return function(n){var t,r,i,o=En(n),u=o.center,l=o.scale,c=o.translate,p=o.clipExtent,h=null;function s(){var u=e*l(),c=o(function(n){function t(t){return(t=n(t[0]*a,t[1]*a))[0]*=f,t[1]*=f,t}return n=H(n[0]*a,n[1]*a,n.length>2?n[2]*a:0),t.invert=function(t){return(t=n.invert(t[0]*a,t[1]*a))[0]*=f,t[1]*=f,t},t}(o.rotate()).invert([0,0]));return p(null==h?[[c[0]-u,c[1]-u],[c[0]+u,c[1]+u]]:n===Sn?[[Math.max(c[0]-u,h),t],[Math.min(c[0]+u,r),i]]:[[h,Math.max(c[1]-u,t)],[r,Math.min(c[1]+u,i)]])}return o.scale=function(n){return arguments.length?(l(n),s()):l()},o.translate=function(n){return arguments.length?(c(n),s()):c()},o.center=function(n){return arguments.length?(u(n),s()):u()},o.clipExtent=function(n){return arguments.length?(null==n?h=t=r=i=null:(h=+n[0][0],t=+n[0][1],r=+n[1][0],i=+n[1][1]),s()):null==h?null:[[h,t],[r,i]]},s()}(Sn).scale(961/l)}Sn.invert=function(n,t){return[n,2*p(v(t))-o]};export{yn as m};