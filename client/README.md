# SCADA

SCADA to system komputerowy, którego celem jest zwiększenie wydajności produkcji, a także prezentacja w postaci wizualizacji procesu produkcyjnego. SCADA nie tylko zmienia język maszyn na język ludzi, ale również automatycznie reaguje na sygnały z urządzeń.

## Cel projektu

Celem projektu było stworzenie systemu zarządzania i wizualizacji przykładowego procesu technologincznego (filtrowanie cieczy w zbiorniku) z poziomu przeglądarki internetowej, a także zapis danych produkcynych w bazie danych MS SQL i prezentacja danych na stronie internetowej oraz na wykresie.

## Opis projektu

W projekcie stworzono wiele komponentów, które później zostały zaimplementowane. Oprócz standardowych komponentów, stworzono specjalistyczne komponenty przemysłowe takie jak: zbiorniki, zawory, rurociągi proste, rurociągi kątowe, przełączniki przemysłowe, panel nawigacyjny. Użytkownik systemu aby mógł wejść do wizualizacji procesu musi się poprawnie zalogować. Tutaj również może podglądnąć, po naciśnięciu przycisku, kto wcześniej logował się do systemu. Może również usunąć z bazy wcześniej zalogowanych użytkowników systemu. Na samym dole znajduje się przycisk, po naciśnięciu którego zostają przedstawione na wykresie dane z ilości filtrowań cieczy w danym dniu. Użytkownikowi po zalogowania prezentuje się proces technologiczny, którym może sterować (otwierać, zamykać zawory, włączać filtrowanie). Z boku posiada panel nawigacyjny, który prezentuje przbieg procesu technologicznego. Użytkownik również z tego systemu ma możliwość wylogowania się poprzez naciśnięcie przycisku.


## Wykorzystane technologie

W projekcie wykorzystano następujące technologie:

- HTML, CSS (styled components);
- JavaScript (React);
- Node.js i Express;
- Baza danych Microsoft SQL Server;
- Biblioteka Chart.js.


Jestem pewien, że projekt ten bardzo Cię zainteresuje i w jakimś stopniu przedstawi możliwości systemów SCADA.



