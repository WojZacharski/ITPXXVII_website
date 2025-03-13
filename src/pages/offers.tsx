import React, { useState, useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import "../styles/global.scss";
import styled, { keyframes } from "styled-components";
//@ts-ignore
import offerBackground from "../images/offers_elements/background.png";
import arrow_left from "../images/offers_elements/arrow_left.png";
import arrow_right from "../images/offers_elements/arrow_right.png";
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
        name: 'Woodward',
        img: 0,
        jobOffers: [
            {
                id: 1,
                company_name: 'Woodward Poland Sp z o.o.',
                position: 'Electrical Component Intern',
                type: 'hybrydowa',
                lease: 'Umowa zlecenia',
                location: 'Kraków lub Niepołomice',
                job: 'Minimum 20h tygodniowo',
                description: 'Woodward is the global leader in the design,\n' +
                    'manufacturing, and service of energy conversion\n' +
                    'and control solutions for the aerospace and\n' +
                    'industrial equipment markets. Together with our\n' +
                    'customers, we are enabling the path to a cleaner,\n' +
                    'decarbonized world. We prioritize the growth of\n' +
                    'our employees, providing comprehensive support\n' +
                    'for personal and professional development. Trust\n' +
                    'is at the core of our relationships.',
                requirements: '• Electrical/Electronics engineering or similar study background (we are looking for a student after 3-rd year)\n' +
                    '<br></br>• Availability to work for at least 20 hours a week\n' +
                    '<br></br>• Basic know-how of electronics\n' +
                    '<br></br>• Good communication skills both in Polish and English\n' +
                    '<br></br>• Competent in the use of PCs and associated software\n' +
                    '<br></br>• Competent in problem solving for electrical components\n' +
                    '<br></br>• Ability to effectively operate in the team environment and communicate with multi-site team members ',
                duties: '• Drive the Electrical Parts Product Change Notice process\n' +
                    '<br></br>• Support the Electrical Parts Obsolescence process\n' +
                    '<br></br>• Execute the engineering changes in the Woodward ERP systems\n' +
                    '<br></br>• Create and maintain electrical parts database in Woodward ERP systems\n' +
                    '<br></br>• Support electrical components selection for design ',
                company_offer: ' ',
                payment: '  31pln za godzinę',
                contact: 'Krzysztof J. Nowak Krzysztof-Jaroslaw.Nowak@woodward.com +48 785 171 161',
            },
            {
                id: 2,
                company_name: 'Woodward Poland Sp z o.o.',
                position: 'Industrial Automation Intern',
                type: 'hybrydowa',
                lease: 'Umowa zlecenia',
                location: 'Kraków lub Niepołomice',
                job: '  Minimum 20h tygodniowo',
                description: 'We are pleased to offer unique opportunity for\n' +
                    'students to join our Turbomachinery Systems\n' +
                    'Applications Engineering Team in Woodward Poland.\n' +
                    'You will be part of highly skilled Engineering Team with\n' +
                    'nice opportunity to learn and work in the area of\n' +
                    'modern industrial control systems (mostly gas or\n' +
                    'steam turbines and compressors). Our work is very\n' +
                    'versatile, between HW electrical design and control\n' +
                    'software development, drawings or schematics\n' +
                    'creation, through testing of real control systems in the\n' +
                    'laboratory or the assembly line or potentially at the\n' +
                    'customer premises. You will be given tasks tailored to\n' +
                    'your expertise and interest and adjusted to your\n' +
                    'individual work schedule.',
                requirements: '• Studies preferably in Automation & Robotics, but also Electrical, Electronics, Computer Sciences or similar;\n' +
                    '<br></br>• Knowledge of the electrical area – the ability to operate equipment, read schematics, make connections and measurements;\n' +
                    '<br></br>• Solid computer skills, incl. MS Office;\n' +
                    '<br></br>• Effective written and verbal communication skills;\n' +
                    '<br></br>• Ability to effectively operate in a team-work international environment;\n' +
                    '<br></br>• Current student status and availability to work at least 20 hours a week\n' +
                    '<br></br>• Communicative English language skills.',
                duties: 'Cooperate with the local Application Engineering Team on the current projects and specific tasks, for example:\n' +
                    '<br></br>• components selection;\n' +
                    '<br></br>• schematics and drawings creation;\n' +
                    '<br></br>• writing and executing test plans;\n' +
                    '<br></br>• developing graphical control interfaces (HMI);\n' +
                    '<br></br>• programming logic diagrams into Woodward Controls.  ',
                company_offer: ' ',
                payment: '  31pln za godzinę',
                contact: 'Krzysztof J. Nowak Krzysztof-Jaroslaw.Nowak@woodward.com +48 785 171 161',
            },
            {
                id: 3,
                company_name: 'Woodward Poland Sp z o.o.',
                position: 'Aerospace Mechanical Engineer - INTERNSHIP',
                type: 'hybrydowa',
                lease: 'Umowa zlecenia',
                location: 'Kraków lub Niepołomice',
                job: 'Minimum 20h tygodniowo',
                description: 'Woodward is the global leader in the design,\n' +
                    'manufacturing, and service of energy conversion and\n' +
                    'control solutions for the aerospace and industrial\n' +
                    'equipment markets. Together with our customers, we are\n' +
                    'enabling the path to a cleaner, decarbonized world. We\n' +
                    'prioritize the growth of our employees, providing\n' +
                    'comprehensive support for personal and professional\n' +
                    'development. Trust is at the core of our relationships.',
                requirements: '- Mechanical Engineering student preferred (completed at least the third year of studies)\n' +
                    '<br></br>- Communicative English skills\n' +
                    '<br></br>- Valid student status and availability to work for at least 20 hours a week\n' +
                    '<br></br>- Understanding of Geometric Dimensioning and Tolerance will be an advantage\n' +
                    '<br></br>- Knowledge of engineering software such as CAD, MES, Matlab, will be an additional asset.',
                duties: '- Perform simple engineering calculations\n' +
                    '<br></br>- Responsible for the creation of various testing procedures and reports\n' +
                    '<br></br>- Analyze raw test data and create reports\n' +
                    '<br></br>- Review product non-conformances',
                company_offer: ' ',
                payment: '  31pln za godzinę',
                contact: 'Krzysztof J. Nowak Krzysztof-Jaroslaw.Nowak@woodward.com +48 785 171 161',
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
                company_name: 'Mars Polska',
                position: 'Program Menedżerski w Inżynierii | Mars Engineering Leadership Experience',
                type: 'hybrydowa',
                lease: 'Umowa o pracę na czas nieokreślony',
                location: 'Niepolomice, Sochaczew, Janaszowek, Blonie',
                job: '40',
                requirements: '',
                duties: 'Mars Engineering Leadership Experience to:\n' +
                    '<br></br>3-letni, międzynarodowy program, w trakcie którego będziesz pełnić odpowiedzialne funkcje na trzech różnych stanowiskach z obszaru inżynieryjnego;\n' +
                    '<br></br>Trzy lata, trzy różne, roczne role. Lubimy zapewniać naszym Współpracownikom swobodę działania, dlatego od momentu dołączenia do Mars będziesz odpowiadać za zarządzanie swoim projektem.\n' +
                    '<br></br>Rok 1 programu to kierowanie własnym projektem\n' +
                    '<br></br>Rok 2 to projekt realizowany zagranicą\n' +
                    '<br></br>Rok 3 to zarządzanie własnym zespołem\n' +
                    '<br></br>Każdy z rocznych projektów będzie wyzwaniem mającym na celu zwiększenie Twojej wiedzy i ekspertyzy w takich dziedzinach jak robotyka, zaawansowana technologia produkcji czy szybkość i wydajność maszyn oraz przywództwo;\n' +
                    '<br></br>Każdy projekt będzie dostosowany do Twojej indywidualnej ścieżki rozwoju, dzięki czemu zdobędziesz imponujące doświadczenie, które nada tempa Twojej karierze jako lidera/ liderki w dziedzinie technicznej.\n' +
                    '<br></br>Przykładowe role w ramach programu: Inżynier_ka Projektu, Team Leader_ka zmiany produkcyjnej.\n<',
                description: 'Mars Engineering Leadership Experience (MELE) to program przyspieszonego rozwoju kariery, w ramach którego podczas trzech, rocznych projektów, w Polsce i zagranicą, rozwiniesz swoje umiejętności techniczne i przywódcze. Będziesz doskonalić nasze znane na całym świecie marki i/lub współtworzyć nowe, a równocześnie w zawrotnym tempie zdobywać wiedzę i kompetencje zarówno tzw. twarde, jak i miękkie.\n' +
                    'W ramach programu rozwoju liderów i liderek obszaru inżynieryjnego będziesz mieć realny wpływ na tworzenie sukcesu naszej firmy. Przed Tobą poszukiwanie nowych rozwiązań inżynieryjnych, promowanie innowacyjnych pomysłów oraz kierowanie kompleksowymi projektami technicznymi w całej Europie.\n',
                company_offer: 'System premiowy uzależniony od wyników indywidualnych i biznesowych. <br> Benefity, takie jak: najlepsza opiekę medyczna, dofinanasowanie karty sportowej i wydarzeń kulturalnych, ubezpieczenie na życie.<br> Wsparcie doświadczonego mentora, coacha, trenerów i menedżerów. <br> Wsparcie w rozwoju kluczowych kompetencji w postaci cyklu szkoleń, w ramach dedykowenego programu Learning&Development, który pomoże Ci rozwinąć umiejętności niezbędne do tego, by stać się jednym z naszych przyszłych liderów lub liderek. <br> Jeśli dołączenie na Program wymaga od Ciebie relokacji – oferujemy bonus relokacyjny.',
                payment: '  9700 Brutto miesięcznie na start, wynagrodzenie rosnące co roku.',
                contact: 'https://careers.mars.com/pl/pl/job/R118861/Program-Menedżerski-w-Inżynierii-Mars-Engineering-Leadership-Experience',
            },
            {
                id: 5,
                company_name: 'Mars Polska',
                position: 'Junior Finance Specialist | Mars Young Professionals Program | Mars Wrigley & Royal Canin',
                type: 'hybrydowa',
                lease: 'Umowa o prace na okres 6/12 miesięcy.',
                location: 'Niepołomice / Warszawa',
                job: 'Pełny etat / 4/5 etatu',
                description: 'Program Mars Young Professionals powstał z myślą o tych, którzy znajdują się na początku swojej kariery zawodowej i od samego jej startu chcą zdobywać kluczowe kompetencje i niezbędne umiejętności, a przy tym nie boją się wyzwań. W ramach programu, na 6/12 miesięcy wcielisz się w rolę specjalisty/specjalistki w dziale finansów i zostaniesz liderem/liderką prawdziwego projektu biznesowego. To pierwszy krok, aby wejść do świata Mars i zostać z nami na dłużej. Dział Finansów to nieoceniony partner biznesowy dla naszych działów rynkowych i fabrycznych. Napędzamy rentowny wzrost i podejmowanie właściwych decyzji inwestycyjnych, zapewniamy wydajność operacji finansowych, generowania i analizowania danych oraz dbamy o zgodność z lokalnymi i korporacyjnymi wytycznymi. Realizujemy naszą misję poprzez dobre zrozumienie wyników biznesowych, analizę trendów oraz planowanie scenariuszowe. Dzięki naszej ekspertyzie zespoły operacyjne mogą podejmować lepsze decyzje i odpowiednio zarządzać ryzykiem.\n' +
                    '<br></br>W dziale Finansów oferujemy w tym roku dwa stanowiska na programie Mars Young Professionals: jedna rola Junior Finance Specialist w Royal Canin (Niepołomice, 6 msc), druga rola Junior Finance Specialist w Mars Wrigley (Warszawa, 12 msc).\n',
                requirements: 'Poszukujemy ambitnych, nastawionych na działanie i współpracę osób, które są otwarte na naukę i nowe wyzwania, oraz:\n' +
                    '<br></br>bardzo dobrze znają język angielski; \n' +
                    '<br></br>posiadają pierwsze doświadczenie w obszarze finansów (maksymalnie do 5 lat)\n' +
                    '<br></br>potrafią generować analizy i wyciągać wnioski na podstawie dużych zbiorów danych\n',
                duties: 'Dołączając do zespołu finansowego w Royal Canin, będziesz wspierać organizację poprzez partnerstwo biznesowe, operacje finansowe, zapewnianie zgodności oraz wdrażanie optymalizacji. Poznasz funkcjonowanie finansów w międzynarodowej firmie, realizując własne projekty i współpracując z ekspertami. Praca w strukturach Royal Canin pozwoli Ci zdobyć doświadczenie na sześciu różnorodnych rynkach, rozwijając umiejętności w dynamicznym, międzynarodowym środowisku.\n' +
                    '<br></br>Jako Junior Finance Specialist w Mars Wrigley twoim zadaniem podczas programu będzie aktywne wsparcie zespołu w przygotowaniu oraz weryfikacji różnorodnych projektów strategicznych poprzez przygotowanie kluczowych narzędzi do tworzenia scenariuszy, oraz celów biznesowych. Przeprowadzisz weryfikację i standaryzację procesów zachodzących w organizacji oraz dostosujesz je do bieżących działań operacyjnych. W efekcie wypracujesz optymalny kierunek rozwoju poprzez rzetelną analizę finansową i szczegółowe kalkulacje.\n' +
                    '<br></br>Czego się nauczysz?\n' +
                    '<br></br>rozwijania umiejętności operacji finansowych i partnerstwa biznesowego w środowisku międzynarodowym;\n' +
                    '<br></br>generowania i analizowania danych w celu dostarczania wartościowych insightów biznesowych;\n' +
                    '<br></br>identyfikowania obszarów do poprawy i wdrażania usprawnień w procesach finansowych;\n' +
                    '<br></br>współpracy z zespołami z różnych rynków i kultur w strukturze międzynarodowej organizacji;\n' +
                    '<br></br>zapewnienia zgodności i ładu finansowego w działalności operacyjnej firmy. \n',
                company_offer: 'System premiowy uzależniony od wyników indywidualnych i biznesowych. <br> Benefity, takie jak: najlepsza opiekę medyczna, dofinanasowanie karty sportowej i wydarzeń kulturalnych, ubezpieczenie na życie. <br> Wsparcie doświadczonego mentora, coacha, trenerów i menedżerów. <br> Wsparcie w rozwoju kluczowych kompetencji w postaci cyklu szkoleń, w ramach dedykowenego programu Learning&Development, który pomoże Ci rozwinąć umiejętności niezbędne do tego, by stać się jednym z naszych przyszłych liderów lub liderek. <br> Jeśli dołączenie na Program wymaga od Ciebie relokacji – oferujemy bonus relokacyjny.',
                payment: '  7400 Brutto ',
                contact: 'https://careers.mars.com/pl/pl/job/R121574/Junior-Finance-Specialist-Mars-Young-Professionals-Program-Mars-Wrigley-Royal-Canin',
            },
            {
                id: 6,
                company_name: 'Mars Polska',
                position: 'Junior Quality Specialist (f/m/x) | Mars Young Professionals Program | Royal Canin',
                type: 'hybrydowa',
                lease: 'Umowa o pracę na czas nieokreślony',
                location: 'Niepołomice',
                job: 'Pełny etat/ 4/5 etatu',
                description: 'Program Mars Young Professionals to więcej niż staż. Program powstał z myślą o tych, którzy znajdują się na początku swojej kariery zawodowej i od samego jej startu chcą zdobywać kluczowe kompetencje i niezbędne umiejętności, a przy tym nie boją się wyzwań. W ramach programu, na 6 miesięcy wcielisz się w rolę Młodszego Specjalisty w Dziale Jakości i zostaniesz liderem/ liderką prawdziwego projektu biznesowego. To pierwszy krok, aby wejść do świata Mars i zostać z nami na dłużej.\n' +
                    '<br></br>O dziale:\n' +
                    '<br></br>Dział Jakości i Bezpieczeństwa Żywności to serce firmy dbające o najwyższe standardy produkcji. Nasza misja to zapewnienie bezpiecznych i zgodnych z normamami produktów, które spełniają oczekiwania klientów. Dzięki precyzyjnym kontrolom, nowoczesnym technologiom i zaangażowanemu zespołowi gwarantujemy jakość, której możesz ufać.\n',
                requirements: 'Poszukujemy ambitnych, nastawionych na działanie i współpracę osób, które są otwarte na naukę i nowe wyzwania, oraz:\n' +
                    '<br></br>posiadają umiejętność analizy ryzyka i identyfikacji zagrożeń,\n' +
                    '<br></br>posiadają zdolności organizacyjne i planowania, dbałość o szczegóły, zdolności komunikacyjne oraz orientację na jakość i ciągłe doskonalenie,\n' +
                    '<br></br>bardzo dobrze znają język angielski oraz język polski,\n' +
                    '<br></br>posiadają doświadczenie zawodowe maksymalnie do 5 lat (doświadczenie w trakcie studiów jak najbardziej się w to wlicza!).\n',
                duties: 'Twoja rola:\n' +
                    '<br></br>Poprowadzisz projekt związany z zarządzaniem ciałami obcymi. Projekt ma na celu identyfikację, eliminację i zapobieganie obecności ciał obcych w procesie produkcji. Dzięki wdrożeniu zaawansowanych technologii, procedur kontrolnych i szkoleń zespołu, zapewniamy bezpieczeństwo i najwyższą jakość produktów.\n' +
                    '<br></br>Czego się nauczysz:\n' +
                    '<br></br>poznasz proces produkcji karmy oraz standardów jakościowych,\n' +
                    '<br></br>zarządzania procesami kontrolnymi - wdrażania i doskonalenia procedur wykrywania i eliminacji ciał obcych,\n' +
                    '<br></br>budowania kultury jakości i bezpieczeństwa - rozwijania świadomości i odpowiedzialności za bezpieczeństwo produktów w zespole,\n' +
                    '<br></br>współpracy z działami odpowiedzialnymi i wspierającymi proces produkcji karmy.\n',
                company_offer: 'System premiowy uzależniony od wyników indywidualnych i biznesowych. <br> Benefity, takie jak: najlepsza opiekę medyczna, dofinansowanie karty sportowej i wydarzeń kulturalnych, ubezpieczenie na życie. <br> Wsparcie doświadczonego mentora, coacha, trenerów i menedżerów. <br> Wsparcie w rozwoju kluczowych kompetencji w postaci cyklu szkoleń, w ramach dedykowanego programu Learning&Development, który pomoże Ci rozwinąć umiejętności niezbędne do tego, by stać się jednym z naszych przyszłych liderów lub liderek.<br> Jeśli dołączenie na Program wymaga od Ciebie relokacji – oferujemy bonus relokacyjny.',
                payment: '  7400 brutto ',
                contact: 'https://careers.mars.com/pl/pl/job/R123412/Junior-Quality-Specialist-f-m-x-Mars-Young-Professionals-Program-Royal-Canin',
            },
            {
                id: 7,
                company_name: 'Mars Polska',
                position: 'Mars Finance Leadership Experience Program',
                type: 'hybrydowa',
                lease: 'Umowa o pracę na czas nieokreślony',
                location: 'Niepołomice/Sochaczew',
                job: 'Pełny etat',
                description: 'Do you dream of becoming a finance leader in one of the leading FMCG companies?\n' +
                    '<br></br>Mars Finance Leadership Experience (MFLE), a program of accelerated career development in finance, is a great start. Graduates pursue careers as CFOs or strategic partners in many segments of our business. At Mars, you will fulfill your aspirations and develop at every step\n',
                requirements: 'We look for people willing to expand their competencies in the field of excellent leadership while developing their functional knowledge. You must have a passion for managing people and a love of finance, as well as:\n' +
                    '<br></br>Currently completing or having completed a master\'s degree in finance, economics, or administration no more than 24 months ago\n' +
                    '<br></br>Fluency in English\n' +
                    '<br></br>Showing readiness for international mobility - the second or third year of the program may involve relocation to another Mars site in Europe\n' +
                    '<br></br>Aspiring for continuous development, analytical skills, and adaptability to new environments\n',
                duties: 'Mars Finance Leadership Experience includes:\n' +
                    '<br></br>A 3-year program during which you will hold responsible positions in three annual rotations, in three different positions;\n' +
                    '<br></br>Over the three years, you will gain experience in various areas of finance (supply finance, market finance, financial control, or digital);\n' +
                    '<br></br>As part of MFLE, you will have a unique opportunity to get to know various segments of our business (Mars Wrigley, Mars Petcare, Mars Food);\n' +
                    '<br></br>Opportunity for gain international experience through working in regional projects or placement abroad.\n',
                company_offer: 'System premiowy uzależniony od wyników indywidualnych i biznesowych. Benefity, takie jak: najlepsza opieka medyczna, dofinansowanie karty sportowej i wydarzeń kulturalnych, ubezpieczenie na życie. Wsparcie doświadczonego mentora, coacha, trenerów i menedżerów. Wsparcie w rozwoju kluczowych kompetencji w postaci cyklu szkoleń, w ramach dedykowanego programu Learning&Development, który pomoże Ci rozwinąć umiejętności niezbędne do tego, by stać się jednym z naszych przyszłych liderów lub liderek. Jeśli dołączenie na Program wymaga od Ciebie relokacji – oferujemy bonus relokacyjny.',
                payment: '  9700 Brutto miesięcznies',
                contact: 'https://careers.mars.com/pl/pl/job/R120981/Mars-Finance-Leadership-Experience-Program',
            },
            {
                id: 8,
                company_name: 'Mars Polska',
                position: 'Junior Business Intelligence Engineer (f/m/x) | Mars Young Professionals Program | Royal Canin',
                type: 'hybrydowa',
                lease: 'Umowa o prace na czas określony',
                location: 'Niepołomice',
                job: 'Pełny Etat / 4/5 etatu',
                description: 'Program Mars Young Professionals to więcej niż staż. Program powstał z myślą o tych, którzy znajdują się na początku swojej kariery zawodowej i od samego jej startu chcą zdobywać kluczowe kompetencje i niezbędne umiejętności, a przy tym nie boją się wyzwań. W ramach programu, na 6 miesięcy wcielisz się w rolę Młodszego Inżyniera ds. Business Intelligence i zostaniesz liderem/ liderką prawdziwego projektu biznesowego. To pierwszy krok, aby wejść do świata Mars i zostać z nami na dłużej.\n',
                requirements: 'Poszukujemy ambitnych, nastawionych na działanie i współpracę osób, które są otwarte na naukę i nowe wyzwania, oraz:\n' +
                    '<br></br>są nastawione na wyniki oraz interesują się obszarem raportowania i analizy danych,\n' +
                    '<br></br>posiadają pierwsze doświadczenie w tworzeniu modeli danych Power BI/ wizualizacji i KPI/ Power Automate\n' +
                    '<br></br>bardzo dobrze znają język angielski oraz język polski,\n' +
                    '<br></br>posiadają doświadczenie zawodowe maksymalnie do 5 lat (doświadczenie w trakcie studiów jak najbardziej się w to wlicza!).\n',
                duties: 'Podczas trwania programu będziesz odpowiedzialny za wdrożenie innowacyjnych rozwiązań, które usprawnią wizualizację danych w obszarze fabrycznym. Twoim głównym zadaniem będzie analiza istniejących procesów produkcyjnych oraz identyfikacja obszarów, w których można zastosować narzędzia business intelligence, aby poprawić efektywność operacyjną. W ramach projektu będziesz współpracować ze specjalistami z różnych działów. Na podstawie zebranych informacji, zaprojektujesz i wdrożysz rozwiązania, które umożliwią lepsze monitorowanie kluczowych wskaźników wydajności (KPI) oraz szybsze podejmowanie decyzji na podstawie danych. Będziesz również odpowiedzialny za przeprowadzenie szkoleń dla pracowników fabryki, aby zapewnić im umiejętności niezbędne do korzystania z nowych narzędzi i technologii. Twoja praca przyczyni się do zwiększenia transparentności procesów produkcyjnych oraz umożliwi zespołom lepsze zrozumienie danych, co w efekcie wpłynie na poprawę jakości i wydajności produkcji.\n' +
                    '<br></br>Czego się nauczysz:\n' +
                    '<br></br>korzystania z nowoczesnych narzędzi business intelligence, takich jak Power BI,\n' +
                    '<br></br>zarządzania projektami, ucząc się jak planować, wdrażać i monitorować postępy projektów w zespole, a także jak efektywnie współpracować z różnymi działami w organizacji,\n' +
                    '<br></br>prowadzenia szkoleń i warsztatów dla Współpracowników, co pozwoli Ci rozwijać umiejętności komunikacyjne oraz zdolność do przekazywania wiedzy w przystępny i zrozumiały sposób,\n' +
                    '<br></br>nalizy danych produkcyjnych oraz tworzenia raportów, które pomogą w identyfikacji kluczowych wskaźników wydajności (KPI) i efektywności procesów.\n',
                company_offer: ' ',
                payment: '7400 Brutto miesięcznie',
                contact: 'https://careers.mars.com/pl/pl/job/R122724/Junior-Business-Intelligence-Engineer-f-m-x-Mars-Young-Professionals-Program-Royal-Canin',
            },
        ]
    },
    {
        id: 3,
        name: 'GE Healthcare',
        img: 2,
        jobOffers: [
            {
                id: 9,
                company_name: 'GE HealthCare',
                position: 'Information Technology Internship Program',
                type: 'hybrid',
                lease: 'Civil contract for 12 months ',
                location: 'Avia Office, Profesora Michała Życzkowskiego 20, 31-864 Kraków',
                job: 'min. 20h/weekly',
                description: 'Information Technology is the backbone of how our global teams operate – connecting people, process, and products to help us create the world where healthcare has no limits. Our Information Technology Internship Program is the early career development program which offers those with a passion to grow their technical skills and business acumen alongside with GE HealthCare professionals.\n' +
                    '<br></br>You’ll get hands-on exposure to work on challenging healthcare projects and training across a broad range of technology disciplines, while having a chance to put your academic knowledge into practice and get a solid foundation to build your future career.',
                requirements: 'Basic Qualifications:\n' +
                    '<br></br>Active student of Computer Science, Management Information Systems, IT Security and Risk Analysis, Project Management, IT in Finance, Data Science or other relevant STEM majors with basic IT experience,\n' +
                    '<br></br>Fluent in English.\n' +
                    '<br></br>Desired Characteristics: \n' +
                    '<br></br>Ability to process data in MS Office tools (Excel, PowerPoint) and present outcomes to respective stakeholders,\n' +
                    '<br></br>Strong analytical and interpersonal skills,\n' +
                    '<br></br>Contributes to creative solutions,\n' +
                    '<br></br>Proactively learns new tools,\n' +
                    '<br></br>Up to date with current digital technologies, standards, and development methodologies,\n' +
                    '<br></br>A strong commitment and passion to a career in technology.\n',
                duties: 'During 12-months internship, you\'ll be working within GE HealthCare business alongside experts in Krakow IT Hub,\n' +
                    '<br></br>You\'ll gain learning and development experience focusing on supporting project work, technical training and building business acumen. \n' +
                    '<br></br>As member of program, you\'ll have opportunity to engage in Krakow IT Hub program initiatives and committees.',
                company_offer: ' ',
                payment: '',
                contact: 'Monika Turewicz, Talent Acquisition Partner,  monika.turewicz1@gehealthcare.com \n',
            },
            {
                id: 10,
                company_name: 'GE HealthCare',
                position: 'Information Technology Development Program',
                type: 'hybrid',
                lease: 'Employment of contract for 24 months',
                location: 'Avia Office, Profesora Michała Życzkowskiego 20, 31-864 Kraków',
                job: '40h/weekly (full-time) ',
                description: 'GE HealthCare is a leading global medical technology and digital solutions innovator. Our mission is to create a world where healthcare has no limits. Information Technology is at the backbone of how our global teams operate – connecting people, processes, and products to help us make a positive impact on global healthcare. Our Information Technology Development Program is designed to develop the next generation of IT leaders and innovators. If you’re passionate about technology and ready to tackle challenges that matter, this program will empower you to make a difference while growing your career in a supportive and innovative environment.',
                requirements: 'We’re looking for recent graduates or soon-to-be graduates with a Bachelor’s or Master’s degree in Computer Science, Information Technology, Engineering, Data Science, or related STEM fields, who are: \n' +
                    '<br></br>• Passionate about a career in technology and driven to make an impact.\n' +
                    '<br></br>• Curious, proactive, and up to date with the latest trends in IT, data, and software engineering. \n' +
                    '<br></br>• Strong problem-solvers with analytical skills and a creative mindset. \n' +
                    '<br></br>• Flexible and ready to navigate an everchanging work environment. \n' +
                    '<br></br>• Focused on delivering results and effectively prioritizing to meet deadlines. \n' +
                    '<br></br>• Good team players capable of building relationships across departments. \n' +
                    '<br></br>• Excellent communicators, able to translate technical challenges into clear, actionable ideas. \n' +
                    '<br></br>• Customer-focused, with an ability to understand the value proposition for the customer. \n' +
                    '<br></br>• Willing to challenge the status quo. \n' +
                    '<br></br>• Available for a full-time job.\n',
                duties: '• A full-time, two-year technology leadership development program where members work alongside experts around the world. \n' +
                    '<br></br>• Three, eight-month rotational assignments within the IT organization providing the candidate with an opportunity to experience complex real-world projects across IT domains, especially: AI & Advanced Analytics, Data Science and more. \n' +
                    '<br></br>• Structured technical and leadership training to build your technology skills, business acumen, and innovation mindset.\n' +
                    '<br></br> • The chance to participate in program initiatives and committees that foster personal and professional growth. \n' +
                    '<br></br>• A dynamic, fast-paced work environment that encourages innovation and collaboration.\n',
                company_offer: ' ',
                payment: '',
                contact: 'Monika Turewicz, Talent Acquisition Partner,  monika.turewicz1@gehealthcare.com\n',
            },
            {
                id: 11,
                company_name: 'GE HealthCare ',
                position: 'Field Service Engineer Apprentice',
                type: 'zdalna',
                lease: 'Umowa zlecenie na 12 miesięcy ',
                location: 'w terenie - praktyka wyjazdowa na terenie woj. malopolskiego',
                job: 'min. 20h/weekly ',
                description: 'Jeśli:\n' +
                    '<br></br>jesteś studentką/studentem uczelni technicznej,\n' +
                    '<br></br>masz „smykałkę” techniczną,\n' +
                    '<br></br>interesuje Cię nowoczesna medycyna,\n' +
                    '<br></br>to mamy dla Ciebie propozycję płatnej, rocznej praktyki, która pozwoli Ci poznać pracę Inżyniera Serwisu w jednej z najlepszych i najbardziej rozpoznawalnych firm z sektora sprzętu medycznego! \n' +
                    '<br></br>Jako Field Service Engineer Apprentice będziesz wpierać doświadczonego Inżyniera Serwisu w przeglądach, naprawach i instalacjach u naszych Klientów. Dzięki tej pracy przyczyniamy się sukcesów w ratowaniu ludzkiego zdrowia i życia. Razem z nami poznasz wielu inspirujących ludzi, pasjonatów oraz leaderów w swojej dziedzinie na skalę Polski i Europy, którzy wybrali GE HealthCare jako partnera do osiągania wybitnych celów. \n',
                requirements: 'Status studenta na uczelni technicznej (preferowane kierunki: inżynieria biomedyczna, fizyka medyczna, mechatronika, ale nie jest to warunek konieczny),\n' +
                    '<br></br>JWysoka komunikatywność w języku polskim i angielskim (języka branżowego nauczysz się w pracy).\n' +
                    '<br></br>JSamodzielność oraz sumienność w podjętych zadaniach.\n' +
                    '<br></br>JDyspozycyjność uwzględniająca pracę wyjazdową poza województwo.\n' +
                    '<br></br>JPrawo jazdy kategorii B.\n',
                duties: 'Asystowanie przy instalacji i serwisie urządzeń medycznych najnowszej generacji firmy GE HealthCare z dziedzin diagnostyki obrazowej, ultrasonografii lub systemów klinicznych\n' +
                    '<br></br>JPraca w zgodzie z zasadami i procedurami GE Healthcare ze szczególnym naciskiem na bezpieczeństwo.\n' +
                    '<br></br>JWspółpraca przy osiąganiu celów organizacji poprzez tworzenie relacji z klientami oraz budowanie zaufania do siebie i swojej marki jako przyszłego inżyniera serwisu.\n',
                company_offer: ' ',
                payment: '',
                contact: 'Monika Turewicz, Talent Acquisition Partner,  monika.turewicz1@gehealthcare.com ',
            },
        ]
    },
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

    const renderContact = (contact) => {
        if (contact.startsWith('http')) {
            return (
                <a href={contact} target="_blank" rel="noopener noreferrer">
                    link
                </a>
            );
        }
        return contact;
    };

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
                                        <Content>{renderContact(selectedOffer.contact)}</Content>
                                    </Field>
                                </JobOfferContent>
                            </JobOfferCard>
                        )}
                        {!selectedSponsor && <p>Wybierz Sponsora</p>}
                    </JobOffersPanel>
                    <ButtonContainer>
                        <PrevButton onClick={handlePrevOffer}>
                            <source srcSet={arrow_left} media="(min-width: 769px)"/>
                            <Img src={arrow_left} alt="last page"/>
                        </PrevButton>
                        <NextButton onClick={handleNextOffer}>
                            <source srcSet={arrow_right} media="(min-width: 769px)"/>
                            <Img src={arrow_right} alt="last page"/>
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
  right: 5%;
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