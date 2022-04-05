# Türk Bayrağı
[Resmi tüzüğe uygun](https://www.mevzuat.gov.tr/MevzuatMetin/2.5.859034.pdf) Türk bayrağı çizimidir.

![Türk Bayrağı](./tr.svg)

Internette dolaşan SVG bayraklardan farklı olarak burada `<rect>`, `<circle>`, `<polygon>` kullanılarak çizim yapılmıştır.
Bu sayede tüzüğe uygun olup olmadığını parametreleri kontrol ederek teyit edebilirsiniz.

Piyasada dolaşan SVG bayraklar fotoğraftan (*raster image*) devşirmedir, `<path>` kullanarak çizim yapar.
Bunlarda tüzüğe uygunluğu kontrol etmek pratik olarak mümkün değildir.

## Anlatım
Tüzüğün 4. maddesinde teknik detaylar belirtilmiştir. Buna göre ayı çizmek çok kolaydır.
`en=240` için çizim (uçkur hariç) aşağıda gösterilmiştir.

<table role="table">
<tr><td>
    
```svg
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 360 240">
  <rect width="100%" height="100%" fill="rgb(227,10,23)" />
  <circle cx="120" cy="50%" r="60" fill="white" />
  <circle cx="135" cy="50%" r="48" fill="rgb(227,10,23)" />
</svg>
```
</td><td>

![Ay](./ay.svg)
</td></tr>
  <tr>
    <td>boy = 360</td><td>bayrak eninin 1,5 katıdır</td>
  </tr>
  <tr>
    <td>ay dış çember merkezinin x koordinatı = 120</td><td>uçkurun iç kenarından bayrak eninin yarısı uzaklıktadır</td>
  </tr>
  <tr>
    <td>ay dış çember merkezinin y koordinatı = 120 veya 50%</td><td>eksen üzerindedir</td>
  </tr>
  <tr>
    <td>ay dış çemberinin yarıçapı = 60</td><td>çapı bayrak eninin yarısıdır</td>
  </tr>
  <tr>
    <td>ay iç çember merkezinin x koordinatı = 120+15 = 135</td><td>dış çember merkezinden bayrak eninin 0,0625 katı uzaklıktadır</td>
  </tr>
  <tr>
    <td>ay iç çember merkezinin y koordinatı = 120 veya 50%</td><td>eksen üzerindedir</td>
  </tr>
  <tr>
    <td>ay iç çemberinin yarıçapı = 48</td><td>çapı bayrak eninin onda dördüdür</td>
  </tr>
</table>


Tüzükte yıldız çember merkezi tarif edilmemiştir, ancak yıldız çemberinin uçkur yönünde ekseni kesen noktası tanımlanmıştır.
Bu nokta ayın iki ucundan geçtiği farzedilen düşey doğrunun ekseni kestiği yerdir,
ve iç çemberin uçkur yönünde ekseni kesen noktasından bayrak eninin üçte biri uzaklıktadır.
Bu noktanın üzerine yıldız çemberi yarıçapı kadar daha eklersek yıldız merkezini bulmuş oluruz.
Bu hesapla bulunan yıldız çemberi aşağıda kırmızıyla gösterilmiştir.

<table role="table">
<tr><td colspan="2">

![Şema](./sema.svg)
</td></tr>
    <tr>
        <td>Ayın iki ucundan geçen doğrunun ekseni kesen noktasının x koordinatı = 135-48+80 = 167</td>
        <td>iç çemberin uçkur yönünde ekseni kesen noktasından bayrak eninin üçte biri uzaklıktadır</td>
    </tr>
    <tr>
        <td>Yıldız çember merkezinin x koordinatı = 167+30 = 197</td>
        <td>Yıldız çemberinin çapı bayrak eninin dörtte biridir</td>
    </tr>
</table>


Yukarıdaki şemada ay uçlarından geçmesi gereken düşey çizginin tam olarak uçlarda olmayıp biraz içeride kaldığı görülmektedir.
Yani bu çizginin sağ tarafında aya ait hiçbir parça görülmemesi gerekirken parçalar bu şemada görülmektedir ve çizilen yıldızın ay içine
biraz girmesine sebep olmaktadır. Bu, SVG motorunun bir hatası olabilir veya başka nedenlerle oluşabilir, ancak sonuçta hatadır.
Bu çizginin **uçkur genişliğinin yarısı** kadar daha sağa alınması bu hatanın giderilmesini sağlamaktadır.
Uçkur genişliği bayrak eninin otuzda biri olduğuna göre eklenecek miktar 240/60 = 4 olur. Yıldız çember merkezinin x koordinatı 201 olur.
Bu durum aşağıdaki tabloda net olarak görülmektedir.

<table role="table">
<tr><td>

![Cizim1](./sema.svg)
</td></tr>
</table>

asdasdasd
