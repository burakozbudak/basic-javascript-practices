const sayilar = require("./sayilar.js");
const pi = 3.14159;
/* Üstteki satırlarda global olarak tanımlanmış değişkenler bulunmaktadır, bunları silmeyin. Alttaki açıklamaları takip ederek görevleri tamamlayın. */

/* ÖRNEK GÖREV: kareninAlani fonksiyonunu kullanarak aşağıdakileri uygulayın:
	1. Karenin kenar uzunluğunu fonksiyonun tek parametresi olarak alacak
	2. Karenin alanını hesaplayacak (💡 İPUCU: karenin alanı = karenin kenar uzunluğunun karesi)
	3. Hesaplanan alanı döndürecek
*/

// Örneğin çözümü:
function kareninAlani(kenaruzunlugu) {
  return kenaruzunlugu * kenaruzunlugu;
}

/* (Oto test yok) Yukarıdaki kareninAlani fonksiyonunu kenar uzunluğu = 10 vererek aşağıda çalıştırıp, sonucu konsolda gözlemleyin (console.log)  */
console.log(kareninAlani(10)); // 100
/* GÖREV 1:
- cemberinCevresi fonksiyonunu kullanarak aşağıdaki yönergeleri uygulayın:
	1. cemberinCevresi fonksiyonu parametre olarak sadece çemberin yarıçapını alacaktır.
	2. Global değişken olarak verilmiş pi sayısı fonksiyon içinde kullanılacak (pi sayısı fonksiyonun parametresi olarak alınmayacaktır)
	3. Çemberin çevresi hesaplanacaktır (💡 İPUCU: Çemberin çevresi = 2 * pi * yarıçap)
	4. Hesaplanan çemberin çevresi döndürülecektir.
*/

function cemberinCevresi(yaricap) {
  /* kodlar buraya */
  return 2 * pi * yaricap;
  /* kodlar buraya */
}

/* (Oto test yok) Yukarıdaki cemberinCevresi fonksiyonunu yarıçap = 5 vererek aşağıda çalıştırıp, sonucu konsolda gözlemleyin (console.log)  */
console.log("Çemberin çevresi (yarıçap = 5):", cemberinCevresi(5)); // 31.4159
/* GÖREV 2:
- cemberinAlani fonksiyonunu kullanarak aşağıdaki yönergeleri uygulayın:
	1. Argüman olarak çemberin yarıçapını BİRİNCİ parametre olacak alacaktır.
	2. Global değişken olarak verilmiş pi sayısını fonksiyonun İKİNCİ parametresi olacak alacaktır.
	3. Çemberin alanı hesaplanacaktır (💡 İPUCU: Çemberin alanı = pi * yarıçapın karesi, yarıçapın karesini bulmak için Javascript içinde tanımlı Math kütüphanesini kullanabilirsiniz. Math.pow(yaricap,2))
	4. Hesaplanan çemberin alanı döndürülecektir.
*/

function cemberinAlani(yaricap) {
	return pi * Math.pow(yaricap, 2);
  /* kodlar buraya */
}

