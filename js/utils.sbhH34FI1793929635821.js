function a(r,i=!0){r.traverse(t=>{t.isSprite&&(i?t.material.rotation=(t.material.rotation||0)+Math.PI:t.material.rotation=t.material.rotation-Math.PI)})}export{a as fixSpritesForMirror};
