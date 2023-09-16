export interface PageTexts {
  detailText: string;
  pageText: string;
  text1: string;
  text2: string;
}

const pageTexts: Record<string, PageTexts> = {
  '/portfolio': {
    detailText: 'PORTFOLIO',
    pageText: 'PRIMJERI',
    text1: `Prepustite profesionalnoj ekipi da Vam uradi foto i video
      uspomene za cijeli život. Ne prepustite posebne prilike slučaju...`,
    text2: 'Za više fotografija i primjere videa pišite nam."',
  },
  '/private': {
    detailText: 'IZABERITE VAŠ ALBUM',
    pageText: 'ALBUMI',
    text1: `Albumi su zaključani zbog privatnosti. Molimo Vas da 
    kontaktirate osobe koje su nas angažovale da dobijete pristupni 
    kod/lozinku.`,
    text2: 'Uživajte u fotografijama i videu.',
  },
  '/services': {
    detailText: 'PONUDA',
    pageText: 'USLUGE',
    text1: `Vjenčanje ili neka druga proslava je jedan od najbitnijih
      događaja u životu, sa bezbroj romantičnih momenata, koje žele da
      sačuvaju zauvjek i profesionalci naše ekipe uvjek imaju to u vidu.
      Naše kamere, fotoaparati i dron su baš zbog toga tu da ovjekovječe
      Vaše najsrećnije momente.`,
    text2: `Ukoliko je Vaš izbor “Foto Miškić”, treba da znate da ste
      donijeli pravu odluku, jer samo kod nas dobijate: profesionalni
      odnos, najbolje fotografije i video snimak, poštovanje dogovora,
      rokova i vremena.`,
  },
  '/contact': {
    detailText: 'AKO IMATE PITANJA',
    pageText: 'PIŠITE NAM',
    text1: `Foto Miškić je studio za foto i video produkciju,
      specijalizovan za vjenčanja i druge svečane prilike. Dugogodišnja
      tradicija garantuje da će Vaše uspomene zauvjek ostati sačuvane u
      obliku koji zaslužuju, jer - znamo koliko Vam to znači!`,
    text2: 'Naše uspomene ne blijede...',
  },
  '/wooden-boxes': {
    detailText: 'DRVENE',
    pageText: 'KUTIJE',
    text1: `Drvena kutija sa graviranjem Vaših imena u kojoj se nalzi
    USB i Blu Ray disk ili USB sa foto i video materijalom.`,
    text2:
      'Dostupno par modela kao i nekoliko boja (plava, crna, smeđa i bordo).',
  },
  '/photo-card': {
    detailText: 'FOTO',
    pageText: 'ZAHVALNICE',
    text1: `Želite li pokloniti nešto praktično gostima na vjenčanju ili 
    krštenju ili na nekom drugom događaju! Zahvalnica je nešto što će ostati 
    zapamćeno, posebno ako odaberete dobar dizajn.`,
    text2: `Poklon za važne zvanice koji će vratiti osmijeh na lice svaki put kada 
      je gosti pogledaju i sjećanje na taj dan.`,
  },
};

export function getPageTexts(pathname: string): PageTexts {
  return (
    pageTexts[pathname] || {
      detailText: '',
      pageText: '',
      text1: '',
      text2: '',
    }
  );
}
