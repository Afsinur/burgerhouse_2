@echo off 

call notepad sectionNo.txt
for /f "tokens=* delims=" %%A in (sectionNo.txt) do set newFl=%%A
set appendToHTMLtxtFileLocation=htmlBatTxt.txt
set appendToJStxtFileLocation=jsBatTxt.txt
goto :main_

:cmn_forLoop
    echo #start appending File(%~1^) texts to File(%~2^)
    pause

    if %~3==open (
        call notepad %~1
    )
    
    for /f "tokens=* delims=" %%A in (%~1) do echo %%A>>%~2

    echo created File(%~2^)
    echo File(%~2^) appending completed
    pause

EXIT /B 0

:ck_html_folder
    IF EXIST html (
        echo Folder(html^) EXIST!
        call cd html
        call cd..
        call :mkHtmlFiles
    ) ELSE (
        call mkdir html
        call cd html
        call cd..
        echo created Folder(html^)
        call :mkHtmlFiles
    )
EXIT /B 0

:ck_js_folder
    IF EXIST js/htmljs (
        echo Folder(js^) EXIST!
        call :mkJsFiles
    ) ELSE (
        call cd js
        call mkdir htmljs
        call cd..
        echo created Folder(htmljs^)
        call :mkJsFiles
    )
EXIT /B 0

:mkHtmlFiles 
    IF EXIST html/%newFl%.html (
        echo File(html/%newFl%.html^) EXIST!
        pause
    ) ELSE (
        call :cmn_forLoop %appendToHTMLtxtFileLocation%, html/%newFl%.html, open
    )
EXIT /B 0

:mkJsFiles 
    IF EXIST js/htmljs/%newFl%.js (
        echo File(js/htmljs/%newFl%.js^) EXIST!
        pause
    ) ELSE (
        call :cmn_forLoop %appendToJStxtFileLocation%, js/htmljs/%newFl%.js, open
    )
EXIT /B 0

:main_
    call :ck_html_folder
    call :ck_js_folder
EXIT /B 0