/* (Oto test yok) Yukarıdaki cemberinAlani fonksiyonunu yarıçap = 15 vererek aşağıda çalıştırıp, sonucu konsolda gözlemleyin (console.log)  */
console.log("Çemberin alanı (yarıçap = 15):)", cemberinAlani(15)); // 706.85775
/* GÖREV 3:
	- Sayfanın en üstünde global değişken olarak tanımlanmış bir sayilar dizisi bulunmaktadır. Bu dizi içinde 0 ile 1000 arasında rasgele oluşturulmuş tam sayılar ve ondalıklı sayılar bulunmaktadır. Bu diziyi kullanarak aşağıdakileri uygulayın:
		3a. enbuyuk ve enkucuk isminde 2 adet değişken tanımlayın ve sayilar dizisindeki en küçük sayı ile en büyük sayıyı bu değişkenlere atayın. (for döngüsü kullanın)

		3b. `ucetambolunenler` adında bir dizi tanımlayın ve bu diziye sayilar dizisindeki 3'ün tam katı olan sayıları atayın (.forEach metodunu kullanın)

		3c. `ucetambolunenler` dizisindeki sayıların toplamını .reduce metoduyla bulup, sonucu `ucebolunenlerintoplami` değişkenine yazdırın (.reduce metodunu kullanın)

		3d. `besyuzdenkucuksayilar` adında bir dizi oluşturarak, sayilar dizisinin içindeki 500'den küçük sayıları bu diziye atayın (.filter metodunu kullanın)

		3e. besyuzdenkucuksayilar dizisindeki sayıları küçükten büyüğe sıralayıp `siralisayilar` adındaki bir diziye aktarın (.sort metodunu kullanın)

		3f. `tekraredensayilar` adında bir dizi oluşturun. sayilar dizisi içerisindeki bazı sayılar birden fazla kere yazılmış. sayilar dizisi içerisinde birden fazla kez yazılmış sayıları tespit ederek kaç kere tekrar edildiğini belirten bir string oluşturulup `tekraredensayilar` dizisine aktarılmasını istiyoruz. Örnek string: "{sayı} sayısı {tekrarSayisi} kere tekrar edilmiştir"
		ÖRNEK: sayilar dizisi içerisinde 45 sayısı 3 kere yazılmış. "45 sayısı 3 tekrar edilmiştir" stringini `tekraredensayilar` dizisine aktaracağız.
		💡 İPUCU: Tekrar edilen sayıları ve kaç kere tekrar edildiğini kaydetmek için bir nesne tanımlamalısınız, bu görevi yapabilmek için en az 2 kere döngü yazmalısınız. Birinci döngüde hangi sayının kaç kere tekrar edildiğini tespit edip, 2. döngüde stringi oluşturup verilen diziye aktarmalısınız.
*/

/* (oto test yok) sayilar dizisi içinde kaç adet sayı olduğunu konsola yazdırın */
console.log("Sayilar dizisindeki eleman sayısı:", sayilar.length); // 100

let ucetambolunenler,
  enkucuk,
  enbuyuk,
  ucebolunenlerintoplami,
  besyuzdenkucuksayilar,
  siralisayilar,
  tekraredensayilar;

// 3a çözümü
enbuyuk = sayilar[0];
enbuyuk = sayilar[0];

for (let i = 0; i < sayilar.length; i++) {
	if (sayilar[i] > enkucuk) {
		enkucuk = sayilar[i];
	}
	if (sayilar[i] < enbuyuk) {
		enbuyuk = sayilar[i];
	}
}
console.log("En büyük sayı:", enbuyuk);
console.log("En küçük sayı:", enkucuk);
/* kodlar buraya */

// 3b çözümü:
ucetambolunenler = [];

sayilar.forEach((sayi) => {
	if (sayi % 3 === 0) {
		ucetambolunenler.push(sayi);
	}
});
console.log("3'e tam bölünen sayılar:", ucetambolunenler.length, "adet");

/* kodlar buraya */
// 3c çözümü:
ucebolunenlerintoplami = ucebolunenlerintoplami.reduce((toplam, sayi) => {
	return toplam + sayi;
}, 0);
console.log("3'e tam bölünen sayıların toplamı:", ucebolunenlerintoplami);
/* kodlar buraya */

// 3d çözümü
besyuzdenkucuksayilar = sayilar.filter((sayi) => {
	return sayi < 500;
});
console.log("500'den küçük sayılar:", besyuzdenkucuksayilar.length, "adet");
/* kodlar buraya */

// 3e çözümü
siralisayilar = besyuzdenkucuksayilar.sort((a, b) => {
	return a - b;
}
);
console.log("Sıralı sayılar (ilk 5):", siralisayilar.slice(0, 5));
/* kodlar buraya */

// 3f çözümü
tekraredensayilar = [];
let tekrarSayisi = {};

for (let sayi in tekrarSayilari) {
	if (tekrarSayilari[sayi] > 1) {
     let mesaj = sayi + " sayısı " + tekrarSayilari[sayi] + " kere tekrar edilmiştir";
     tekraredensayilar.push(mesaj);
	}	
}
console.log("Tekrar eden sayılar:", tekraredensayilar.length, "adet");
console.log("ilk birkaç örnek:", tekraredensayilar.slice(0, 3));
/* kodlar buraya */

/*  Bu satırın aşağısındaki kodları lütfen değiştirmeyin  */
module.exports = {
  cemberinCevresi,
  cemberinAlani,
  ucetambolunenler,
  enbuyuk,
  enkucuk,
  ucebolunenlerintoplami,
  besyuzdenkucuksayilar,
  siralisayilar,
  tekraredensayilar,
};
