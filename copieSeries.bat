@echo off
:: Activer les séquences d'échappement ANSI (Windows 10 et plus récent)
:: Assure-toi que l'environnement supporte les codes ANSI

@echo off
set source="\\192.168.1.251\NAS-Series"
set destination="E:\"

color 3
echo COPIE DES SERIES
echo de %source% VERS %destination%
xcopy %source%\* %destination% /E /H /C /I /Y /D
color A
echo COPIE TERMINER.
pause


