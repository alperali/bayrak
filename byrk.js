onload = () => {    
    const celm = (e) => document.createElementNS('http://www.w3.org/2000/svg', e);
    const en = 240, kırmızı = "rgb(227,10,23)";
    const s = document.querySelector('svg');
    const boy = en * 1.5,
          ay_dış_çember_x = en/2,
          ay_dış_çember_y = en/2,
          ay_dış_çember_yçap = en/4,
          ay_iç_çember_x = ay_dış_çember_x + en/16,   // 0.0625 == 1/16
          ay_iç_çember_y = en/2,
          ay_iç_çember_yçap = en/5,
          yıldız_yçap = en/8,
          // aşağıdaki en/60 == uçkur genişliğinin yarısı
          yıldız_çember_x = ay_iç_çember_x - ay_iç_çember_yçap + en/3 + en/60 + yıldız_yçap,

          // yıldız köşelerinin koordinatları, saat yönünde
          köşeler = [
            {x: yıldız_çember_x - yıldız_yçap, y: en/2},  // ekseni kesen yıldız köşesi
            {x: yıldız_çember_x - Math.cos(2*Math.PI/5)*yıldız_yçap, y: en/2 - Math.sin(2*Math.PI/5)*yıldız_yçap},
            {x: yıldız_çember_x + Math.cos(Math.PI/5)*yıldız_yçap, y: en/2 - Math.sin(Math.PI/5)*yıldız_yçap},
            {x: yıldız_çember_x + Math.cos(Math.PI/5)*yıldız_yçap, y: en/2 + Math.sin(Math.PI/5)*yıldız_yçap},
            {x: yıldız_çember_x - Math.cos(2*Math.PI/5)*yıldız_yçap, y: en/2 + Math.sin(2*Math.PI/5)*yıldız_yçap}
          ];

    s.setAttribute('viewBox', `0 0 ${boy} ${en}`);  // tüzükte kısa kenara en denildiği için ters yazıldı
    document.querySelector('rect').setAttribute('fill', `${kırmızı}`);

    // ayın çizimi
    const dış = celm('circle');
    dış.setAttribute('cx', `${ay_dış_çember_x}`);
    dış.setAttribute('cy', `${ay_dış_çember_y}`);
    dış.setAttribute('r', `${ay_dış_çember_yçap}`);
    dış.setAttribute('fill', 'white');
    s.appendChild(dış);
    const iç = celm('circle');
    iç.setAttribute('cx', `${ay_iç_çember_x}`);
    iç.setAttribute('cy', `${ay_iç_çember_y}`);
    iç.setAttribute('r', `${ay_iç_çember_yçap}`);
    iç.setAttribute('fill', `${kırmızı}`);
    s.appendChild(iç);

    // yıldızın çizimi
    const yldz = celm('polygon');
    yldz.setAttribute('points',
      `${köşeler[0].x},${köşeler[0].y}`.concat(
      ` ${köşeler[2].x},${köşeler[2].y}`,
      ` ${köşeler[4].x},${köşeler[4].y}`,
      ` ${köşeler[1].x},${köşeler[1].y}`,
      ` ${köşeler[3].x},${köşeler[3].y}`)
    );
    yldz.setAttribute('fill', 'white');
    s.appendChild(yldz);
}