const t=.5*(Math.sqrt(3)-1),n=(3-Math.sqrt(3))/6,e=(Math.sqrt(5)-1)/4,r=(5-Math.sqrt(5))/20,o=t=>0|Math.floor(t),a=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]),l=new Float64Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]);function s(e=Math.random){const r=f(e),l=new Float64Array(r).map((t=>a[t%12*2])),s=new Float64Array(r).map((t=>a[t%12*2+1]));return function(e,a){let c=0,f=0,i=0;const u=(e+a)*t,w=o(e+u),y=o(a+u),A=(w+y)*n,m=e-(w-A),F=a-(y-A);let h,p;m>F?(h=1,p=0):(h=0,p=1);const M=m-h+n,q=F-p+n,d=m-1+2*n,x=F-1+2*n,U=255&w,b=255&y;let g=.5-m*m-F*F;if(g>=0){const t=U+r[b];g*=g,c=g*g*(l[t]*m+s[t]*F)}let j=.5-M*M-q*q;if(j>=0){const t=U+h+r[b+p];j*=j,f=j*j*(l[t]*M+s[t]*q)}let k=.5-d*d-x*x;if(k>=0){const t=U+1+r[b+1];k*=k,i=k*k*(l[t]*d+s[t]*x)}return 70*(c+f+i)}}function c(t=Math.random){const n=f(t),a=new Float64Array(n).map((t=>l[t%32*4])),s=new Float64Array(n).map((t=>l[t%32*4+1])),c=new Float64Array(n).map((t=>l[t%32*4+2])),i=new Float64Array(n).map((t=>l[t%32*4+3]));return function(t,l,f,u){let w,y,A,m,F;const h=(t+l+f+u)*e,p=o(t+h),M=o(l+h),q=o(f+h),d=o(u+h),x=(p+M+q+d)*r,U=t-(p-x),b=l-(M-x),g=f-(q-x),j=u-(d-x);let k=0,v=0,z=0,B=0;U>b?k++:v++,U>g?k++:z++,U>j?k++:B++,b>g?v++:z++,b>j?v++:B++,g>j?z++:B++;const C=k>=3?1:0,D=v>=3?1:0,E=z>=3?1:0,G=B>=3?1:0,H=k>=2?1:0,I=v>=2?1:0,J=z>=2?1:0,K=B>=2?1:0,L=k>=1?1:0,N=v>=1?1:0,O=z>=1?1:0,P=B>=1?1:0,Q=U-C+r,R=b-D+r,S=g-E+r,T=j-G+r,V=U-H+2*r,W=b-I+2*r,X=g-J+2*r,Y=j-K+2*r,Z=U-L+3*r,$=b-N+3*r,_=g-O+3*r,tt=j-P+3*r,nt=U-1+4*r,et=b-1+4*r,rt=g-1+4*r,ot=j-1+4*r,at=255&p,lt=255&M,st=255&q,ct=255&d;let ft=.6-U*U-b*b-g*g-j*j;if(ft<0)w=0;else{const t=at+n[lt+n[st+n[ct]]];ft*=ft,w=ft*ft*(a[t]*U+s[t]*b+c[t]*g+i[t]*j)}let it=.6-Q*Q-R*R-S*S-T*T;if(it<0)y=0;else{const t=at+C+n[lt+D+n[st+E+n[ct+G]]];it*=it,y=it*it*(a[t]*Q+s[t]*R+c[t]*S+i[t]*T)}let ut=.6-V*V-W*W-X*X-Y*Y;if(ut<0)A=0;else{const t=at+H+n[lt+I+n[st+J+n[ct+K]]];ut*=ut,A=ut*ut*(a[t]*V+s[t]*W+c[t]*X+i[t]*Y)}let wt=.6-Z*Z-$*$-_*_-tt*tt;if(wt<0)m=0;else{const t=at+L+n[lt+N+n[st+O+n[ct+P]]];wt*=wt,m=wt*wt*(a[t]*Z+s[t]*$+c[t]*_+i[t]*tt)}let yt=.6-nt*nt-et*et-rt*rt-ot*ot;if(yt<0)F=0;else{const t=at+1+n[lt+1+n[st+1+n[ct+1]]];yt*=yt,F=yt*yt*(a[t]*nt+s[t]*et+c[t]*rt+i[t]*ot)}return 27*(w+y+A+m+F)}}function f(t){const n=512,e=new Uint8Array(n);for(let r=0;r<256;r++)e[r]=r;for(let r=0;r<255;r++){const n=r+~~(t()*(256-r)),o=e[r];e[r]=e[n],e[n]=o}for(let r=256;r<n;r++)e[r]=e[r-256];return e}export{s as a,c};