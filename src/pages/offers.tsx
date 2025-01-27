import React, { useState, useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import "../styles/global.scss";
import styled, { keyframes } from "styled-components";
//@ts-ignore
import offerBackground from "../images/offers_elements/background.png";
//@ts-ignore
import movingGear from "../images/offers_elements/zebatka_ruchoma.png";
//@ts-ignore
import gearBackground from "../images/offers_elements/zebatki_tlo.png";

function importAll(r: any) {
    return r.keys().map(r);
}
const logos = importAll(
    require.context("../images/offers", false, /\.(png|jpe?g|svg)$/)
);

const sponsorsData = [
    {
        id: 1,
        name: 'IBM',
        img: 0,
        jobOffers: [
            {
                id: 1,
                company_name: 'IBM',
                position: 'Python Engineer - Programista Python',
                type: 'hybrydowa',
                lease: 'Umowa o pracę',
                location: 'Kraków',
                job: 'Pełny etat',
                description: 'IBM to firma technologiczna obecna w ponad 170 krajach. Jesteśmy pionierami w rewolucyjnych rozwiązaniach biznesowych i technologicznych, takich jak usługi chmurowe, sztuczna inteligencja, analiza danych. Nasza siła tkwi w pracownikach, których zachęcamy do poszerzania wiedzy i ciekawości, otwierając nowe perspektywy na świat. <br> Dołącz do naszego zespołu na stanowisku Programista Python i pomóż nam w tworzeniu i rozwijaniu produktów IBM, wykorzystując najnowocześniejsze technologie i najwyższe standardy inżynierskie. <br> Miej swój wkład w zakresie projektowania, kodowania, testowania i dostarczania wiodących w branży rozwiązań, które sprawiają, że dzisiejszy świat działa - samoloty i pociągi są o czasie, transakcje bankowe są realizowane w mgnieniu oka, a cyfrowy świat pozostaje bezpieczny. <br> W IBM będziesz współpracować z czołowymi umysłami w branży, aby tworzyć rozwiązania, z których możesz być dumny.',
                requirements: 'Dobra znajomość i doświadczenie w programowaniu w języku Python.<br> Pasja do technologii i rozwoju oprogramowania.<br> Silne umiejętności techniczne i krytycznego myślenia.<br> Dobra współpraca i komunikacja - praca z zespołami z całego świata.<br> Silne umiejętności pracy zespołowej.<br> Entuzjazm oraz zdolność do samodzielnej pracy i poszukiwania potencjalnych rozwiązań problemów.<br> Wykazywanie się umiejętnościami analitycznymi. ',
                duties: 'Zbieranie wymagań, projektowanie i przegląd techniczny, wspierające realizację celów biznesowych w projekcie. <br> Uczestniczenie we wdrażaniu zaawansowanych systemów oprogramowania z naciskiem na programowanie w języku Python, Java i React. <br> Udział w przeglądach kodu. Przeglądy obejmują innych inżynierów oprogramowania i są przeprowadzane w celu zapewnienia wysokiego poziomu jakości programowania oraz dzielenia się wiedzą z członkami zespołu. <br> Przestrzeganie praktyk inżynierii oprogramowania przy użyciu takich narzędzi i metodologii jak Agile.',
                company_offer: 'Pracę w firmie IT z pierwszej piątki najlepszych pracodawców według rankingu Forbes 2022. <br> Szeroki zakres szkoleń i certyfikatów IBM. <br> Nielimitowany dostęp do Udemy, Harvard Business Review, Safari O\'Reilly, getAbstract, IBM AI Skills Academy. <br> Konkurencyjne wynagrodzenie uzależnione od umiejętności i doświadczenia. <br> Możliwość ubiegania się o 50% koszty uzyskania przychodu na prace kreatywne R&D. <br> Prywatna opieka medyczna i ubezpieczenie na życie. <br> Program pomocy dla pracowników. <br> Grupy sportowe, charytatywne i networkingowe. <br> Zniżki z identyfikatorem pracownika IBM. <br> Program premii za polecenie.',
                payment: '',
                contact: 'https://ibm.biz/startyourcareer',
            },
            {
                id: 2,
                company_name: 'IBM',
                position: 'Java Software Developer - Programista Java',
                type: 'hybrydowa',
                lease: 'Umowa o pracę',
                location: 'Kraków',
                job: 'Pełny etat',
                description: 'IBM to firma technologiczna obecna w ponad 170 krajach. Jesteśmy pionierami w rewolucyjnych rozwiązaniach biznesowych i technologicznych, takich jak usługi chmurowe, sztuczna inteligencja, analiza danych. Nasza siła tkwi w pracownikach, których zachęcamy do poszerzania wiedzy i ciekawości, otwierając nowe perspektywy na świat. <br> Dołącz do naszego zespołu na stanowisku Programista Python i pomóż nam w tworzeniu i rozwijaniu produktów IBM, wykorzystując najnowocześniejsze technologie i najwyższe standardy inżynierskie. <br> Miej swój wkład w zakresie projektowania, kodowania, testowania i dostarczania wiodących w branży rozwiązań, które sprawiają, że dzisiejszy świat działa - samoloty i pociągi są o czasie, transakcje bankowe są realizowane w mgnieniu oka, a cyfrowy świat pozostaje bezpieczny. <br> W IBM będziesz współpracować z czołowymi umysłami w branży, aby tworzyć rozwiązania, z których możesz być dumny.',
                requirements: 'Chętnie się uczysz, o czym świadczy Twoja wiedza i doświadczenie w Javie. <br> Masz zrozumienie i praktyczną znajomość architektury mikrousług. <br> Masz doświadczenie w pisaniu / wykonywaniu testów jednostkowych i automatyzacji REST API. <br> Jesteś graczem zespołowym i znasz metodologie Agile i/lub masz doświadczenie w pracy w zespole SCRUM. <br> Interesuje Cię nowa technologia i rozwój oprogramowania. <br> Posiadasz umiejętności techniczne i krytycznego myślenia. <br> Cechuje Cię entuzjazm oraz zdolność do samodzielnej pracy i poszukiwania rozwiązań problemów.',
                duties: 'Będziesz programistą Java, który wraz ze swoim zespołem będzie projektował, rozwijał i/lub przeprojektowywał złożone komponenty produktów oraz integrował pakiety oprogramowania, programy i obiekty wielokrotnego użytku rezydujące na wielu platformach. <br> Poszukujemy kandydata, który będzie się dobrze rozwijał w otwartym, dynamicznym, elastycznym, zabawnym i opartym na współpracy środowisku. Osoby, która pragnie swobody twórczej i możliwości pracy w fajnym i zgranym zespole.',
                company_offer: 'Pracę w firmie IT z pierwszej piątki najlepszych pracodawców według rankingu Forbes 2022. <br> Szeroki zakres szkoleń i certyfikatów IBM. <br> Nielimitowany dostęp do Udemy, Harvard Business Review, Safari O\'Reilly, getAbstract, IBM AI Skills Academy. <br> Konkurencyjne wynagrodzenie uzależnione od umiejętności i doświadczenia. <br> Możliwość ubiegania się o 50% koszty uzyskania przychodu na prace kreatywne R&D. <br> Prywatna opieka medyczna i ubezpieczenie na życie. <br> Program pomocy dla pracowników. <br> Grupy sportowe, charytatywne i networkingowe. <br> Zniżki z identyfikatorem pracownika IBM. <br> Program premii za polecenie.',
                payment: '',
                contact: 'https://ibm.biz/startyourcareer',
            },
            {
                id: 3,
                company_name: 'IBM',
                position: 'QA Engineer - Inżynier Jakości Oprogramowania',
                type: 'hybrydowa',
                lease: 'Umowa o pracę',
                location: 'Kraków',
                job: 'Pełny etat',
                description: 'IBM to firma technologiczna obecna w ponad 170 krajach. Jesteśmy pionierami w rewolucyjnych rozwiązaniach biznesowych i technologicznych, takich jak usługi chmurowe, sztuczna inteligencja, analiza danych. Nasza siła tkwi w pracownikach, których zachęcamy do poszerzania wiedzy i ciekawości, otwierając nowe perspektywy na świat. <br> Dołącz do naszego zespołu na stanowisku Programista Python i pomóż nam w tworzeniu i rozwijaniu produktów IBM, wykorzystując najnowocześniejsze technologie i najwyższe standardy inżynierskie. <br> Miej swój wkład w zakresie projektowania, kodowania, testowania i dostarczania wiodących w branży rozwiązań, które sprawiają, że dzisiejszy świat działa - samoloty i pociągi są o czasie, transakcje bankowe są realizowane w mgnieniu oka, a cyfrowy świat pozostaje bezpieczny. <br> W IBM będziesz współpracować z czołowymi umysłami w branży, aby tworzyć rozwiązania, z których możesz być dumny.',
                requirements: 'Zrozumienie zautomatyzowanej inżynierii jakości, tworzenia oprogramowania, automatyzacji testów. <br> Doświadczenie w tworzeniu oprogramowania w języku Java. <br> Komfortowa obsługa protoków CI/CD i systemów SCM (Jenkins, Github). <br> Ekspozycja na frameworki testowe, takie jak JUnit, JMeter, Selenium. <br> Cechuje Cię entuzjazm oraz zdolność do samodzielnej pracy i poszukiwania rozwiązań problemów.',
                duties: 'Jako QA Engineer będziesz uczestniczyć w projektowaniu i rozwijaniu komponentów oraz funkcji produktów IBM. Poszukujemy inżyniera do opracowywania i wykonywania testów eksploracyjnych i automatycznych w celu zapewnienia jakości produktu. <br> Poszukujemy osoby, która czuje się komfortowo w przeprowadzaniu testów w metodologii Agile.',
                company_offer: 'Pracę w firmie IT z pierwszej piątki najlepszych pracodawców według rankingu Forbes 2022. <br> Szeroki zakres szkoleń i certyfikatów IBM. <br> Nielimitowany dostęp do Udemy, Harvard Business Review, Safari O\'Reilly, getAbstract, IBM AI Skills Academy. <br> Konkurencyjne wynagrodzenie uzależnione od umiejętności i doświadczenia. <br> Możliwość ubiegania się o 50% koszty uzyskania przychodu na prace kreatywne R&D. <br> Prywatna opieka medyczna i ubezpieczenie na życie. <br> Program pomocy dla pracowników. <br> Grupy sportowe, charytatywne i networkingowe. <br> Zniżki z identyfikatorem pracownika IBM. <br> Program premii za polecenie.',
                payment: '',
                contact: 'https://ibm.biz/startyourcareer',
            },
        ]
    },
    {
        id: 2,
        name: 'MARS',
        img: 1,
        jobOffers: [
            {
                id: 4,
                company_name: 'MARS',
                position: 'Program Menedżerski w Inżynierii',
                type: 'hybrydowa',
                lease: 'Umowa o pracę na czas nieokreślony',
                location: 'Sochaczew',
                job: '40',
                description: 'Mars Engineering Leadership Experience to: <br> 3-letni, międzynarodowy program, w trakcie którego będziesz pełnić odpowiedzialne funkcje na trzech różnych stanowiskach z obszaru inżynieryjnego;<br><br> Trzy lata, trzy różne, roczne role. Lubimy zapewniać naszym Współpracownikom swobodę działania, dlatego od momentu dołączenia do Mars będziesz odpowiadać za zarządzanie swoim projektem.<br><br> Rok 1 programu to kierowanie własnym projektem <br><br> Rok 2 to projekt realizowany zagranicą  <br><br> Rok 3 to zarządzanie własnym zespołem <br><br> Każdy z rocznych projektów będzie wyzwaniem mającym na celu zwiększenie Twojej wiedzy i ekspertyzy w takich dziedzinach jak robotyka, zaawansowana technologia produkcji czy szybkość i wydajność maszyn oraz przywództwo;<br><br> Każdy projekt będzie dostosowany do Twojej indywidualnej ścieżki rozwoju, dzięki czemu zdobędziesz imponujące doświadczenie, które nada tempa Twojej karierze jako lidera/ liderki w dziedzinie technicznej. ',
                requirements: 'Poszukujemy osób, które chcą poszerzać kompetencje w zakresie doskonałego przywództwa, równocześnie rozwijając swoją wiedzę inżynieryjną. Musisz mieć pasję do zarządzania ludźmi i projektami oraz zamiłowanie do techniki, a do tego: <br> 1. Kończyć lub mieć ukończone studia magisterskie o profilu technicznym – preferowany obszar to Inżynieria Mechaniczna, Elektrotechnika lub Inżynieria Chemiczna/Procesowa  <br> 2. Biegle mówić po polsku i angielsku<br> 3. Wykazywać się gotowością do międzynarodowej mobilności<br> 4. Posiadać aspiracje do objęcia roli menedżerskiej w zespole',
                duties: 'Mars Engineering Leadership Experience to program przyspieszonego rozwoju kariery, w ramach którego podczas trzech, rocznych projektów, w Polsce i zagranicą, rozwiniesz umiejętności techniczne i przywódcze. Będziesz doskonalić nasze marki i/lub współtworzyć nowe, a jednocześnie zdobywać wiedzę i kompetencje zarówno twarde, jak i miękkie. <br> W ramach programu rozwoju obszaru inżynieryjnego będziesz mieć realny wpływ na tworzenie sukcesu naszej firmy. Przed Tobą poszukiwanie nowych rozwiązań, promowanie innowacyjnych pomysłów oraz kierowanie kompleksowymi projektami technicznymi w całej Europie.',
                company_offer: 'System premiowy uzależniony od wyników indywidualnych i biznesowych. <br> Benefity, takie jak: najlepsza opiekę medyczna, dofinanasowanie karty sportowej i wydarzeń kulturalnych, ubezpieczenie na życie.<br> Wsparcie doświadczonego mentora, coacha, trenerów i menedżerów. <br> Wsparcie w rozwoju kluczowych kompetencji w postaci cyklu szkoleń, w ramach dedykowenego programu Learning&Development, który pomoże Ci rozwinąć umiejętności niezbędne do tego, by stać się jednym z naszych przyszłych liderów lub liderek. <br> Jeśli dołączenie na Program wymaga od Ciebie relokacji – oferujemy bonus relokacyjny.',
                payment: '9100zł brutto',
                contact: 'karolina.chojnacka@effem.com',
            },
            {
                id: 5,
                company_name: 'MARS',
                position: 'Program Menedżerski w obszarze Produkcji',
                type: 'hybrydowa',
                lease: 'Umowa o pracę na czas nieokreślony',
                location: 'Sochaczew i Poznań',
                job: '40',
                description: 'Mars Supply Chain Leadership Experience to: <br> 3-letni program, w trakcie którego będziesz pełnić odpowiedzialne funkcje na trzech różnych stanowiskach z obszaru Produkcji; <br> Trzy lata, trzy różne, roczne role. Lubimy zapewniać naszym Współpracownikom swobodę działania, dlatego od momentu dołączenia do Mars będziesz zarządzać własnym projektem; <br> Każdy z rocznych projektów będzie wyzwaniem mającym na celu zwiększenie Twojej wiedzy i ekspertyzy oraz rozwój umiejętności przywódczych; <br> Każdy projekt będzie dostosowany do Twojej osobistej ścieżki rozwoju, dzięki czemu zdobędziesz imponujące doświadczenie, które nada tempa Twojej karierze jako lidera w dziedzinie Supply Chain.',
                requirements: 'Poszukujemy osób, które chcą poszerzać kompetencje przywódcze, równocześnie rozwijając swoją wiedzę techniczną. Musisz mieć pasję do zarządzania ludźmi i projektami oraz zamiłowanie do obszaru Supply Chain, a do tego: <br> Posiadać maksymalnie do 5 lat doświadczenia zawodowego (doświadczenie zdobywane w trakcie studiów jak najbardziej się wlicza!) <br> Biegle mówić po polsku i angielsku <br> Posiadać aspiracje do objęcia roli menedżerskiej w obszarze Supply Chain <br> Być osobą mobilną – gotową na rekolację w ramach kolejnych rotacji.',
                duties: 'W ramach programu rozwoju liderów i liderek obszaru Produkcji – Mars Supply Chain Leadership Experience, będziesz współtworzyć sukces naszej firmy. Przed Tobą poszukiwanie nowych rozwiązań technicznych, promowanie innowacyjnych pomysłów oraz kierowanie kompleksowymi projektami technicznymi z obszaru Supply Chain – od Planowania Produkcji, przez Logistykę, po Operacje. ',
                company_offer: 'System premiowy uzależniony od wyników indywidualnych i biznesowych. <br> Benefity, takie jak: najlepsza opiekę medyczna, dofinanasowanie karty sportowej i wydarzeń kulturalnych, ubezpieczenie na życie. <br> Wsparcie doświadczonego mentora, coacha, trenerów i menedżerów. <br> Wsparcie w rozwoju kluczowych kompetencji w postaci cyklu szkoleń, w ramach dedykowenego programu Learning&Development, który pomoże Ci rozwinąć umiejętności niezbędne do tego, by stać się jednym z naszych przyszłych liderów lub liderek. <br> Jeśli dołączenie na Program wymaga od Ciebie relokacji – oferujemy bonus relokacyjny.',
                payment: '9100zł brutto',
                contact: 'karolina.chojnacka@effem.com',
            },
            {
                id: 6,
                company_name: 'MARS',
                position: 'Program Menedżerski w obszarze Finansów',
                type: 'hybrydowa',
                lease: 'Umowa o pracę na czas nieokreślony',
                location: 'Warszawa',
                job: '40',
                description: 'Mars Finance Leadership Experience (MFLE), czyli program przyspieszonego rozwoju kariery w obszarze finansów, to świetny początek. Program został stworzony, aby kształcić przyszłych liderów i liderki. Po trzech latach będziesz wszechstronnym partnerem biznesowym. Możesz zostać menadżerem, zarządzać zespołem lub realizować się jako indywidualny kontrybutor na strategicznej pozycji.  Absolwenci i absolwentki naszego programu robią karierę jako CFO lub strategiczni partnerzy w wielu segmentach naszego biznesu. W Mars zrealizujesz swoje aspiracje i będziesz rozwijać się na każdym kroku.',
                requirements: 'Poszukujemy osób, które chcą poszerzać kompetencje w zakresie doskonałego przywództwa, równocześnie rozwijając swoją wiedzę funkcjonalną. Musisz mieć pasję do zarządzania ludźmi oraz zamiłowanie do finansów, a do tego: kończyć lub mieć ukończone studia magisterskie o profilu finansowym, ekonomicznym lub administracyjnym, biegle mówić po angielsku, wykazywać się gotowością do międzynarodowej mobilności, posiadać aspiracje ciągłego rozwoju, zdolności analityczne, oraz łatwość przystosowania się do nowego otoczenia.',
                duties: 'Mars Finance Leadership Experience to: <br> 3-letni program, w trakcie którego będziesz pełnić odpowiedzialne funkcje w ramach trzech, rocznych rotacji, na trzech różnych stanowiskach; <br> Podczas trzech lat na programie zdobędziesz doświadczenia z różnych obszarów finansów (supply finance, market finance, financial control lub digital); <br> W ramach MFLE będziesz mieć unikalną okazję poznania różnych segmentów naszego biznesu (Mars Wrigley Confectionary, Mars Petcare, Mars Food); <br> Jeden z trzech rocznych projektów możesz zrealizować za granicą.',
                company_offer: 'System premiowy uzależniony od wyników indywidualnych i biznesowych. <br> Benefity, takie jak: najlepsza opiekę medyczna, dofinansowanie karty sportowej i wydarzeń kulturalnych, ubezpieczenie na życie. <br> Wsparcie doświadczonego mentora, coacha, trenerów i menedżerów. <br> Wsparcie w rozwoju kluczowych kompetencji w postaci cyklu szkoleń, w ramach dedykowanego programu Learning&Development, który pomoże Ci rozwinąć umiejętności niezbędne do tego, by stać się jednym z naszych przyszłych liderów lub liderek.<br> Jeśli dołączenie na Program wymaga od Ciebie relokacji – oferujemy bonus relokacyjny.',
                payment: '9100zł brutto',
                contact: 'karolina.chojnacka@effem.com',
            },
            {
                id: 7,
                company_name: 'MARS',
                position: 'Program Menedżerski w obszarze Zakupów',
                type: 'hybrydowa',
                lease: 'Umowa o pracę na czas nieokreślony',
                location: 'Warszawa',
                job: '40',
                description: 'Mars Procurement Leadership Experience to trzyletni program składający się z trzech 12-miesięcznych rotacji. Rotacje te oferują bogate doświadczenia w różnych obszarach naszej organizacji. To szansa, aby przyczynić się do rozwoju firmy Mars i naszych renomowanych marek, jednocześnie otrzymując wskazówki dotyczące rozwoju zawodowego i osobistego. Nasz Program Menedżerski w Obszarze Zakupów stanowi doskonałą podstawę do kariery lidera/liderki w naszym globalnym łańcuchu dostaw. Otrzymasz światowej klasy wsparcie i poznasz przyjaciół na całe życie, jednocześnie rozwijając swoją przyszłą karierę już dziś.',
                requirements: 'Poszukujemy osób, które chcą poszerzać kompetencje w zakresie doskonałego przywództwa, równocześnie rozwijając swoją wiedzę funkcjonalną. Musisz mieć pasję do zarządzania ludźmi oraz zamiłowanie do obszaru zakupów, a do tego: <br> Kończyć lub mieć ukończone studia magisterskie  <br> Biegle mówić po angielsku <br> Posiadać nastawienie na rozwój, wyjątkowe umiejętności interpersonalne i umiejętność budowania zaufania<br> Mieć aspiracje do przyszłej kariery na stanowisku kierowniczym <br> Być nastawionym na naukę i rozwój wykraczający poza strefę komfortu <br> Prezentować innowacyjne i krytyczne myślenie',
                duties: 'Podczas trwania programu zaangażujesz się w strategiczne decyzje biznesowe, prowadząc projekty, które mają na celu upewnienie się, że kupujemy właściwe produkty, kierując się początkowo jakością, a następnie odpowiednią ceną. Priorytetem jest zrównoważony rozwój i budowanie wzajemnych relacji z dostawcami. Odkryjesz, jak Twoje dzisiejsze decyzje wpływają na naszą działalność w przyszłości.',
                company_offer: 'System premiowy uzależniony od wyników indywidualnych i biznesowych. Benefity, takie jak: najlepsza opieka medyczna, dofinansowanie karty sportowej i wydarzeń kulturalnych, ubezpieczenie na życie. Wsparcie doświadczonego mentora, coacha, trenerów i menedżerów. Wsparcie w rozwoju kluczowych kompetencji w postaci cyklu szkoleń, w ramach dedykowanego programu Learning&Development, który pomoże Ci rozwinąć umiejętności niezbędne do tego, by stać się jednym z naszych przyszłych liderów lub liderek. Jeśli dołączenie na Program wymaga od Ciebie relokacji – oferujemy bonus relokacyjny.',
                payment: '9100zł brutto',
                contact: 'karolina.chojnacka@effem.com',
            },
        ]
    },
    {
        id: 3,
        name: 'Philip Morris Polska S.A.',
        img: 2,
        jobOffers: [
            {
                id: 8,
                company_name: 'Philip Morris Polska S.A.',
                position: 'Staż w dziale IT',
                type: 'zdalna',
                lease: 'umowa zlecenie',
                location: 'Kraków',
                job: 'min.30 h',
                description: 'W PMI zdecydowaliśmy się zrobić coś niesamowitego. Całkowicie zmieniamy naszą działalność i budujemy naszą przyszłość na jednym jasnym celu – budowanie przyszłości bez dymu tytoniowego.<br> Ogromna zmiana wiąże się z ogromną szansą. Tak więc, gdziekolwiek do nas dołączysz, będziesz cieszyć się swobodą marzeń i dostarczaniem lepszych, jaśniejszych rozwiązań oraz przestrzenią, aby rozwijać swoją karierę w nieskończenie różnych kierunkach.<br> <br> DOŁĄCZ DO NAS na STAŻ W DZIALE IT :)',
                requirements: 'Jesteś studentem/ką ostatnich lat studiów lub od Twojej obrony nie upłynęło więcej niż 12 miesięcy  (preferowane kierunki: informatyka, automatyka i robotyka, analiza danych lub pokrewne) <br> Miałeś/miałaś wcześniejsze doświadczenie w pracy z bazami danych<br> Możesz przeznaczyć na staż minimum 30 godzin tygodniowo (w większości stacjonarnie)<br> Znasz narzędzia: SQL, Power BI, Powershell<br> Wychodzisz z inicjatywą, szukasz rozwiązań i nowych informacji<br> Znasz  jęz. ang  na poziomie komunikatywnym (min.  B2)<br> Byłeś/aś częścią projektu IT, gdzie byłeś/aś odpowiedzialna za jego daną część',
                duties: 'Rozwijanie nowych i wspieranie istniejących systemów informatycznych wykorzystywanych do produkcji i logistyki ( np. AWS Cloud, czy systemy dotyczące logistyki wyrobów gotowych)<br> Opieka nad procesami w projektach, sprawdzanie ich poprawności, wdrażanie usprawnień<br> Zbieranie  feedbacku od użytkowników systemów  <br> Współpraca z zewnętrznymi dostawcami przy wdrożeniach<br> Poszukiwanie nowych technologii i rozwiązań odpowiadających na potrzeby biznesu<br> Testowanie rozwiązań<br> Praca z bazami i hurtowaniami danych, współpraca z developerami',
                company_offer: 'Umowa  zlecenie na 6 miesięcy z możliwością przedłużenia do 12 miesięcy <br> Wynagrodzenie zależne od przepracowanych godzin, ze stawką nie mniejszą niż 30 zł/h brutto<br> IT HUB z pakietem szkoleń wewnętrznych dostosowanych<br> Dostęp do naszych wewnętrznych platform szkoleniowych, w tym do platformy do nauki języków obcych<br> Udział w projektach wdrażających nowe technologie w firmie (Digitalizacja, migracja do rozwiązań Cloud, Teams.)<br> Możliwość wprowadzania własnych pomysłów i rozwiązań 😊<br> Naukę architektury systemów produkcyjnych Philip Morris i nowych technologii<br> Elastyczny czas pracy',
                payment: 'nie mniej niż 30zł/h brutto',
                contact: 'https://www.pmicareers.pl/job-offers/intern-it',
            },
            {
                id: 9,
                company_name: 'PMI Service Center Europe Sp. z o.o.',
                position: 'Intern in P&C Analytics (Employee Listening & Insights team)',
                type: 'zdalna',
                lease: 'umowa zlecenie',
                location: 'Kraków',
                job: 'min.30 h',
                description: 'At PMI, we’ve chosen to do something incredible. We’re totally transforming our business, and building our future on smoke-free products with the power to improve the lives of a billion smokers worldwide. <br><br> JOIN US! <br> The Employee Listening & Insights team (EL&I) sits within the P&C Analytics team that helps PMI to become more dynamic business and workforce with more data driven leaders. <br> Employee Listening simply means developing outlets for employees to express themselves openly through multiple channels, improving engagement. ‘Active Listening’ ensures colleagues feel comfortable voicing ideas and opinions, feedback and the best ideas are free to gain traction with the group and wider organization, solving difficulties and challenges that we face individually and collectively.',
                requirements: 'a student of 3rd, 4th or 5th year or University graduate up to 6 months after graduation in a quantitative field (e.g. data science, economics, statistics, I/O psychology)<br> usage of Qualtrics (or other data visualization tools e.g. dashboards, PowerBI, Tableau) to validate and consolidate data from various sources and visualize respective findings would be a strong asset,<br> knowledge of market research and/or statistics would be an advantage<br> proficiency with MS PowerPoint and Excel - including creating charts/graphs, pivot tables, VLOOKUPs,<br> Fluent in both written and spoken English,',
                duties: 'become a member of People Analytics team and gather experience in Employee Listening & Insights area,<br> be a part of truly international team,<br> have a chance to learn new technologies like Qualtrics, PowerBI and employee research techniques,<br> analyze current solutions and identify areas for improvement or data issues,<br> participate in ongoing projects and development of People Analytics,<br> contribute to creating data-driven organization within People & Culture function,',
                company_offer: 'paid internship for 6 months (potentially working with the other P&C Analytics teams after 6 months),<br> hybrid work opportunity and flexible working time that can accommodate your studies (availability min. 30 h per week),<br> work in Agile methodology to deliver products for internal customers based on their needs,<br> learning of new tools, platforms and technologies used in people analytics,<br> training and on-the-job development of analytical skills,<br> getting to know how a company leading in its industry approaches People & Culture (HR) activities from system/data perspective,',
                payment: '',
                contact: 'https://www.pmicareers.pl/job-offers/intern-in-pc-analytics-employee-listening-insights-team',
            },
        ]
    },
    {
        id: 4,
        name: 'GE Healthcare',
        img: 3,
        jobOffers: [
            {
                id: 9,
                company_name: 'GE Healthcare',
                position: 'IT Leadership Development Program - Internship',
                type: 'hybrydowa',
                lease: 'contract of mandate',
                location: 'Profesora Michała Życzkowskiego 20, Kraków',
                job: '40h/weekly',
                description: 'Information Technology is the backbone of how our global teams operate – connecting people, process, and products to help us make a positive impact on global healthcare. The IT Leadership Development Program is the early career development program which offers those with a passion to grow their leadership, business acumen, and technical skills while building a career with unlimited potential. You’ll experience hands-on work on important and challenging healthcare projects and training across a broad range of technology disciplines, ensuring you’re ready to support our vision to be the leading innovator delivering precision health.',
                requirements: 'A Degree in Computer Science, Computer Engineering, Computer Information Systems, Management Information Systems, IT Security, Informatics, Information Science/Technology, Software Engineering, Security and Risk Analysis, or other relevant STEM majors with IT experience.<br><br>University Graduates up to two years after graduation, or Master\'s degree Students (full time job availability is mandatory)<br><br>Up to date with current digital technologies, standards, and development methodologies  <br><br>A strong commitment and passion to a career in technology.',
                duties: 'Full-time, two-year leadership development program where members work within a GE HealthCare business alongside experts in various locations.   <br><br>Three, eight-month rotational assignments within IT organization covering diverse projects spanning areas such as project and product management, data analytics, software development, IT operations and more.<br><br>Learning and development experience focused on technical training, leadership, and business acumen.<br><br>Engagement in ITDP program initiatives and committees.',
                company_offer: 'Flexible working hours and partial home office possibility <br>Community engagement focus groups <br>Learning opportunities and development program ',
                payment: '',
                contact: 'monika.turewicz1@gehealthcare.com',
            },
        ]
    }
];

const OffersPage: React.FC<PageProps> = () => {
    const [selectedSponsor, setSelectedSponsor] = useState(1);
    const [selectedOfferIndex, setSelectedOfferIndex] = useState(0);
    const [rotation, setRotation] = useState(0);

    const handleSponsorClick = (sponsorId) => {
        setSelectedSponsor(sponsorId);
        setSelectedOfferIndex(0);
    };

    const handlePrevOffer = () => {
        setSelectedOfferIndex(prevIndex => {
            const maxIndex = sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers.length - 1;
            setRotation(rotation + 360);

            return prevIndex === 0 ? maxIndex : prevIndex - 1;
        });
    };

    const handleNextOffer = () => {
        setSelectedOfferIndex(prevIndex => {
            const maxIndex = sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers.length - 1;
            setRotation(rotation + 360);

            return prevIndex === maxIndex ? 0 : prevIndex + 1;
        });
    };
    const selectedOffer = sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex];
    return (
        <Layout>
            <ParentDiv>
                <LeftDiv>
                    <GridContainer>
                        {sponsorsData.map(sponsor => (
                            <GridItem key={sponsor.id} onClick={() => handleSponsorClick(sponsor.id)}>
                                <SImage src={logos[sponsor.img].default} alt={sponsor.name} />
                            </GridItem>
                        ))}
                    </GridContainer>
                </LeftDiv>
                <RightDiv>
                    <Picture>
                        <source srcSet={offerBackground} media="(min-width: 769px)" />
                        <Img src={offerBackground} alt="last page" />
                    </Picture>
                    <JobOffersPanel>
                        {selectedSponsor && (
                            <JobOfferCard>
                                <JobOfferContent>
                                    <Field>
                                        <Title>Nazwa firmy:</Title>
                                        <Content>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].company_name}</Content>
                                    </Field>
                                    <Field>
                                        <Title>Stanowisko:</Title>
                                        <Content>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].position}</Content>
                                    </Field>
                                    <Field>
                                        <Title>Rodzaj pracy:</Title>
                                        <Content>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].type}</Content>
                                    </Field>
                                    <Field>
                                        <Title>Forma zatrudnienia:</Title>
                                        <Content>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].lease}</Content>
                                    </Field>
                                    <Field>
                                        <Title>Lokalizacja:</Title>
                                        <Content>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].location}</Content>
                                    </Field>
                                    <Field>
                                        <Title>Wymiar:</Title>
                                        <Content>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].job}</Content>
                                    </Field>
                                    <Field>
                                        <Title>Opis:</Title>
                                        <Content dangerouslySetInnerHTML={{ __html: selectedOffer.description }}></Content>
                                    </Field>
                                    <Field>
                                        <Title>Wymagania:</Title>
                                        <Content dangerouslySetInnerHTML={{ __html: selectedOffer.requirements }}></Content>
                                    </Field>
                                    <Field>
                                        <Title>Obowiązki:</Title>
                                        <Content dangerouslySetInnerHTML={{ __html: selectedOffer.duties }}></Content>
                                    </Field>
                                    <Field>
                                        <Title>Wynagrodzenie:</Title>
                                        <Content>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].payment}</Content>
                                    </Field>
                                    <Field>
                                        <Title>Kontakt:</Title>
                                        <Content>{sponsorsData.find(sponsor => sponsor.id === selectedSponsor).jobOffers[selectedOfferIndex].contact}</Content>
                                    </Field>
                                </JobOfferContent>
                            </JobOfferCard>
                        )}
                        {!selectedSponsor && <p>Wybierz Sponsora</p>}
                    </JobOffersPanel>
                    <ButtonContainer>
                        <PrevButton onClick={handlePrevOffer}>
                            <BtnImg src={movingGear} alt="Poprzedni" style={{ transform: `rotate(${rotation}deg)` }} />
                        </PrevButton>
                        <NextButton onClick={handleNextOffer}>
                            <BtnImg src={movingGear} alt="Następny" style={{ transform: `rotate(${rotation}deg)` }} />
                        </NextButton>
                    </ButtonContainer>
                </RightDiv>
            </ParentDiv>
        </Layout>
    );
};

const GridContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  @media screen and (max-width: 769px) {
    // background-color: #ada;
    grid-template-columns: repeat(4, 1fr);
    margin: auto;
    gap: 0;
  }
`;

const GridItem = styled.div`
@media screen and (max-width: 769px) {
    // background-color: #aba;
    width: fit-content;
  }
`;

const SImage = styled.img`
  cursor: pointer;
  display: block;
  align-self: center;
  width: 20vw;
  height: 15vh;
  aspect-ratio: 3/2;
  object-fit: contain;
  box-sizing: border-box;
  border: 0.2rem solid;
  border-radius: 3.5rem;
  border-color: #e5821a;
  background-color: #fffffa;
  padding: 0.12em;
  @media screen and (max-width: 769px) {
    // background-color: #afa;
    height: 100%;
    width: 100%;
    border: 0.15rem solid;
    border-color: #e5821a;
  }
`;

const ParentDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 3rem;
  aspect-ratio: 1;
  position: relative;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const LeftDiv = styled.div`
  padding: 0 0.5rem 0 0.5rem;
  border: 0.2rem solid;
  border-radius: 3.5rem;
  border-color: #e5821a;
  margin-left: 6%;
  min-width: auto; /* Reset min-width */
  display: inline-block;
  width: 20%;
  height: 66%;
  @media screen and (max-width: 769px) {
    width: 94%;
    height: 20%;
    margin-left: 0;
    margin-right: 0;
    padding: 0;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const RightDiv = styled.div`
  margin-right: 6%;
  margin-left: 3%;
  width: 80%;
  display:flex;
  height: 66%;
  position: relative;
  @media screen and (max-width: 769px) {
    margin-left: 9%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: 88%;
  }
`;

const Picture = styled.picture`
    position: relative;
    display: block;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BtnImg = styled.img`
  width: 100%;
  aspect-ratio:1;
  display: block;
  height: auto;
  transition: transform 2s ease;
`;

const JobOffersPanel = styled.div`
  top: 7%;
  bottom: 7%;
  left: 18%;
  right: 18%;
  overflow: auto; /* Allow the panel to become scrollable */
  max-height: 90%;
  position: absolute;
`;

const JobOfferCard = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

const JobOfferContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Field = styled.div`
  display: flex;
  justify-content: space-between; /* Align title to left and content to right */
  margin-bottom: 10px;
  
`;

const Title = styled.div`
  font-weight: bold;
  flex: 1; /* Ensure title takes minimum space */
  @media screen and (max-width: 769px) {
    font-size: 0.7rem;
  }
`;

const Content = styled.div`
  color: #110B11;
  flex: 2; /* Ensure content takes more space */
  @media screen and (max-width: 769px) {
    font-size: 0.7rem;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const PrevButton = styled.button`
  position: absolute;
  cursor: pointer;
  left: 0%;
  width: 10%;
  background:none;
  border: none;
  box-shadow: none;
  @media screen and (max-width: 769px) {
    width: 18%;
    left: -9%;
  }
`;

const NextButton = styled.button`
  position: absolute;
  background:none;
  cursor: pointer;
  right: 0%;
  width: 10%;
  border: none;
  box-shadow: none;
  @media screen and (max-width: 769px) {
    width: 18%;
    right: -9%;
  }
`;

export default OffersPage;

export const Head: HeadFC = () => (
    <>
      <title>Inżynierskie Targi Pracy BEST AGH KRAKÓW</title>
      <link rel="icon" href="/favicon.ico" />
    </>
  );