# Solid ICT Frontend Case

Bu proje, iş başvurusu için geliştirilen bir case projesidir. Bu README dosyası, projenin genel yapısını, kullanılan teknolojiler ve projeyi çalıştırma adımlarını içerir.

## Kullanılan Teknolojiler

Bu projede aşağıdaki teknolojiler kullanılmıştır:

- ReactJs
- Redux-toolkit
- React-router-dom
- Axios
- TailwindCSS
- React Pagination
- React Toastify
- Framer Motion
- React i18n

# Projeyi Nasıl Geliştirdim

Bu projede istenilen tum teknolojileri kullandım ekstra olarak sorting ve filtering işlemleri ekleyerek ekstra fonksiyonellik kattım. projeyi ReactJs ve ReduxToolkit kullanılarak geliştirdim. Aşağıda projenin geliştirilme sürecinde kullandıgım yöntemler ve teknolojiler hakkında detaylı bilgiler bulunmaktadır:

- projede mock data olarak https://5fc9346b2af77700165ae514.mockapi.io/ url'ini kullandım.
- Projeyi "ReactJs" ile geliştirdim.
- Projenin tum parçaları aktif olarak çalısmakta(sorting/ filtering/search filtering /localstorage products / total price etc. )
- Projeyi tekrar olçeklenebilir hale getirdim. Layout sistemini entegre ettim. Mimari değiştirmeden büyütülebilir ve esnek bir yapıya sahip. Farklı modallar, bileşenler vb. esnek bir şekilde entegre edilebilir ve tekrar kullanılabilir.
- Veri alışverişi işlemleri için "Redux-toolkit" ve "props" 'lar kullandım.
- "Redux" yapısını moduler olarak kurdum. boylelikle olceklenebilir olarak bir başkası kodun uzerinden rahatlıkla devam edebilir. 
- Servis istekleri bir "base_url" ile api klasorunden atılıyor. buraya bir interceptor dahil edilebilirdi ancak gerek duymadım.
- İstekler için "Axios" kütüphanesi kullandım.
- Tum Style Islemleri "TailwindCSS" ile yaptım. 
- Projenin tamamını "Tailwind CSS" ile yazdım. sadece active class için custom css yazdım. Zaman kazanmak amacıyla bu tercihi yaptım.
- projede Toast notification kullandım boylelikle daha iyi bir kullanıcı deneyimi sundum.
- projede tum productlar'ı "framer motion" ile beraber akışkan bir şekilde listeledim.
- projede "tailwind" ile beraber "dark-light mode" entegre ettim. kolaylıkla tema değiştirilebilir.
- dil kutuphanesi için "i18" kullandım 2 dil desteklemekte(turkce/ingilizce). dil dosyası kendi içinde parçalara boldum(header/body olarak) boylelikle okunabilirliği kolaylaştırdım.



# Projede olan eksiklikler

- Reducers parçalara bolunebilirdi.
- api ve BASE_URL için .env kullanılması daha saglıklı olurdu.

## Nasıl Çalıştırılır?

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. Öncelikle, projeyi klonlayın veya zip olarak indirin:
2. Projeyi Localinizdedaha Saglıklı kullanmak için nodejs'in 16. surumunu kullanmanız faydalı olacaktır bazı dependency'ler için.
3. sonrasında aşağıdaki adımları takip edin.

```bash
git clone <proje-git-url>

npm install

npm run start
```
